import Page_Order from "../support/page_order";
import Login from "../support/login"


describe('Page order testing', () => {
    const page_order = new Page_Order
    const login = new Login
    
    before(function() {
        cy.fixture("Cred").then((data_cred) => {
            globalThis.data_cred = data_cred
        })
    })

    it('Page order', () => {
        login.visit()
        login.login(data_cred.Login_Cred.Valid_Cred.username, data_cred.Login_Cred.Valid_Cred.password)
        page_order.pageOrder()
        
    })

})