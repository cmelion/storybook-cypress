import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import React, {ChangeEvent} from "react";
import {push} from "redux-first-router";
import {useAppSelector} from "../../state/hooks";
import "./styles.scss";

// Remove initial slash, replace hyphens with spaces and capitalize each word
const routeToLabel = (route: string) => route.slice(1).replace(
    /(-|^)([^-]?)/g,
    (_, prep, letter) => (prep && ' ') + letter.toUpperCase()
);

const NavigationTabs = ({routes}:any) => {
    const { type } = useAppSelector((state:any) => state.location);
    const routeMap = Object.keys(routes);

    const handleChange = (event: ChangeEvent<{}>, index: number) => {
        push(routes[routeMap[index]]);
    };

    return <Tabs
        className="state-driven-navigation-tabs"
        value={Math.max(routeMap.map(e => e).indexOf(type), 0)}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="tabbed navigation">
        {
            routeMap.map( (key, index) =>
                <Tab key={`navigation-tab-${index}`} label={routeToLabel(routes[routeMap[index]])} />
            )
        }
    </Tabs>;
};

export default NavigationTabs;
