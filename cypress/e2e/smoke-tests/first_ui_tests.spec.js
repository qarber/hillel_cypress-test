/// <reference types="cypress" />


describe('change each color shema in row and check background-color', () => {
    // beforeEach(()=> {
        const colors = {
            "Light": "rgb(255, 255, 255)",
            "Dark": "rgb(34, 43, 69)",
            "Cosmic": "rgb(50, 50, 89)",
            "Corporate": "rgb(255, 255, 255)"
           };
    // })
    it('test', () => {
        cy.visit('/')
        cy.get('button[class="select-button"]').click()
        cy.get('ul nb-option[ng-reflect-value="dark"]').click()
        cy.get('nb-layout-header nav').should('have.css','background-color','rgb(34, 43, 69)')

        cy.get('button[class="select-button"]').click()
        cy.get('ul nb-option[ng-reflect-value="cosmic"]').click()
        cy.get('nb-layout-header nav').should('have.css','background-color','rgb(50, 50, 89)')

        cy.get('button[class="select-button"]').click()
        cy.get('ul nb-option[ng-reflect-value="corporate"]').click()
        cy.get('nb-layout-header nav').should('have.css','background-color','rgb(255, 255, 255)')


    })


})




