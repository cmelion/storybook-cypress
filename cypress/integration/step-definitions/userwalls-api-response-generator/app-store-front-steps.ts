import {Then, When} from "cypress-cucumber-preprocessor/steps";

// When
When(/^"([^"]*)" is entered in the App Store Front Field$/, function (country) {
    cy.get('input[placeholder="Enter or select country"]').type(country)
});

When(/^the "([^"]*)" option is selected$/, function () {
    cy.findByRole("option").click();
});

When(/^the chip is deleted$/, function () {
    cy.get(".MuiChip-deleteIcon").click();
});


// Then
Then(/^the rendered form includes a populated App Store Front$/, function () {
    cy.get(".MuiChip-label").should("have.length", 1);
});

Then(/^the option for "([^"]*)" is displayed$/, function (option) {
    cy.findByRole("option").then($elem => {
        expect($elem.text()).to.equal(option);
    });
});

Then(/^the "([^"]*)" chip is rendered$/, function (option) {
    cy.get(".MuiChip-label").then($elem => {
        expect($elem.text()).to.equal(option);
    }).should("have.length", 1);
});

Then(/^only the "([^"]*)" chip is rendered$/, function (chip) {
    cy.get(".MuiChip-label").then($chip => {
        expect($chip.text()).to.equal(chip);
    }).should("have.length", 1);
});

Then(/^the App Store Front field is unpopulated$/, function () {
    cy.get(".MuiChip-label").should("have.length", 0);
});

Then(/^additional errors are seen$/, function () {
    cy.findAllByText(/should be string/i).should("have.length", 1);
    cy.findAllByText(/Please choose a valid value for ".app_store_front"./i).should("have.length", 1);
});