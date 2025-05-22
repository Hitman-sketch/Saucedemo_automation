class Page_Order {

    pageOrder() {
        cy.get('.app_logo').should('be.visible')
        cy.waitUntil(() => cy.url().should('include', 'inventory.html'))
        cy.get('.product_label').should('have.text', 'Products')
        cy.get('.peek').should('be.visible')
        cy.get('.product_sort_container').select('lohi')
        cy.get('.product_sort_container').select('za')
        cy.get('.product_sort_container').select('az')
        cy.get('.product_sort_container').select('hilo')
    }

}
export default Page_Order