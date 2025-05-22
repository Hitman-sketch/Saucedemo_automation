class Login {
    visit() {
        cy.visit("https://www.saucedemo.com/v1/index.html")
    }

    login(username, password) {
        cy.get('[data-test="username"]').type(username)
        cy.get('[data-test="password"]').type(password)
        cy.get('#login-button').click()
    }

    logout() {
        cy.get('.bm-burger-button').click()
        const logOut = cy.xpath("//a[@class='bm-item menu-item']")
        logOut.contains("Logout").click()


    }
}

export default Login