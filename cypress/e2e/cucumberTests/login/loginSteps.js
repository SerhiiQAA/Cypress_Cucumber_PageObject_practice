import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import loginPage from './loginPage'

Given('I open login page', () => {
    loginPage.visit()
})

When('I fill username with {string}', username => {
    loginPage.fillUsername('username')
})

When('I fill password with {string}', password => {
    loginPage.fillPassword('password')
})

When('I click on submit login', () => {
    loginPage.submit()
})

Then('I should see homepage', () => {
    cy.get('#account_summary_tab').should('be.visible')
})

Then('I should see error message', () => {
    cy.get('#account_summary_tab').should('be.visible')
})