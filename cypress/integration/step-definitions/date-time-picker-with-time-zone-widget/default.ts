// cypress/integration/step-definitions/date-time-picker-with-time-zone-widget.ts
import {When, Then, Given} from "cypress-cucumber-preprocessor/steps";

Given("I am a user who wants to set a date and time", () => {
    const spy = cy.spy()
    cy.visitStorybook({ onBeforeLoad: spy }).then(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        expect(spy).to.have.been.called
    })
});

When("userSetTimeZone is not set", () => {
    cy.loadStory("components-datetimepickerwithtimezonewidget-datetimepickerwithtimezonewidget", "default-timezone")
});

Then("Timezone should default to UTC", () => {
    cy.findAllByText(/Timezone \(UTC\)/i)
});