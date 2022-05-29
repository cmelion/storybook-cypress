Feature: AutoComplete Widget

  Scenario: Supports Multi-select
    Given I am a user who wants to select or enter values from an options list
    When I configure the widget for multi-select
    And I select multiple options
    Then I see multiple items displayed

  Scenario: Supports Option Generation from Enum
    Given I am a user who wants to select or enter values from an options list
    When I configure the widget for enum support
    Then I can select a single value with or without label

  Scenario: Falls Back to Text Field if no Enum Options are provided
    Given I am a user who wants to select or enter values from an options list
    When I configure the widget without options
    Then I can enter free text

  Scenario: Displays Form Data in Text Field if no Enum Options are provided
    Given I am a user who wants to select or enter values from an options list
    When I configure the widget without options and with form data
    Then I see the form data

  Scenario: Typed Number (single select)
    Given I am a user who wants to select or enter values from an options list
    When I configure the widget with number enum with type
    Then I am constrained to picking a single number

  Scenario: Infer Number (single select)
    Given I am a user who wants to select or enter values from an options list
    When I configure the widget with number enum without type
    Then I am constrained to picking a single number

  Scenario: Typed Number (multi select)
    Given I am a user who wants to select or enter values from an options list
    When I configure the widget with multi-select and number enum with type
    Then I am not constrained to picking a single number

  Scenario: Infer Number (multi select)
    Given I am a user who wants to select or enter values from an options list
    When I configure the widget with multi-select and number enum without type
    Then I am not constrained to picking a single number

  Scenario: Typed Boolean
    Given I am a user who wants to select or enter values from an options list
    When I configure the widget with boolean enum with type
    Then I am constrained to picking a single boolean

  Scenario: Infer Boolean
    Given I am a user who wants to select or enter values from an options list
    When I configure the widget with boolean enum without type
    Then I am constrained to picking a single boolean

  Scenario: Missing Option
    Given I am a user who wants to select or enter values from an options list
    When I configure the widget using enums and use formData values not in the option list
    Then the value is displayed (but will not appear in the options list)

  Scenario: Click to Copy values excluding labels
    Given I am a user who wants to select or enter values from an options list
    When I configure the widget for multi-select
    Then I can select a single value with or without label
    And I can click to copy the data contained in a chip

  Scenario: Click to Copy Options with Missing Labels
    Given I am a user who wants to select or enter values from an options list
    When I configure the widget using enums and use formData values not in the option list
    Then I can click to copy the data contained in a chip

  Scenario: Handles Missing Placeholder when no Enum Options are provided
    Given I am a user who wants to select or enter values from an options list
    When I configure the widget without options and without a placeholder
    Then the widget defaults to using the field name as a placeholder

  Scenario: Handles Missing Placeholder when Options are provided
    Given I am a user who wants to select or enter values from an options list
    When I configure the widget without a placeholder
    Then the widget defaults to using the field name as a placeholder
