export class leavePage {

    weblocators = {
        userName: 'input[name="username"]',
        password: 'input[name="password"]',
        login: 'button.oxd-button',
        applyLeave: 'button[title="Apply Leave"]',
        leaveType: 'div .oxd-select-text-input',
        fromDateInput: ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input',
        toDateInput: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input',
        comments: '.oxd-textarea',
        apply: '.oxd-button',
    }

    openURL() {
        cy.visit(Cypress.env('URL'))
    }

    enterUserName(UName) {
        cy.get(this.weblocators.userName).type(UName)
    }

    enterPassword(pass) {
        cy.get(this.weblocators.password).type(pass)
    }

    enterLogin() {
        cy.get(this.weblocators.login).click()
        cy.url().should('include', '/web/index.php/dashboard/index')

    }

    wait(ms) {
        cy.wait(ms)
    }

    applyLeave() {
        cy.get(this.weblocators.applyLeave).click()
        cy.url().should('include', '/web/index.php/leave/applyLeave')
    }

    leaveType() {
        cy.get(this.weblocators.leaveType).click().should('have.length.greaterThan', 0)
        cy.contains('div', 'CAN - FMLA').click()
    }

    selectFromDate(date) {
        cy.get(this.weblocators.fromDateInput).type(date).type('{enter}');
    }

    selectToDate(date) {
        cy.get(this.weblocators.toDateInput).clear().type(date).type('{enter}');
    }

    comments(msg) {
        cy.get(this.weblocators.comments).type(msg)
    }

    apply() {
        cy.get(this.weblocators.apply).click()
    }

    errorMassage(){
        cy.contains('span', 'To date should be after from date')
    }

    required(){
        cy.contains('span', 'Required')
    }

}