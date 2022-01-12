Feature: Calculate Borrow Limit

  Scenario: Verify if borrow limit is calculated correctly for the given values
    Given I am on the calculator page
    When I enter all the values into the calculator
    Then The borrow limit is calculated as "$482,000"

  Scenario: Verify if start over button clears all the fields in the calculator
    Given I am on the calculator page
    And I enter all the values into the calculator
    When I press start over
    Then All the fields in the calculator are set to default values

Scenario: Verify if borrow limit is calculated correctly after starting over
    Given I am on the calculator page
    And I enter all the values into the calculator
    And I press start over
    When I enter all the values into the calculator
    Then The borrow limit is calculated as "$482,000"