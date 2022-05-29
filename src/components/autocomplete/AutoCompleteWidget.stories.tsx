import { MuiForm5 as Form } from "@rjsf/material-ui";
import {AutoCompleteWidget} from './';
import ObjectFieldTemplate from '../ObjectFieldTemplate';

export default {
    component: AutoCompleteWidget,
    title: 'components/autocomplete/AutoCompleteWidget',
    argTypes: {}
};

const widgets = {
    autoCompleteWidget: AutoCompleteWidget,
};

// We don't have a wrapping form to provide the schema so pass it down through props
const numberEnumSchema =  {
    "title": "Number support",
    "type": "object",
    "properties": {
        "country":  {
            title: "Simple Number Picker",
            type: "number",
            enum: [1, 2, 3],
            enumNames: ["one", "two", "three"]
        }
    }
};
let untypedNumberEnumSchema = JSON.parse(JSON.stringify(numberEnumSchema));
untypedNumberEnumSchema.properties.country.type = undefined;
untypedNumberEnumSchema.title = "Untyped Number Enum";

const booleanEnumSchema = {
    "title": "Boolean support",
    "type": "object",
    "properties": {
        "country":  {
            title: "Simple Boolean Picker",
            type: "boolean",
            enum: [false, true],
            enumNames: ["negative", "positive"]
        }
    }
};
let untypedBooleanEnumSchema = JSON.parse(JSON.stringify(booleanEnumSchema));
untypedBooleanEnumSchema.properties.country.type = undefined;

const enumSchema =  {
    "title": "Enum support",
    "type": "object",
    "properties": {
        "country":  {
            "type": "string",
            "title": "Simple Country Picker",
            "enum": [
                "AN",
                "BE"
            ]
        }
    }
};
let untypedEnumSchema = JSON.parse(JSON.stringify(enumSchema));
untypedEnumSchema.properties.country.type = undefined;
untypedEnumSchema.title = "Untyped String Enum"

const multiSchema = {
    "title": "Multi-Select Countries",
    "description": "Schema used for testing multi-select",
    "type": "object",
    "required": [],
    "properties": {
        "country": {
            "$id": "#root/country",
            "title": "Country",
            "type": "array",
            "items": {
                "anyOf": [
                    {
                        "const": "AD",
                        "title": "Andorra",
                        "type": "string"
                    },
                    {
                        "const": "BE",
                        "title": "Belgium",
                        "type": "string"
                    },
                ]
            },
            "uniqueItems": true
        }
    }
};
const numberMultiSchema = {
    "title": "Multi-Select Numbers",
    "type": "object",
    "required": [],
    "properties": {
        "country": {
            "$id": "#root/country",
            "title": "Country",
            "type": "array",
            "items": {
                "anyOf": [
                    {
                        "const": 1,
                        "title": "One",
                        "type": "number"
                    },
                    {
                        "const": 2,
                        "title": "Two",
                        "type": "number"
                    },
                ]
            },
            "uniqueItems": true
        }
    }
};
const inferNumberMultiSchema = {
    "title": "Multi-Select Numbers",
    "type": "object",
    "required": [],
    "properties": {
        "country": {
            "$id": "#root/country",
            "title": "Country",
            "type": "array",
            "items": {
                "anyOf": [
                    {
                        "const": 1,
                        "title": "One",
                    },
                    {
                        "const": 2,
                        "title": "Two",
                    },
                ]
            },
            "uniqueItems": true
        }
    }
};

let zeroOptionsSchema = JSON.parse(JSON.stringify(enumSchema));
zeroOptionsSchema.title = "Zero Options Configured";
zeroOptionsSchema.properties.country.enum = undefined;
zeroOptionsSchema.properties.country.title = undefined;

// Schema used for layout
const uiSchema = {
    "country": {
        "xs": 6,
        "ui:widget": "autoCompleteWidget",
        "ui:placeholder": "Enter or select country"
    }
}

// @ts-ignore
const Template = args => <Form ObjectFieldTemplate={ObjectFieldTemplate} {...args}/>;

export const Enum_AutoComplete =  Template.bind({});
// @ts-ignore
Enum_AutoComplete.args = {
    schema: enumSchema,
    uiSchema: uiSchema,
    widgets: widgets,
    placeholder: "Enter or select country"
};

export const Multiple_AutoComplete =  Template.bind({});
// @ts-ignore
Multiple_AutoComplete.args = {
    schema: multiSchema,
    uiSchema: uiSchema,
    widgets: widgets,
    placeholder: "Enter or select country"
};

export const Missing_Option_AutoComplete =  Template.bind({});
// @ts-ignore
Missing_Option_AutoComplete.args = {
    formData: {"country": ["missing option"]},
    schema: enumSchema,
    uiSchema: uiSchema,
    widgets: widgets,
    placeholder: "Enter or select country"
};

export const Number_Multiple_AutoComplete =  Template.bind({});
// @ts-ignore
Number_Multiple_AutoComplete.args = {
    schema: numberMultiSchema,
    uiSchema: uiSchema,
    widgets: widgets,
    placeholder: "Enter or select country"
};

export const Infer_Number_Multiple_AutoComplete =  Template.bind({});
// @ts-ignore
Infer_Number_Multiple_AutoComplete.args = {
    schema: inferNumberMultiSchema,
    uiSchema: uiSchema,
    widgets: widgets,
    placeholder: "Enter or select country"
};

export const Zero_Options_AutoComplete =  Template.bind({});
// @ts-ignore
Zero_Options_AutoComplete.args = {
    schema: zeroOptionsSchema,
    uiSchema: uiSchema,
    widgets: widgets,
    placeholder: "Enter or select country"
};

export const Zero_Options_With_Data_AutoComplete =  Template.bind({});
// @ts-ignore
Zero_Options_With_Data_AutoComplete.args = {
    formData: {"country": ["Wakanda"]},
    schema: zeroOptionsSchema,
    uiSchema: uiSchema,
    widgets: widgets,
    placeholder: "Enter or select country"
};

export const Number_AutoComplete =  Template.bind({});
// @ts-ignore
Number_AutoComplete.args = {
    schema: numberEnumSchema,
    uiSchema: uiSchema,
    widgets: widgets,
    placeholder: "Enter or select country"
};

export const Infer_Number_AutoComplete =  Template.bind({});
// @ts-ignore
Infer_Number_AutoComplete.args = {
    schema: untypedNumberEnumSchema,
    uiSchema: uiSchema,
    widgets: widgets,
    placeholder: "Enter or select country"
};

export const Boolean_AutoComplete =  Template.bind({});
// @ts-ignore
Boolean_AutoComplete.args = {
    schema: booleanEnumSchema,
    uiSchema: uiSchema,
    widgets: widgets,
    placeholder: "Enter or select country"
};

export const Infer_Boolean_AutoComplete =  Template.bind({});
// @ts-ignore
Infer_Boolean_AutoComplete.args = {
    schema: untypedBooleanEnumSchema,
    uiSchema: uiSchema,
    widgets: widgets,
    placeholder: "Enter or select country"
};

export const Missing_Placeholder_AutoComplete =  Template.bind({});
// @ts-ignore
Missing_Placeholder_AutoComplete.args = {
    schema: zeroOptionsSchema,
    uiSchema: {"country": {"ui:widget": "autoCompleteWidget"}},
    widgets: widgets,
};

export const Missing_Options_And_Placeholder_AutoComplete =  Template.bind({});
// @ts-ignore
Missing_Options_And_Placeholder_AutoComplete.args = {
    schema: enumSchema,
    uiSchema: {"country": {"ui:widget": "autoCompleteWidget"}},
    widgets: widgets,
};




