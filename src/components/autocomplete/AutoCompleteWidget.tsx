import React from "react";

import TextField from "@mui/material/TextField";
import Autocomplete from '@mui/material/Autocomplete';
import {toast} from 'react-toastify';
import copy from "clipboard-copy";

import {WidgetProps} from "@rjsf/core";
import {utils} from "@rjsf/core";

const {asNumber, guessType} = utils;

// const nums = new Set(["number", "integer"]);

const AutoCompleteWidget = ({
                                schema,
                                id,
                                options,
                                label,
                                required,
                                disabled,
                                readonly,
                                value,
                                multiple,
                                autofocus,
                                onChange,
                                onBlur,
                                onFocus,
                                rawErrors = [],
                                placeholder,
                            }: WidgetProps) => {
    const {enumOptions} = options;

    if (!placeholder) {
        placeholder = (options.placeholder) as any;
    }

    const emptyValue = multiple ? [] : undefined;
    const unknownOption = {
        "schema": {
            "const": undefined,
            "title": "Unknown",
            "type": "string"
        },
        "label": "Unknown",
        "value": undefined
    }

    /**
     * This is a silly limitation in the DOM where option change event values are
     * always retrieved as strings.
     */
    const processValue = (schema: any, value: any) => {
        // "enum" is a reserved word, so only "type" and "items" can be destructured
        const {type /*, items*/} = schema;
        if (value === "" || value.length === 0) {
            return undefined;
        // } else if (type === "array" && items && nums.has(items.type)) {
        //     return value.map(asNumber);
        } else if (type === "boolean") {
            return [value[value.length - 1]];
        }

        if (multiple === undefined) {
            const idx = value.length -1 ;
            // If type is undefined, but an enum is present, try and infer the type from
            // the enum values
            if (schema.enum) {
                if (schema.enum.every((x: any) => guessType(x) === "number")) {
                    return asNumber(value[idx]);
                } else if (schema.enum.every((x: any) => guessType(x) === "boolean")) {
                    return value[idx] === true;
                }
            }
            // Remove the original item and return the new value
            return value[idx];
        }
        return value;
    };

    const _onChange = (event: React.ChangeEvent, newValues: any) =>
        onChange(
            processValue(
                schema,
                newValues.map((item: any) => item.value)
            )
        );
    const _onBlur = ({target: {value}}: React.FocusEvent<HTMLInputElement>) =>
        onBlur(id, processValue(schema, value));
    const _onFocus = ({
                          target: {value},
                      }: React.FocusEvent<HTMLInputElement>) => {
        onFocus(id, processValue(schema, value));
    };
    const buildDefaultValue = () => {
        const options: any = enumOptions as [];
        if (multiple) {
            return value.map((option: any) => {
                return options.find((item: any) => item.value === option);
            })
        } else {
            if (value === null || value === undefined) {
                return [];
            }
            const matchingValue = Array.isArray(value) ? value[0] : value;
            let option = options.find((item: any) => item.value === matchingValue);
            // Handle missing enum
            if (option === undefined) {
                option = unknownOption;
                option.value = value;
                option.schema.const = value;
            }
            return [option];
        }
    }

    const handleClick = (ev: any) => {
        const fullText = ev.target.innerText;
        const preferredText = fullText.match(/\(([^()]*)\)$/);
        const value = preferredText? preferredText.pop() : fullText;
        copy(value).then(() =>
            toast.info(
                <React.Fragment>
                    <div>Clipboard Copy</div>
                    <br/>
                    <b>"{value}"</b> is available to paste.
                </React.Fragment>
            ))
    };

    return (
        enumOptions === false ?
            // Fall back to text input if no options are provided via schema
            <TextField
                id={id}
                label={label}
                value={typeof value === "undefined" ? emptyValue : value}
                // @ts-ignore
                placeholder={typeof placeholder === "undefined" ? "" : placeholder}
                required={required}
                disabled={disabled || readonly}
                autoFocus={autofocus}
                error={rawErrors.length > 0}
            /> :
            // Known validation bug when using oneOf dependency - https://github.com/rjsf-team/react-jsonschema-form/issues/1590
            <Autocomplete
                multiple
                ChipProps={{
                    clickable: true,
                    onClick: handleClick
                }}
                value={
                    buildDefaultValue()
                }
                // @ts-ignore
                options={options.enumOptions /* || options */}
                // @ts-ignore
                getOptionLabel={(option) => {
                    // if (typeof option === "undefined") {
                    //     return emptyValue;
                    // }
                    // @ts-ignore
                    if (option.label === "Unknown" || option.label === option.value) {
                        return option.value;
                    }
                    // @ts-ignore
                    return `${option.label} (${option.value})`
                }}
                isOptionEqualToValue={
                    (option: { value: any; }, value: { value: any; } | undefined) => {
                        return option.value === value?.value
                    }
                }
                // @ts-ignore
                onChange={_onChange}
                onBlur={_onBlur}
                onFocus={_onFocus}
                disabled={schema.readOnly === true}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        id={id}
                        label={label}
                        value={typeof value === "undefined" ? emptyValue : value}
                        // @ts-ignore
                        placeholder={typeof placeholder === "undefined" ? "" : placeholder}
                        required={required}
                        disabled={disabled || readonly}
                        autoFocus={autofocus}
                        error={rawErrors.length > 0}
                    />
                )}
            />
    );
};

export default AutoCompleteWidget;