import loginPage from "../pages/loginPage";
import retrieveQuotationPage from "../pages/retrieveQuotationPage";

describe.skip('Retrieve Quotation', () => {

    beforeEach(() => {
        cy.visit('https://demo.guru99.com/insurance/v1/index.php')
        loginPage.enterEmail()
        loginPage.enterPassword()
        loginPage.clickSubmitButton()
    })

    //Enable test once logic for Id number is implemented
    it('Retrieve Quotation', () => {
        retrieveQuotationPage.clickRetrieveQuotataionTab()
        cy.url().should('include', '/insurance/v1/header.php')
        retrieveQuotationPage.enterIdNumber()
        retrieveQuotationPage.clickRetrieveQuotataionButton()
    })
})