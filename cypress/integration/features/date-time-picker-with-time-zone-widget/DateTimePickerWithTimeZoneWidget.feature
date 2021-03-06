Feature: Timezone aware Date And Time Picker

  Scenario: Defaults to UTC
    Given I am a user who wants to set a date and time
    When userSetTimeZone is not set
    Then Timezone should default to UTC

  Scenario: Displays passed in date prop
    Given I am a user who wants to set a date and time
    When a datetime is set
    Then the passed in date is displayed

  Scenario: User set timezone to America/New_York
    Given I am a user who wants to set a date and time
    When userSetTimeZone is set to New_York
    Then Timezone should display New_York

  Scenario: Accepts edits
    Given I am a user who wants to set a date and time
    When userSetTimeZone is not set
    Then the date can be updated

  Scenario: Handles Start Times
    Given I am a user who wants to set a date and time
    When the date/time is a start time
    Then special handling of start times is supported