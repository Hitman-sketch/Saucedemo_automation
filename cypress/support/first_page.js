class Page {

    page() {
        
        cy.get('.app_logo').should('be.visible')
        cy.waitUntil(() => cy.url().should('include', 'inventory.html'))
        cy.get('.product_label').should('have.text', 'Products')
        cy.get('.peek').should('be.visible')

    }

    menu() {
        cy.xpath("//a[@class='bm-item menu-item']").eq(0).should('have.text', 'All Items')
        cy.xpath("//a[@class='bm-item menu-item']").eq(1).should('have.text', 'About')
        cy.xpath("//a[@class='bm-item menu-item']").eq(2).should('have.text', 'Logout')
        cy.xpath("//a[@class='bm-item menu-item']").eq(3).should('have.text', 'Reset App State')
        cy.get('.bm-burger-button').should('be.visible')
        cy.get('button').contains('Close Menu').click({ force: true })

       
    }   

   
}
export default Page