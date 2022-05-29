Feature: Tabbed Navigation Widget

  Scenario: I can select the second tab
    Given I am a user who wants to navigate using the tab navigation system
    When I configure the widget with the default routes
    And I select then last tab
    Then the last tab appears selected