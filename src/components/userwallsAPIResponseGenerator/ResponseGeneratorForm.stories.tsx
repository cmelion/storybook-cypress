import {ResponseGeneratorForm} from './';
import { ARG_REDUX_PATH } from 'addon-redux';
import { setTimezone } from "../../state/slice";

export default {
    component: ResponseGeneratorForm,
    title: 'components/userwallsAPIResponseGenerator/ResponseGeneratorForm',
    argTypes: {
        timezone: {
            control: { type: 'text' },
            [ARG_REDUX_PATH]: 'environment.userSetTimeZone'
        }
    }
};


const Template = (args: any) => <ResponseGeneratorForm {...args} />;

export const Basic = () => <ResponseGeneratorForm />;
Basic.args = {};
Basic.play = async () => {
    // @ts-ignore
    window.store.dispatch({type: "reset-state"});
};

export const Roku = Template.bind({});

// @ts-ignore
Roku.args = {
    formData: {
        "env": "",
        "market": "",
        "device": "roku",
        "ip": "",
        "app_store_front": "BE",
        "apple_full_receipt": ""
    },
};
// @ts-ignore
Roku.play = async () => {
    // @ts-ignore
    window.store.dispatch({type: "reset-state"});
};

export const iPhone = Template.bind({});
// @ts-ignore
iPhone.args = {
    formData: {
        "env": "",
        "market": "",
        "device": "iphone",
        "ip": "",
        "app_store_front": null,
        "apple_full_receipt": ""
    },
};
// @ts-ignore
iPhone.play = async () => {
    // We exposed the store on the window object when it was created this allows us
    // to manipulate state via the redux "dispatch" method
    // This is the only way to set the state that works with stories loaded into Cypress tests
    // @ts-ignore
    window.store.dispatch({type: "reset-state"});
    // @ts-ignore
    window.store.dispatch(setTimezone('America/New_York'));
};

export const SubmissionReady = Template.bind({});
// @ts-ignore
SubmissionReady.args = {
    formData: {
        "env": "snp",
        "market": "us",
        "device": "desktop",
        "ip": "",
        "app_store_front": null,
        "apple_full_receipt": ""
    },
};
// @ts-ignore
SubmissionReady.play = async () => {
    // @ts-ignore
    window.store.dispatch({type: "reset-state"});
};
