export class BasePage {
    submitButton() {
        return cy.get('button[type="submit"]')
    }

    nameInput() {
        return cy.get('#name')
    }

    introducedInput() {
        return cy.get('#introduced')
    }

    discontinuedInput() {
        return cy.get('#discontinued')
    }

    companyDropdown() {
        return cy.get('#company')
    }

    cancelButton() {
        return cy.get('a.btn').contains('Cancel')
    }

    successMessage() {
        return cy.get('div.alert-message.warning')
    }

    computerNameErrorMessage() {
        return cy.get('input#name').parent().find('span.help-inline')
    }

    introducedDateErrorMessage() {
        return cy.get('input#introduced').parent().find('span.help-inline')
    }

    discontinuedDateErrorMessage() {
        return cy.get('input#discontinued').parent().find('span.help-inline')
    }

    headerHomeButton(){
        return cy.get('h1.fill > .fill')
    }
}

export default BasePage
