import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

Given(/^I am a user who wants to select or enter values from an options list$/, function () {
    const spy = cy.spy()
    cy.visitStorybook({ onBeforeLoad: spy }).then(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        expect(spy).to.have.been.called
    })
});

When("I configure the widget for multi-select", function () {
    cy.loadStory("components-autocomplete-autocompletewidget", "multiple-auto-complete");
});

When(/^I select multiple options$/, function () {
    cy.get('input[placeholder="Enter or select country"]').type("AN")
    cy.findByRole("option").click();
    cy.get('input[placeholder="Enter or select country"]').type("BE")
    cy.findByRole("option").click();
});

Then(/^I see multiple items displayed$/, function () {
    cy.get(".MuiChip-label").should("have.length.greaterThan", 1);
});


When(/^I configure the widget for enum support$/, function () {
    cy.loadStory("components-autocomplete-autocompletewidget", "enum-auto-complete");
});

Then(/^I can select a single value with or without label$/, function () {
    cy.get('input[placeholder="Enter or select country"]').type("AN{downarrow}{enter}").blur();
    cy.get(".MuiChip-label").should("have.length", 1);
    // Need to verify label format
});

When(/^I configure the widget without options$/, function () {
    cy.loadStory("components-autocomplete-autocompletewidget", "zero-options-auto-complete");
});

Then(/^I can enter free text$/, function () {
    const arbitraryValue = "Arbitrary value"
    cy.get('input[placeholder="Enter or select country"]').type(arbitraryValue).blur();
    cy.get('input[placeholder="Enter or select country"]').then(($input)=>{
        const inputEl = $input[0] as HTMLInputElement;
        expect(inputEl?.value).to.equal(arbitraryValue)
    })
});

When(/^I configure the widget with number enum without type$/, function () {
    cy.loadStory("components-autocomplete-autocompletewidget", "infer-number-auto-complete");
});

Then(/^I am constrained to picking a single number$/, function () {
    cy.get('input[placeholder="Enter or select country"]').type("{downarrow}{enter}").blur();
    cy.get(".MuiChip-label").should("have.length", 1);
    cy.get('input[placeholder="Enter or select country"]').type("{downarrow}{downarrow}{enter}").blur();
    cy.get(".MuiChip-label").should("have.length", 1);
    // Delete last chip for branch coverage
    cy.get(".MuiChip-deleteIcon").click();
});

When(/^I configure the widget with boolean enum without type$/, function () {
    cy.loadStory("components-autocomplete-autocompletewidget", "infer-boolean-auto-complete");
});

Then(/^I am constrained to picking a single boolean$/, function () {
    cy.get('input[placeholder="Enter or select country"]').type("{downarrow}{enter}").blur();
    cy.get(".MuiChip-label").should("have.length", 1);
    cy.get('input[placeholder="Enter or select country"]').type("{downarrow}{enter}").blur();
    cy.get(".MuiChip-label").should("have.length", 1);
});

When(/^I configure the widget with number enum with type$/, function () {
    cy.loadStory("components-autocomplete-autocompletewidget", "number-auto-complete");
});

When(/^I configure the widget with boolean enum with type$/, function () {
    cy.loadStory("components-autocomplete-autocompletewidget", "boolean-auto-complete");
});

When(/^I configure the widget with multi-select and number enum with type$/, function () {
    cy.loadStory("components-autocomplete-autocompletewidget", "number-multiple-auto-complete");
});

When(/^I configure the widget with multi-select and number enum without type$/, function () {
    cy.loadStory("components-autocomplete-autocompletewidget", "infer-number-multiple-auto-complete");
});

Then(/^I am not constrained to picking a single number$/, function () {
    cy.get('input[placeholder="Enter or select country"]').type("{downarrow}{enter}").blur();
    cy.get(".MuiChip-label").should("have.length", 1);
    cy.get('input[placeholder="Enter or select country"]').type("{downarrow}{enter}").blur();
    cy.get(".MuiChip-label").should("have.length", 2);
});

When(/^I configure the widget using enums and use formData values not in the option list$/, function () {
    cy.loadStory("components-autocomplete-autocompletewidget", "missing-option-auto-complete");
});

Then(/^the value is displayed \(but will not appear in the options list\)$/, function () {
    cy.findAllByText(/missing option/i).should("have.length", 1);
});

Then(/^I can click to copy the data contained in a chip$/, function () {
    cy.get(".MuiChip-label").click();
});

When(/^I configure the widget without options and with form data$/, function () {
    cy.loadStory("components-autocomplete-autocompletewidget", "zero-options-with-data-auto-complete");
});

Then(/^I see the form data$/, function () {
    cy.get('input[placeholder="Enter or select country"]').then(($input)=>{
        const inputEl = $input[0] as HTMLInputElement;
        expect(inputEl?.value).to.equal("Wakanda")
    })
});
When(/^I configure the widget without options and without a placeholder$/, function () {
    cy.loadStory("components-autocomplete-autocompletewidget", "missing-options-and-placeholder-auto-complete");
});
Then(/^the widget defaults to using the field name as a placeholder$/, function () {
    cy.get('input[placeholder=""]').should("have.length", 1);
});
When(/^I configure the widget without a placeholder$/, function () {
    cy.loadStory("components-autocomplete-autocompletewidget", "missing-placeholder-auto-complete");
});