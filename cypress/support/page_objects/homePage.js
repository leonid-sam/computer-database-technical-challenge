import BasePage from "./basePage";

export class HomePage extends BasePage {
    addNewComputerButton() {
        return cy.get('a#add').should('be.visible')
    }

    filterInput() {
        return cy.get('#searchbox').should('be.visible')
    }

    filterButton() {
        return cy.get('#searchsubmit').should('be.visible')
    }

    computerNameColumnArray() {
        return cy.get('table td').should('be.visible')
    }

    nothingToDisplayMessage() {
        return cy.get('div.well em')
    }

    nextPageButton() {
        return cy.get('div#pagination li.next a').should('be.visible')
    }

    previousPageButton() {
        return cy.get('div#pagination li.prev a').should('be.visible')
    }

    computersCounter() {
        return cy.get('section#main h1').should('be.visible')
    }

    computerNameColumnHeader() {
        return cy.get('.col-name > a').should('be.visible')
    }

    introducedColumnHeader() {
        return cy.get('.col-introduced > a').should('be.visible')
    }

    discontinuedColumnHeader() {
        return cy.get('.col-discontinued > a').should('be.visible')
    }

    companyColumnHeader() {
        return cy.get('.col-company > a').should('be.visible')
    }

    firstComputerNameInTable() {
        return cy.get('tbody > :nth-child(1) > :nth-child(1)')
    }

    firstIntroducedInTable() {
        return cy.get('tbody > :nth-child(1) > :nth-child(2)')
    }

    firstDiscontinuedInTable() {
        return cy.get('tbody > :nth-child(1) > :nth-child(3)')
    }

    firstCompanyInTable() {
        return cy.get('tbody > :nth-child(1) > :nth-child(4)')
    }
}

export default new HomePage
