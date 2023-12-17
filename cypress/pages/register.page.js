export class RegisterPage {

    elements = {
        registerTitle: () => cy.get('nb-register [id="title"]'),
        nameInput: () => cy.get('input[id="input-name"]'),
        emailInput: () => cy.get('input[id="input-email"]'),
        passwordInput: () => cy.get('input[id="input-password"]'),
        repeatPasswordInput: () => cy.get('input[name="rePass"]'),
        agreeTermsCheckbox: () => cy.get('span[class="custom-checkbox"]'),
        registerButton: () => cy.get('button[status="primary"]'),
        backButton: () => cy.get('a[class="link back-link"]'),
        gitHubButton: () => cy.get('a[class="github with-icon"]'),
        faceBookButton: () => cy.get('a[class="facebook with-icon"]'),
        twitterButton: () => cy.get('a[class="twitter with-icon"]'),
        loginButton: () => cy.get('a[href="/auth/login"]')


    }

    open(){
        return cy.visit('/auth/register')
    }

    register(name, email, password, repeatPassword){
        this.elements.nameInput(name);
        this.elements.emailInput().type(email);
        this.elements.passwordInput().type(password);
        this.elements.repeatPasswordInput().type(repeatPassword);
        this.elements.agreeTermsCheckbox().click();
        this.elements.registerButton().click()

    }

    
}
