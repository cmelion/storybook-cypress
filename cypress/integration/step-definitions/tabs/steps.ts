import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

Given(/^I am a user who wants to navigate using the tab navigation system$/, function () {
    const spy = cy.spy()
    cy.visitStorybook({ onBeforeLoad: spy }).then(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        expect(spy).to.have.been.called
    })
});

When(/^I configure the widget with the default routes$/, function () {
    cy.loadStory("components-tabs-navigationtabs", "default-routes");
});

When(/^I select then last tab$/, function () {
    cy.get("button[aria-selected=false]").last().then(($tab) => {
        const tabEl = $tab[0] as HTMLElement;
        expect(tabEl.innerText).to.equal("Coming Soon");
    }).click();
});

Then(/^the last tab appears selected$/, function () {
    cy.get("button[aria-selected=true]").then(($tab) => {
        const tabEl = $tab[0] as HTMLElement;
        expect(tabEl.innerText).to.equal("Coming Soon");
    })
});