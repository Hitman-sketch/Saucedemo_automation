import Login from "../../support/login"

describe('Saucedemo automation', () => {

  const login = new Login

  before(function() {
    cy.fixture("Cred").then((data_cred) => {
      globalThis.data_cred = data_cred
    })
  })

  it('login', () => {
    login.visit()
    login.login(data_cred.Login_Cred.Valid_Cred.username, data_cred.Login_Cred.Valid_Cred.password)
    login.logout()
  })

  it("Invalid login", () => {
    login.visit()
    login.login(data_cred.Login_Cred.Invalid_Cred.username, data_cred.Login_Cred.Invalid_Cred.password)
    cy.get('[data-test="error"]').should("be.visible")
    .and("have.text", "Epic sadface: Username and password do not match any user in this service")
    
})



})