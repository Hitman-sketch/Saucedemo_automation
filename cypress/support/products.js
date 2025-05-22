class Products {

    product_page() {
        cy.get('.app_logo').should('be.visible')
        cy.waitUntil(() => cy.url().should('include', 'inventory.html'))
        cy.get('.product_label').should('have.text', 'Products')
        cy.get('.peek').should('be.visible')
    }

    items() {
        cy.get('.inventory_item_name').eq(0).should('have.text', 'Sauce Labs Backpack')
        cy.get('.inventory_item_name').eq(1).should('have.text', 'Sauce Labs Bike Light')
        cy.get('.inventory_item_name').eq(2).should('have.text', 'Sauce Labs Bolt T-Shirt')
        cy.get('.inventory_item_name').eq(3).should('have.text', 'Sauce Labs Fleece Jacket')
        cy.get('.inventory_item_name').eq(4).should('have.text', 'Sauce Labs Onesie')
        cy.get('.inventory_item_name').eq(5).should('have.text', 'Test.allTheThings() T-Shirt (Red)')

    }

    Individual_items() {
        cy.xpath("//div[@class='inventory_item_name']").eq(0).click()
        cy.url().should('include', 'id=4')
        cy.get('.inventory_details_name').should('have.text', 'Sauce Labs Backpack')
        cy.get('.inventory_details_desc').should('contain.text', 'carry.allTheThings() with' +
            ' the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop '+
            'and tablet protection.')
        cy.get('.inventory_details_price').should('have.text', '$29.99')
        cy.get('.inventory_details').click()
        cy.url().should('include', 'id=4')

    }

    add_to_cart() {
        cy.get('.btn_primary').click()




    }

    


}
export default Products