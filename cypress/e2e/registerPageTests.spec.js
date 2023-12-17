/// <reference types="cypress" />

import { RegisterPage } from "../pages/register.page"

describe ('Register tests', () => {
    const registerPage = new RegisterPage();

    it('Each validation error message is visable', () => {
        registerPage.open()
        registerPage.elements.nameInput().type('rom')
        registerPage.elements.emailInput().type('qarom')
        cy.contains('nb-register', 'Full name should contains from 4 to 50 characters').should('be.visible')
        registerPage.elements.passwordInput().type('qa')
        cy.contains('nb-register', 'Email should be the real one!').should('be.visible')
        cy.contains('nb-register', 'Email should be the real one!').should('be.visible')
        registerPage.elements.repeatPasswordInput().click()
        registerPage.elements.agreeTermsCheckbox().click()
        cy.contains('nb-register', 'Password confirmation is required!').should('be.visible')
      
    })


    it('Successful Register with valid data', () => {
        registerPage.open()
        registerPage.register('Roman', 'qarom@test.mail', 'qatestpass', 'qatestpass')
        cy.get('div[class="user-picture image ng-star-inserted"]').should('be.visible')


    })




})