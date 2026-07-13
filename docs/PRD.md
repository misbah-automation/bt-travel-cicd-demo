# BT Travel Playwright CI/CD Demo — Product Requirements Document

## Document Information

* Project Name: BT Travel Playwright CI/CD Demo
* Document Version: 0.3
* Status: In Progress
* Prepared By: QA Automation
* Technology: Playwright, JavaScript, GitHub Actions and GitHub Pages

## 1. Purpose

The purpose of this project is to create a small proof-of-concept that demonstrates how Playwright automation tests can be connected with a CI/CD pipeline.

The demo will use a simple login application created separately from the original BT Travel application.

This approach is being used because access to the original BT Travel source-code repository is not currently available.

## 2. Background

BT Travel automation test cases are being developed using Playwright with JavaScript and the Page Object Model structure.

Some automation test cases, especially search-related tests, are still being refined. Therefore, they should not be added to the original application pipeline until they become stable.

A separate demo project will first be created to show management how automated testing can work with continuous integration and continuous deployment.

## 3. Objective

The main objectives of this project are:

* Create a simple login application.
* Add Playwright login automation tests.
* Run the tests automatically through GitHub Actions.
* Stop deployment when the tests fail.
* Deploy the application when the tests pass.
* Run a smoke test against the deployed application.
* Generate Playwright reports and failure evidence.

## 4. Project Scope

### In Scope

* Simple demo login page
* Valid login test
* Invalid login test
* Required-field validation
* Page Object Model
* GitHub Actions workflow
* Continuous integration
* Continuous deployment
* GitHub Pages deployment
* Playwright HTML report
* Screenshots and traces on failure

### Out of Scope

* Original BT Travel application code
* Real BT Travel credentials
* Real customer data
* Production environment testing
* Search and booking test cases during the first phase
* Database integration
* Backend authentication
* Multiple browser testing during the first phase

## 5. Users and Stakeholders

### Primary User

QA engineer responsible for creating and maintaining Playwright automation tests.

### Stakeholders

* QA

## 6. Expected CI/CD Flow

1. A developer or QA engineer changes the application code.
2. The code is pushed to GitHub.
3. GitHub Actions starts automatically.
4. The application dependencies are installed.
5. Playwright login tests are executed.
6. When tests fail, deployment is blocked.
7. When tests pass, the application is deployed.
8. A final smoke test runs against the live application.
9. Reports and failure evidence are saved in GitHub Actions.

## 7. Success Criteria

The proof-of-concept will be considered successful when:

* The login application runs locally.
* Playwright login tests pass locally.
* Tests run automatically after code is pushed.
* A failing test prevents deployment.
* A passing test allows deployment.
* The deployed application is publicly accessible.
* A post-deployment smoke test verifies the live application.
* Playwright reports are available in GitHub Actions.

## 8. Future Improvements

After the initial demo is completed:

* More stable Playwright test cases will be added.
* Search-related tests will be refined.
* Authentication setup will be improved.
* Smoke and regression suites will be separated.
* Cross-browser testing may be introduced.
* The workflow may later be adapted for the original BT Travel repository.

## 9. Current Validation Status

The demo login application has been created and manually verified.

The following manual test cases passed:

1. The login page opens successfully.
2. Empty email and password fields show required-field validation.
3. An invalid email format shows an email validation message.
4. Incorrect credentials show an invalid-login message.
5. Correct demo credentials display the dashboard.
6. The logout button returns the user to the login page.
7. The login fields and validation messages are cleared after logout.

The application is ready for initial Playwright automation.

## 10. Automation Validation Status

The initial Playwright login automation has been completed.

The following automated test cases passed in Chromium:

1. Login page UI is visible.
2. Empty fields show required errors.
3. Invalid email format shows an error.
4. Incorrect credentials show an error.
5. Valid credentials open the dashboard.
6. Logout returns the user to the login page.

The Playwright HTML report was generated successfully.

Local automation result:

```text
6 passed
0 failed