import {Then} from "cypress-cucumber-preprocessor/steps";

Then(/^the json view is displayed$/, function () {
    cy.get('.react-json-view')
        .should('have.length', 1)
});

Then(/^this extraneous step is uncoverd$/, function () {
    cy.get('.react-json-view')
        .should('have.length', 1)
});