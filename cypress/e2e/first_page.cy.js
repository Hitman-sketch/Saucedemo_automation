import Page from "../support/first_page";
import Login from "../support/login"

describe('First page testing', () => {
    const page = new Page
    const login = new Login
    

    before(function() {
        cy.fixture("Cred").then((data_cred) => {
            globalThis.data_cred = data_cred
        })
    })

    it('First page', () => {
        login.visit()
        login.login(data_cred.Login_Cred.Valid_Cred.username, data_cred.Login_Cred.Valid_Cred.password)
        page.page()
       
    })

    it('Menu', () => {
        login.visit()
        login.login(data_cred.Login_Cred.Valid_Cred.username, data_cred.Login_Cred.Valid_Cred.password)
        page.menu()
    })

    

    // })
})