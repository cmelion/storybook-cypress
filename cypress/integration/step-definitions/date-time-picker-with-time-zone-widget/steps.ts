import {When, Then, Given} from "cypress-cucumber-preprocessor/steps";

Given("I am a user who wants to set a date and time", () => {
    const spy = cy.spy()
    cy.visitStorybook({ onBeforeLoad: spy }).then(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        expect(spy).to.have.been.called
    })
});

// Default
When("userSetTimeZone is not set", () => {
    cy.loadStory("components-datetimepickerwithtimezonewidget-datetimepickerwithtimezonewidget", "default-timezone")
});

Then("Timezone should default to UTC", () => {
    cy.findAllByText(/Timezone \(UTC\)/i)
});

// With time value set
When("a datetime is set", () => {
    cy.loadStory("components-datetimepickerwithtimezonewidget-datetimepickerwithtimezonewidget", "with-time-value")
});

Then("the passed in date is displayed", () => {
    cy.findAllByText(/Timezone \(UTC\)/i)
    cy.get('div[data-testid="DateTimePickerWithTimeZoneWidget"] input').then(($input)=>{
        const inputEl = $input[0] as HTMLInputElement;
        expect(inputEl?.value).to.equal("2020-11-09T05:00")
    })
});


// America/New_York
When("userSetTimeZone is set to New_York", () => {
    cy.loadStory("components-datetimepickerwithtimezonewidget-datetimepickerwithtimezonewidget", "with-user-selected-timezone");
});

Then("Timezone should display New_York", () => {
    cy.findAllByText(/Timezone \(America\/New_York\)/i)
});


// Set new date value
Then("the date can be updated", () => {
    cy.get('div[data-testid="DateTimePickerWithTimeZoneWidget"] input')
        .type("2021-11-09T05:00").should("have.value", "2021-11-09T05:00")
});


Then(/^special handling of start times is supported$/, function () {
    cy.get('div[data-testid="DateTimePickerWithTimeZoneWidget"] input')
        .type("2021-11-09T05:00").should("have.value", "2021-11-09T05:00")
});


When(/^the date\/time is a start time$/, function () {
    cy.loadStory("components-datetimepickerwithtimezonewidget-datetimepickerwithtimezonewidget", "with-start-time-title");
});
