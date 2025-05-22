import Products from "../support/products"; 
import Login from "../support/login"

describe('Products and Cart Flow', () => {
    const products = new Products
    const login = new Login
    
    before(function() {
        cy.fixture("Cred").then((data_cred) => {
            globalThis.data_cred = data_cred
        })
    })

    beforeEach(() => {
        login.visit()
        login.login(data_cred.Login_Cred.Valid_Cred.username, data_cred.Login_Cred.Valid_Cred.password)
        products.product_page()
    })

    it('Products page', () => {
        products.items()
        products.Individual_items()
        
    })

    it("Add to cart in the products page", () => {
        products.add_to_cart()
    })

})