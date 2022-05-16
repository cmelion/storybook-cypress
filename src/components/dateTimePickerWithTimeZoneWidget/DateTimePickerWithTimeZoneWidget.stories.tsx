import { DateTimePickerWithTimeZoneWidget } from './';
import { ARG_REDUX_PATH } from 'addon-redux';
import { setTimezone } from "../../state/slice";

export default {
    component: DateTimePickerWithTimeZoneWidget,
    title: 'components/dateTimePickerWithTimeZoneWidget/DateTimePickerWithTimeZoneWidget',
    argTypes: {
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

// @ts-ignore
const Template = args => <DateTimePickerWithTimeZoneWidget {...args} />;

// @ts-ignore
export const Default_Timezone = Template.bind({});
// @ts-ignore
Default_Timezone.args = {
    schema: mockSchema,
    // Provides "timezone" widget for manipulating redux state
    timezone: null,
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