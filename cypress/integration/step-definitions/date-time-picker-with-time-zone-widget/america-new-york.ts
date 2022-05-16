// cypress/integration/step-definitions/date-time-picker-with-time-zone-widget.ts
import {When, Then, Given} from "cypress-cucumber-preprocessor/steps";

Given("I am a user who wants to set a date and time", () => {
    const spy = cy.spy()
    cy.visitStorybook({ onBeforeLoad: spy }).then(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        expect(spy).to.have.been.called
    })
});

When("userSetTimeZone is set to New_York", () => {
    cy.loadStory("components-datetimepickerwithtimezonewidget-datetimepickerwithtimezonewidget", "with-user-selected-timezone");
});

Then("Timezone should display New_York", () => {
    cy.findAllByText(/Timezone \(America\/New_York\)/i)
});