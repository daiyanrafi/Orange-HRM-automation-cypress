import { leavePage } from "../../pages/leavePage"
const leaveObj = new leavePage()
import loginData from '../../fixtures/loginData.json'

describe('test 1', () => {

    beforeEach(() => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.reload(true)
        cy.viewport(1920, 1080)
    })

    it('should login', () => {
        cy.wait(3000)
        leaveObj.openURL()
        cy.wait(3000)
        leaveObj.enterUserName(loginData.userName)
        leaveObj.enterPassword(loginData.password)
        leaveObj.enterLogin()
    })

    it('should navigate to Apply Leave page', () => {
        leaveObj.openURL()
        cy.wait(3000)
        leaveObj.enterUserName(loginData.userName)
        leaveObj.enterPassword(loginData.password)
        leaveObj.enterLogin()

        // Navigate to Apply
        leaveObj.applyLeave()
    })

    it('should display all available leave types in the dropdown', () => {
        leaveObj.openURL()
        cy.wait(3000)
        leaveObj.enterUserName(loginData.userName)
        leaveObj.enterPassword(loginData.password)
        leaveObj.enterLogin()
        leaveObj.applyLeave()

        // Click on Leave Type dropdown
        leaveObj.leaveType()
    })

    it('should apply leave with valid data', () => {
        leaveObj.openURL()
        cy.wait(3000)
        leaveObj.enterUserName(loginData.userName)
        leaveObj.enterPassword(loginData.password)
        leaveObj.enterLogin()
        leaveObj.applyLeave()

        // Select Leave Type
        leaveObj.leaveType()

        // Select From Date
        leaveObj.selectFromDate('2024-11-06');

        // Select To Date
        leaveObj.selectToDate('2024-11-06');

        // Enter Comment
        leaveObj.comments('Family vacation')

        // Click Apply
        leaveObj.apply()
    })

    it('should display an [ERROR] for invalid date range', () => {

        leaveObj.openURL()
        cy.wait(3000)
        leaveObj.enterUserName(loginData.userName)
        leaveObj.enterPassword(loginData.password)
        leaveObj.enterLogin()
        leaveObj.applyLeave()

        // Select Leave Type
        leaveObj.leaveType()

        // Select From Date
        leaveObj.selectFromDate('2023-06-20');

        // Select To Date
        leaveObj.selectToDate('2023-06-15');

        // Click Apply
        leaveObj.apply()

        // Verify error message
        leaveObj.errorMassage()
    })

    it('should display an [ERROR] when leave type is not selected', () => {

        leaveObj.openURL()
        cy.wait(3000)
        leaveObj.enterUserName(loginData.userName)
        leaveObj.enterPassword(loginData.password)
        leaveObj.enterLogin()
        leaveObj.applyLeave()


        // Select valid From Date and To Date
        leaveObj.selectFromDate('2023-06-15');
        leaveObj.selectToDate('2023-06-20');

        // Click Apply
        leaveObj.apply()

        // Verify error message
        leaveObj.required()
    })

})
