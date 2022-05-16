Feature: Timezone aware Date And Time Picker

  Scenario: Defaults to UTC
    Given I am a user who wants to set a date and time
    When userSetTimeZone is not set
    Then Timezone should default to UTC

  Scenario: User set timezone to America/New_York
    Given I am a user who wants to set a date and time
    When userSetTimeZone is set to New_York
    Then Timezone should display New_York