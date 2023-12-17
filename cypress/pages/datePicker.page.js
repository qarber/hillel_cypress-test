export class DatePickerPage {

    elements = {
        dateInput: () => cy.get('nb-card-body input').eq(0)
        


    }

    open(){
        return cy.visit('/pages/forms/datepicker')
    }
}