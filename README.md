# Makeup UA - QA Automation Project

This project is an automated testing suites for marketplace Makeup UA, using the Cypress testing framework. The tests are designed to verify the functionality of the website's shopping cart, filters for products and search functionality.

## Technologies Used
___
This project uses the following technologies:

- **Cypress**: A JavaScript-based end-to-end testing framework.
- **Mocha**: A JavaScript testing framework.
- **Chai**: A JavaScript assertion library.
- **Allure**: A test reporting tool.

## Installation
___
* Clone the repository to your local machine
* Install *Node.js* and *npm*
* Run `npm install` to install the project dependencies

## Running the Tests
___
### To run the tests, execute the following command:

* `npm run cy:run`

This will run the tests in headless mode and generate test results in the test-results and allure-results folders.


#### To run the tests in interactive mode, use the following command:

* `npm run cy:open`

This will open the Cypress Test Runner, where you can select individual tests to run and view the results.

* `npx cypress run --env allure=true`

This is will run Cypress tests with the --env allure=true flag to enable Allure reporting.


## Test Results
___

The test results can be viewed in the Allure Report after running tests and generating the Allure report by running the following command in the project directory:

* `npx allure generate allure-results --clean -o allure-report`

The report will be generated in the allure-report folder and can be viewed by opening the index.html file in a browser.


## Folder Structure
___

- **cypress/e2e**: Contains the test scenarios.
- **cypress/models**: Contains page object models used by the tests.
- **allure-report**: Contains generated report.
- **node_modules**: Contains all required libraries that were installed using package.json.
- **package.json**: Contains all required libraries for success execute of test scenarios.

