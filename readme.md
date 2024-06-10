# Cypress Test Suite: OrangeHRM

 - [Full Test Execution Video (Google Drive Link)](https://drive.google.com/file/d/1Ar1leXhpIaetda1VGdWhpy8bSjUNSNRs/view?usp=sharing)

![Orange-cypress](https://github.com/daiyanrafi/Orange-HRM-automation-cypress/assets/33730802/57e13959-4ba3-45dc-b7d5-51a5957e524c)

## Overview
This Cypress test suite automates the testing of the "Apply Leave" feature in the OrangeHRM application. The tests simulate user interactions to ensure that employees can successfully apply for leave.

## Test Environment
- **Cypress version:** 13.11.0
- **OrangeHRM application URL:** [https://opensource-demo.orangehrmlive.com/web/index.php/auth/login](https://opensource-demo.orangehrmlive.com/web/index.php/auth/login)
- **Operating System:** [Windows]

## Test Scenarios

1. **Login with Valid Credentials**
   - Verifies that users can log in to the OrangeHRM application using valid credentials.

2. **Navigate to Apply Leave Page**
   - Ensures that users can navigate to the "Apply Leave" page from the main menu.

3. **Display Leave Types in Dropdown**
   - Verifies that all available leave types are displayed in the leave type dropdown.

4. **Apply Leave with Valid Data**
   - Tests the process of applying for leave with valid leave type, date range, and optional comment.

5. **Display Error for Invalid Date Range**
   - Checks if an error message is displayed when the selected date range is invalid.

6. **Display Error for Unselected Leave Type**
   - Verifies that an error message is displayed when the leave type is not selected.

## Running the Tests
To run these Cypress tests locally:
1. Clone the repository to your local machine.
2. Install Cypress using `npm install cypress`.
3. Navigate to the project directory and run `npx cypress open`.
4. Click on the desired test suite to run the tests.