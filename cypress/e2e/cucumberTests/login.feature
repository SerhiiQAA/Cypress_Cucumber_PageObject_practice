Feature: Login to App

    As a valid user
    I want to log in into App

    As a invalid user
    I cannot log in into App

    Scenario: Valid Login
        Given I open login page
        When I fill username with 'username'
        And I fill password with 'password'
        And I click on submit login
        Then I should see homepage 

    Scenario: Invalid Login
        Given I open login page
        When I fill username with 'invalid username'
        And I fill password with 'invalid password'
        And I click on submit login
        Then I should see error message 