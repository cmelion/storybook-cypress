Feature: Loading the Response Generator Form

  Scenario: Visiting the Basic Userwalls API Response Generator
    Given I am a user wanting to generate a Plan Picker response
    When "Basic" is pre-selected as the story
    Then the rendered form contains the basic fields
    And the rendered form does not contain App Store Front
    And the rendered form does not contain Apple Full Receipt

  Scenario: Visiting the Userwalls API Response Generator with App Store Front Required (Roku)
    Given I am a user wanting to generate a Plan Picker response
    When "Roku" is pre-selected as the story
    Then the rendered form contains the basic fields
    And the rendered form does not contain Apple Full Receipt
    And the rendered form includes App Store Front

  Scenario: Visiting the Userwalls API Response Generator with App Store Front and Apple Full Receipt (iPhone)
    Given I am a user wanting to generate a Plan Picker response
    When "iPhone" is pre-selected as the story
    Then the rendered form contains the basic fields
    And the rendered form includes App Store Front
    And the rendered form includes Apple Full Receipt

  Scenario: App Store Front AutoComplete is configured for a single value
    Given I am a user wanting to generate a Plan Picker response
    When "Roku" is pre-selected as the story
    Then the rendered form includes a populated App Store Front
    When "Alban" is entered in the App Store Front Field
    Then the option for "Albania (AL)" is displayed
    When the "Albania (AL)" option is selected
    Then only the "Albania (AL)" chip is rendered

  Scenario: App Store Front AutoComplete can be cleared
    Given I am a user wanting to generate a Plan Picker response
    When "Roku" is pre-selected as the story
    Then the rendered form includes a populated App Store Front
    When the chip is deleted
    Then the App Store Front field is unpopulated

  Scenario: Resetting the Plan Picker to defaults
    Given I am a user wanting to generate a Plan Picker response
    When "Basic" is pre-selected as the story
    Then the rendered form does not contain App Store Front
    And the rendered form does not contain Apple Full Receipt
    When "iPhone" is selected as the "device"
    Then the rendered form includes App Store Front
    And the rendered form includes Apple Full Receipt
    When a form reset is triggered
    Then the rendered form does not contain App Store Front
    And the rendered form does not contain Apple Full Receipt

  Scenario: Basic Form Submission Errors
    Given I am a user wanting to generate a Plan Picker response
    When "Basic" is pre-selected as the story
    And a form submit is triggered
    Then form errors are displayed for required fields

  Scenario: Additional Fields Submission Errors
    Given I am a user wanting to generate a Plan Picker response
    When "iPhone" is pre-selected as the story
    And a form submit is triggered
    Then additional errors are seen

  Scenario: Submission Ready
    Given I am a user wanting to generate a Plan Picker response
    When "Submission Ready" is pre-selected as the story
    And a form submit is triggered
    Then the json view is displayed