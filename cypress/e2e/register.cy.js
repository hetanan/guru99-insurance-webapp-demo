import registerPage from "../pages/registerPage" // import the registerPage class

// improvement suggestion
// convert harcoded value into dynamic value

describe('Load webapplication - Guru99 Insurance', () => {

  beforeEach(() => {
    cy.visit('https://demo.guru99.com/insurance/v1/index.php')
  
  })
  it('Loading Register page ', () => {
    registerPage.clickRegisterButton()
    cy.url().should('include', '/insurance/v1/register.php') //assertion to confirm login is successful
  })

  it('Register new user', () => {
    registerPage.clickRegisterButton()
    registerPage.selectTitle()
    registerPage.enterFirstName()
    registerPage.locators.firstName().should('have.value', 'John') //assertion to confirm data is entered
    registerPage.enterLastName()
    registerPage.enterEmail()
    registerPage.enterPassword()
    registerPage.reEnterPassword()
    registerPage.createUser()
    cy.url().should('include', '/insurance/v1/index.php') //assertion to confirm successful registration
  })

  it('Reset data on Registration page for a new user', () => {
    registerPage.clickRegisterButton()
    registerPage.selectTitle()
    registerPage.enterFirstName()
    registerPage.enterLastName()
    registerPage.enterEmail()
    registerPage.enterPassword()
    registerPage.reEnterPassword()
    registerPage.resetData()
    registerPage.locators.firstName().should('have.value', '') //assertion to confirm data is reset
    })
    
})

