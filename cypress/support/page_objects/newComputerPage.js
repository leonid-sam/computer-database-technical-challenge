import BasePage from "./basePage";

export class NewComputerPage extends BasePage {

    createComputerButton() {
        return cy.get('input[value="Create this computer"]')
    }
}

export default new NewComputerPage
