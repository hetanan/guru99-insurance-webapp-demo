import loginPage from "../pages/loginPage";
import requestQuotationPage from "../pages/requestQuotationPage";

describe('Request Quotation', () => {

    beforeEach(() => {
        cy.visit('https://demo.guru99.com/insurance/v1/index.php')
        loginPage.enterEmail()
        loginPage.enterPassword()
        loginPage.clickSubmitButton()
    })

    //TODO: Extend this test to calculate premium for different breakdown cover
    it('Request Quotation', () => {
        requestQuotationPage.clickReqQuotationTab()
        cy.url().should('include', '/insurance/v1/header.php')
        requestQuotationPage.selectBreakdownCover()
        requestQuotationPage.enterEstimatedval()
        requestQuotationPage.locators.estimatedValue().should('have.value', '100000')
        requestQuotationPage.clickCalculatePremium()
    })

    it('Reset data on Request Quotation page', () => {
        requestQuotationPage.clickReqQuotationTab()
        requestQuotationPage.selectBreakdownCover()
        requestQuotationPage.enterEstimatedval()
        requestQuotationPage.clickResetButton()
        requestQuotationPage.locators.estimatedValue().should('have.value', '')
    })
})