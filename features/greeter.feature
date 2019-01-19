Feature: Greeter
  In order to be properly greeted
  As a customer
  I must give my name and salutation

  Scenario: simple greeting
    Given I am named "Bob"
    And I want to be saluted with "Hi"
    When I am greeted
    Then the greeting should be "Hi Bob"
