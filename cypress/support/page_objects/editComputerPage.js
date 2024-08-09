import BasePage from "./basePage";

export class EditComputerPage extends BasePage {
    saveComputerButton() {
        return cy.get('input[value="Save this computer"]')
    }

    deleteComputerButton() {
        return cy.get('input[value="Delete this computer"]').scrollIntoView()
    }
}

export default new EditComputerPage
