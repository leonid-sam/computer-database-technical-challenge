import HomePage from "../support/page_objects/homePage";
import NewComputerPage from "../support/page_objects/newComputerPage";
import * as URL from '../fixtures/URLs.json';
import * as data from "../fixtures/inputData.json";
import * as text from "../fixtures/assertions.json";
import EditComputerPage from "../support/page_objects/editComputerPage";

let computersCounter;

describe('CRUD (Create, Read, Update and Delete) positive test suite', () => {
    beforeEach(() => {
        cy.visit(URL.computers)
        HomePage.computersCounter()
        .invoke('text')
        .should('be.a', 'string')
        .then((value) => {
            computersCounter = parseInt(value)
        })
    })

    it('New computer can be added to the database', () => {
        HomePage.addNewComputerButton().click()
        cy.url()
        .should('include', text.newComputer)
        NewComputerPage.nameInput().type(data.computerName)
        NewComputerPage.createComputerButton().click()
        NewComputerPage.successMessage()
        .should('have.text', text.computerCreatedMessage)
        expect(computersCounter).equal(computersCounter + 1)
    })

    it('Created computer can be found via Filter', () => {
        HomePage.filterInput().type(data.computerName)
        HomePage.filterButton().click()
        HomePage.computerNameColumnArray()
        .should('contain', text.computerName)
    })

    it('Created computer can be updated', () => {
        HomePage.filterInput().type(data.computerName)
        HomePage.filterButton().click()
        HomePage.computerNameColumnArray().contains(data.computerName).click()
        cy.url()
        .should('include', text.createdComputer)
        EditComputerPage.nameInput().clear().type(data.updatedComputerName)
        EditComputerPage.introducedInput().clear().type(data.updatedIntroducedDate)
        EditComputerPage.discontinuedInput().clear().type(data.updatedDiscontinuedDate)
        EditComputerPage.companyDropdown().select(data.updatedCompanyName)
        EditComputerPage.saveComputerButton().click()
        EditComputerPage.successMessage()
        .should('have.text', text.computerUpdatedMessage)
    })

    it('Created computer can be deleted', () => {
        HomePage.filterInput().type(data.updatedComputerName)
        HomePage.filterButton().click()
        HomePage.computerNameColumnArray().contains(data.updatedComputerName).click()
        cy.url()
        .should('include', text.createdComputer)
        EditComputerPage.deleteComputerButton().click({force: true})
        EditComputerPage.successMessage()
        .should('have.text', text.computerDeletedMessage)
        expect(computersCounter).equal(computersCounter - 1)
    })

    it('Created computer was actually deleted', () => {
        HomePage.filterInput().type(data.updatedComputerName)
        HomePage.filterButton().click()
        HomePage.nothingToDisplayMessage().should('be.visible')
    })
})

describe('Negative test suite', () => {

    it('Error messages are shown during the invalid data while creating new Computer', () => {
        cy.visit(URL.newComputer)
        NewComputerPage.nameInput().clear()
        NewComputerPage.introducedInput().clear().type(data.invalidDate)
        NewComputerPage.discontinuedInput().clear().type(data.invalidDate)
        NewComputerPage.createComputerButton().click()
        NewComputerPage.computerNameErrorMessage()
        .should('have.text', text.emptyNameErrorMessage)
        NewComputerPage.introducedDateErrorMessage()
        .should('have.text', text.invalidDateErrorMessage)
        NewComputerPage.discontinuedDateErrorMessage()
        .should('have.text', text.invalidDateErrorMessage)
    })

    it('Error messages are shown during the invalid data while editing existing Computer', () => {
        cy.visit(URL.existingComputer)
        EditComputerPage.nameInput().clear()
        EditComputerPage.introducedInput().clear().type(data.invalidDate)
        EditComputerPage.discontinuedInput().clear().type(data.invalidDate)
        EditComputerPage.saveComputerButton().click()
        EditComputerPage.computerNameErrorMessage()
        .should('have.text', text.emptyNameErrorMessage)
        EditComputerPage.introducedDateErrorMessage()
        .should('have.text', text.invalidDateErrorMessage)
        EditComputerPage.discontinuedDateErrorMessage()
        .should('have.text', text.invalidDateErrorMessage)
    })
})

describe('Extended test suite', () => {
    beforeEach(() => {
        cy.visit(URL.computers)
    })

    it('Next and Previous page buttons are actually doing pagination', () => {
        HomePage.nextPageButton().click()
        cy.url()
        .should('include', text.nextPage)
        HomePage.previousPageButton().click()
        cy.url()
        .should('include', text.previousPage)
    })

    it('Filter by computer name input field is required', () => {
        HomePage.filterInput().should('have.attr', 'required', 'required')
    })

    it('Cancel button redirects to the Homepage on Create new Computer page', () => {
        cy.visit(URL.newComputer)
        NewComputerPage.cancelButton().click()
        cy.url()
        .should('include', text.homePage)
    })

    it('Cancel button redirects to the Homepage on Edit existing Computer page', () => {
        cy.visit(URL.existingComputer)
        EditComputerPage.cancelButton().click()
        cy.url()
        .should('include', text.homePage)
    })

    it('Header Home button redirects to the Homepage on Create new Computer page', () => {
        cy.visit(URL.newComputer)
        NewComputerPage.headerHomeButton().click()
        cy.url()
        .should('include', text.homePage)
    })

    it('Header Home button redirects to the Homepage on Edit existing Computer page', () => {
        cy.visit(URL.existingComputer)
        EditComputerPage.headerHomeButton().click()
        cy.url()
        .should('include', text.homePage)
    })

    it('Clicking table column headers actually does sorting', () => {
        HomePage.computerNameColumnHeader().click()
        HomePage.firstComputerNameInTable()
        .should('contain', text.firstComputerNameInTableSortAsc)
        HomePage.computerNameColumnHeader().click()
        HomePage.firstComputerNameInTable()
        .should('contain', text.firstComputerNameInTableSortDesc)
        HomePage.introducedColumnHeader().click()
        HomePage.firstIntroducedInTable()
        .should('contain', text.firstIntroducedInTableSortAsc)
        HomePage.introducedColumnHeader().click()
        HomePage.firstIntroducedInTable()
        .should('contain', text.firstIntroducedInTableSortDesc)
        HomePage.discontinuedColumnHeader().click()
        HomePage.firstDiscontinuedInTable()
        .should('contain', text.firstDiscontinuedInTableSortAsc)
        HomePage.discontinuedColumnHeader().click()
        HomePage.firstDiscontinuedInTable()
        .should('contain', text.firstDiscontinuedInTableSortDesc)
        HomePage.companyColumnHeader().click()
        HomePage.firstCompanyInTable()
        .should('contain', text.firstCompanyInTableSortAsc)
        HomePage.companyColumnHeader().click()
        HomePage.firstCompanyInTable()
        .should('contain', text.firstCompanyInTableSortDesc)
    })
})