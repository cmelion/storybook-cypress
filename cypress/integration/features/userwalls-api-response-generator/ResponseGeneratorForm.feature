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