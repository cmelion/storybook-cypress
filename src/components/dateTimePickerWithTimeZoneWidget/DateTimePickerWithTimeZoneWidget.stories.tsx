import React from "react";
import { DateTimePickerWithTimeZoneWidget } from './';
import { ARG_REDUX_PATH } from 'addon-redux';
import { setTimezone } from "../../state/slice";

export default {
    component: DateTimePickerWithTimeZoneWidget,
    title: 'components/dateTimePickerWithTimeZoneWidget/DateTimePickerWithTimeZoneWidget',
    argTypes: {
        value: {
            control: { type: 'date' }
        },
        timezone: {
            control: { type: 'text' },
            [ARG_REDUX_PATH]: 'environment.userSetTimeZone'
        }
    }
};

// We don't have a wrapping form to provide the schema so pass it down through props
const mockSchema = {
    "title": "Timezone",
    "type": "object",
    "required": [],
    "properties": {
        "time_travel_timestamp": {
            "$id": "#root/time_travel_timestamp",
            "title": "Time Travel Timestamp",
            "type": "string",
            "format": "date-time",
            "examples": [
                "2009-06-15T13:45:30.0000000Z"
            ]
        }
    }
};

let mockStartTimeSchema = JSON.parse(JSON.stringify(mockSchema));
mockStartTimeSchema.title = "Start Time Test";

// @ts-ignore
const Template = args => <DateTimePickerWithTimeZoneWidget {...args} />;

// @ts-ignore
export const Default_Timezone = Template.bind({});
// @ts-ignore
Default_Timezone.args = {
    schema: mockSchema,
    // Provides "timezone" widget for manipulating redux state
    timezone: null,
    onChange: () => {}
};
// @ts-ignore
Default_Timezone.play = async () => {
    // @ts-ignore
    window.store.dispatch(setTimezone(null));
};

// @ts-ignore
export const With_Time_Value = Template.bind({});
// @ts-ignore
With_Time_Value.args = {
    schema: mockSchema,
    value: "2020-11-09T05:00:00.000Z",
    // Provides "timezone" widget for manipulating redux state
    timezone: "UTC",
};
// @ts-ignore
With_Time_Value.play = async () => {
    // @ts-ignore
    window.store.dispatch(setTimezone('UTC'));
};

export const With_User_Selected_Timezone = Template.bind({});
// @ts-ignore
With_User_Selected_Timezone.args = {
    schema: mockSchema,
    // Provides "timezone" widget for manipulating redux state
    timezone: "America/New_York",
};
// @ts-ignore
With_User_Selected_Timezone.play = async () => {
    // @ts-ignore
    window.store.dispatch(setTimezone('America/New_York'));
};

export const With_Start_Time_Title = Template.bind({});
// @ts-ignore
With_Start_Time_Title.args = {
    schema: mockStartTimeSchema,
    onChange: () => {}
};
// @ts-ignore
With_Start_Time_Title.play = async () => {
    // @ts-ignore
    window.store.dispatch(setTimezone(null));
};