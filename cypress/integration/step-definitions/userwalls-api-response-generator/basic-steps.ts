// cypress/integration/step-definitions/userwalls-api-response-generator.ts
import {When, Then, Given} from "cypress-cucumber-preprocessor/steps";

// Common Given
Given("I am a user wanting to generate a Plan Picker response", () => {
    const spy = cy.spy()
    cy.visitStorybook({ onBeforeLoad: spy }).then(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        expect(spy).to.have.been.called
    })
});

// Common When
When("{string} is selected as the {string}", (option, field) => {
    cy.get(`#root_${field}`).click();
    cy.findByRole("option", {name: option}).click();
});

When("{string} is pre-selected as the story", (story) => {
    cy.loadStory('components-userwallsapiresponsegenerator-responsegeneratorform', story)
});

// Commen Then
Then("the rendered form contains the basic fields", () => {
    cy.get('#root_env-label')
        .should('have.length', 1)

    cy.get('#root_market-label')
        .should('have.length', 1)

    cy.get('#root_device-label')
        .should('have.length', 1)

    cy.get('#root_token_type-label')
        .should('have.length', 1)

    cy.get('#root_time_travel_timestamp-label')
        .should('have.length', 1)

    cy.get('#root_ip-label')
        .should('have.length', 1)
});

Then(/^form errors are displayed for required fields$/, function () {
    cy.findAllByText(/Please choose a valid value for ".env"./i).should("have.length", 1);
    cy.findAllByText(/Please choose a valid value for ".market"./i).should("have.length", 1);
    cy.findAllByText(/Please choose a valid value for ".device"./i).should("have.length", 1);
});

Then(/^the json view is displayed$/, function () {
    cy.get('.react-json-view')
        .should('have.length', 1)
});
