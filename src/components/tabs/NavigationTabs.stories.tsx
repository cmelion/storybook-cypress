import React from "react";
import { NavigationTabs} from "./index";
import {routes} from "../../routes";
import {ARG_REDUX_PATH} from "addon-redux";

export default {
    component: NavigationTabs,
    title: 'components/tabs/NavigationTabs',
    argTypes: {
        routes: {
            control: {type: 'object'}
        },
        location: {
            control: { type: 'text' },
            [ARG_REDUX_PATH]: 'location.type'
        }
    }
};

// @ts-ignore
const Template = args => <NavigationTabs {...args} />;

export const Default_Routes =  Template.bind({});

// @ts-ignore
Default_Routes.args = {
    routes: routes,
    location: "USERWALLSAPIRESPONSEGENERATOR"
}
// @ts-ignore
Default_Routes.play = async () => {
    // @ts-ignore
    window.store.dispatch({type:"USERWALLSAPIRESPONSEGENERATOR"});
};
