import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { MuiForm5 as Form } from "@rjsf/material-ui";
import React, {useEffect, useReducer} from "react";
import {useResource} from "react-request-hook";
import ReactJson from "react-json-view"
import { AutoCompleteWidget } from "../../components/autocomplete";
import { DateTimePickerWithTimeZoneWidget } from "../../components/dateTimePickerWithTimeZoneWidget";
import {NavigationTabs} from "../../components/tabs";
import {routes} from "../../routes";
import ObjectFieldTemplate from "../../components/ObjectFieldTemplate";
import api from "../../api";

const widgets = {
    autoCompleteWidget: AutoCompleteWidget,
    dateTimePickerWithTimeZoneWidget: DateTimePickerWithTimeZoneWidget
};

let initialState = {
    key: Date.now(),  // initialize
    planPickerApiResponse: undefined,
    planPickerResponseLoaded: false,
    schema: undefined,
    schemaLoaded: false,
    uiSchema: {
        "env": {"xs": 6},
        "market": {"xs": 6},
        "device": {"xs": 6},
        "token_type": {"xs": 6},
        "time_travel_timestamp": {
            "xs": 6,
            "ui:widget": "dateTimePickerWithTimeZoneWidget",
        },
        "ip": {"xs": 6},
        "apple_full_receipt": {"xs": 6},
        "app_store_front": {
            "xs": 6,
            "ui:widget": "autoCompleteWidget",
            "ui:placeholder": "Enter or select country"
        }
    },
    formData: {},
    cachedProductDefinitions: undefined
};

const reducer = (state: any, action: { type: any, payload?: any }) => {
    switch (action.type) {
        case "RESET_FORM": {
            initialState.cachedProductDefinitions = undefined;
            initialState.formData = {};
            return {...state, key: Date.now(), formData: {}};
        }

        case "SET_SCHEMA_LOADED": {

            return {...state, schema: action.payload, schemaLoaded: true}
        }

    }
};

const ResponseGeneratorForm = (props: any) => {
    // State hooks
    const [state, dispatch] = useReducer(reducer, initialState);
    const {key, schema, schemaLoaded, uiSchema} = state;


    // Redux hooks


    // Wire up APIs -
    const [schemaResponse, getSchema] = useResource(api.getAPIResponseGeneratorSchema);
    const [planPickerAPIResponse, generatePlanPickerAPIResponse] = useResource(api.generatePlanPickerAPIResponse);

    // Handle side-effects -

    // Effect Hook to load the values and generate form elements from schema
    useEffect(() => getSchema(),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []);

    useEffect(() => {
        if (schemaResponse.data) {
            dispatch({type: "SET_SCHEMA_LOADED", payload: schemaResponse.data})
        }
    }, [schemaResponse, dispatch]);


    // After every render - ensure hidden fields don't take up space

    // Effect Hook to load the values and generate form elements from schema


    // @ts-ignore
    const submitValues = ({formData} ) => {
        // Re-render of form after submit clears data - persist in case of error
        initialState.formData = formData
        generatePlanPickerAPIResponse(formData);

    };

    const handleReset = () => {
        dispatch({type: "RESET_FORM"})
    };

    // make errors more readable based on schema definition if any
    // @ts-ignore
    const transformErrors = errors => {
        // a Set to track seen brands
        const seen = new Set();

        return errors.filter((error: { schemaPath: string; message: string; property: any; }) => {
            const indexOfOneOf = error.schemaPath.indexOf('oneOf');
            const indexOfType = error.schemaPath.indexOf('type');
            const index = Math.min(indexOfOneOf, indexOfType) > 0 ?
                Math.min(indexOfOneOf, indexOfType) : Math.max(indexOfOneOf, indexOfType);
            // check if the current message is a duplicate
            if (indexOfOneOf > 0) {
                error.message = `Please choose a valid value for "${error.property}".`;
            }
            const isDuplicate: boolean = seen.has(error.message + error.schemaPath.substring(1, index));
            // add the current message to the Set
            if (!isDuplicate) {
                seen.add(error.message + error.schemaPath.substring(1, index));
            }
            // filter() returns the brand when isDuplicate is false
            return !isDuplicate;
        });

    };

    // @ts-ignore
    const ResponseGeneratorForm = () =>
        <Form key={key/*specify element key*/}
              showErrorList={false}
              transformErrors={transformErrors}
              noHtml5Validate={true}
              schema={schema}
              uiSchema={uiSchema}
              ObjectFieldTemplate={ObjectFieldTemplate}
              formData={props.formData || initialState.formData}
              onSubmit={submitValues}
              omitExtraData={true}
              widgets={widgets}
        >
            <div>
                <Button type="button" onClick={handleReset}>Reset</Button>
                <Button type="submit">Submit</Button>
            </div>
        </Form>;

    return <div data-testid="response-generator-form-wrapper" className="response-generator-form-wrapper">
        <Paper elevation={1} >
            <NavigationTabs routes={routes}/>
            {schemaLoaded &&
                <ResponseGeneratorForm/>
            }
        </Paper>
        {planPickerAPIResponse.data &&
            <ReactJson src={planPickerAPIResponse.data} theme="monokai"/>
        }
    </div>
};

export default ResponseGeneratorForm;
