import React from "react";
import TextField from "@mui/material/TextField";
import moment from "moment-timezone";
import { useAppSelector } from '../../state/hooks';
import {RootState} from "../../state/store";

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUserSetTimeZone = (state: RootState) => state.environment?.userSetTimeZone;

const DateTimePickerWithTimeZoneWidget = ({
    autofocus,
    disabled,
    id,
    label,
    onChange,
    placeholder,
    rawErrors = [],
    readonly,        
    required,
    schema,
    value}:  any) => {

    const userSetTimeZone = useAppSelector(selectUserSetTimeZone) || "UTC";

    const _onChange = (event: any) => {
        // we generally starts at 0th second and ends at 59th second
        const startOrEndSeconds = schema.title.toLowerCase().includes("start") ? 0 : 59
        const value = moment.tz(event.currentTarget.value, userSetTimeZone).set({second:startOrEndSeconds, millisecond: 0}).toISOString();
        onChange(value);
    }

    if (value) {
        placeholder = moment.tz(value, userSetTimeZone).format( "yyyy-MM-DDThh:mm");
    } else {
        placeholder = moment.tz().format( "yyyy-MM-DDThh:mm");
    }

    /**
     * This is a silly limitation in the DOM where option change event values are
     * always retrieved as strings.
     */
   
    return (
            // Fall back to text input if no options are provided via schema
            <TextField
                id={id}
                data-testid="DateTimePickerWithTimeZoneWidget"
                label={`${label || schema.title} (${userSetTimeZone})`}
                type="datetime-local"
                defaultValue = {placeholder}
                InputLabelProps={{ shrink: true, }}
                // @ts-ignore
                required={required}
                disabled={disabled || readonly}
                autoFocus={autofocus}
                error={rawErrors.length > 0}
                onChange={_onChange}
            />
    );
};

export default DateTimePickerWithTimeZoneWidget;
