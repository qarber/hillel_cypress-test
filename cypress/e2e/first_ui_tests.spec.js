/// <reference types="cypress" />


describe('First UI tests of our project', () => {
 
    it('change each color shema in row and check background-color', () => {

        const colors = {
            "Light": "rgb(255, 255, 255)",
            "Dark": "rgb(34, 43, 69)",
            "Cosmic": "rgb(50, 50, 89)",
            "Corporate": "rgb(255, 255, 255)"
           };

        cy.visit('/')
        cy.get('button[class="select-button"]').should('be.visible').click()
        cy.get('ul nb-option[ng-reflect-value="dark"]').click()
        cy.get('nb-layout-header nav').should('have.css','background-color',colors.Dark)


        cy.get('button[class="select-button"]').click()
        cy.get('ul nb-option[ng-reflect-value="cosmic"]').click()
        cy.get('nb-layout-header nav').should('have.css','background-color',colors.Cosmic)


        cy.get('button[class="select-button"]').click()
        cy.get('ul nb-option[ng-reflect-value="corporate"]').click()
        cy.get('nb-layout-header nav').should('have.css','background-color',colors.Corporate)



    })

    it('Text from "Product Details" block visibility', () => {
        cy.visit('/pages/layout/accordion')
        cy.contains('nb-accordion-item-body', 'hydrogen, helium and other ionized gases.').should('be.hidden')
        cy.get('button[class="appearance-filled size-medium status-primary shape-rectangle transitions"]').click()
        cy.contains('nb-accordion-item-body', 'hydrogen, helium and other ionized gases.').should('be.visible')
             
    })


    it('Hint of "Right" button is visible ', () => {
        cy.visit('/pages/modal-overlays/popover')
        cy.get('button[ng-reflect-position="right"').trigger("mouseenter")
        cy.contains('nb-popover', 'Hello, how are you today?').should('be.visible')

    })

    
    
    it('Entered Name is contained in "Names" list', () => {
        cy.visit('/pages/modal-overlays/dialog')
        cy.contains('button', 'Enter Name').click()
        cy.get('input[class="size-medium shape-rectangle"]').type('Roman')
        cy.get('input[class="size-medium shape-rectangle"]').should('have.value', 'Roman')
        cy.get('button[class="appearance-filled size-medium status-success shape-rectangle transitions"]').click()
        cy.get('nb-card-body[class="result-from-dialog"]').should('contain', 'Roman')

    })



})




