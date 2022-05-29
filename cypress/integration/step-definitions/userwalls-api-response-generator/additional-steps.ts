// cypress/integration/userwalls-api-response-generator.ts
import {And} from "cypress-cucumber-preprocessor/steps";

And("the rendered form does not contain App Store Front", () => {
    cy.findAllByText(/App Store Front/i).should("have.length", 0);
});

And("the rendered form does not contain Apple Full Receipt", () => {
    cy.findAllByText(/Apple Full Receipt/i).should("have.length", 0);
});

And("the rendered form includes Apple Full Receipt", () => {
    cy.findAllByText(/Apple Full Receipt/i).should("have.length", 2);
});

And("the rendered form includes App Store Front", () => {
    cy.findAllByText(/App Store Front/i).should("have.length", 2);
});

And("a form reset is triggered", () => {
    cy.get('button:contains("Reset")').click();
});

And("a form submit is triggered", () => {
    cy.get('button:contains("Submit")').click();
});