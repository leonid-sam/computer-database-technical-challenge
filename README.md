# Automation QA – Technical Challenge

It's a Cypress framework that automates the tests that are considered to be the highest priority when testing the following application:
[Computers database](https://computer-database.gatling.io/computers)

## Installation

Clone this repo to your local machine and open it in an IDE ([Microsoft Visual Studio Code](https://code.visualstudio.com/), [IntelliJ IDEA WebStorm](https://www.jetbrains.com/webstorm/), etc.)

Use the package manager [npm](https://www.npmjs.com/) to install [Cypress](https://www.cypress.io/).

```bash
npm install cypress
```

## Usage

```bash
npx cypress open

# opens Cypress runner from which the spec file computerDatabase.cy.js can be run
```

```bash
npx cypress run

# runs computerDatabase.cy.js spec using Cypress in headless mode
```

Due to the common sense, some tests are intended to fail because the application does not create/read/update/delete computers at the moment. 

However, it's expected that the failing tests are going to pass as soon as the functionality mentioned above is fixed.

