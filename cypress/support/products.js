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

    add_to_cart() {  //Add to cart by clicking on all 6 button at once
        cy.xpath("//button[@class='btn_primary btn_inventory']").each(($el) => {
        cy.wrap($el).click()
    });
    }

    remove_from_cart() { //Removingclicking on all 6 buttons at once
        cy.xpath("//button[@class='btn_secondary btn_inventory']").each(($el) => { 
        cy.wrap($el).click();
        }) 
       
    }

    Check_Cart_Page() {
   
        cy.xpath("//button[@class='btn_primary btn_inventory']").eq(0).click()
        cy.get('.fa-layers-counter').should('be.visible')
        cy.get('.fa-layers-counter').click()
        cy.get('.fa-layers-counter').should('be.visible')
        cy.get('.fa-layers-counter').invoke('css', 'color').then(color => {
        cy.log('Actual color:', color);
        cy.get('.inventory_item_price').should('have.text','29.99')
        cy.get('.inventory_item_name').should('have.text','Sauce Labs Backpack')
        cy.get('.inventory_item_desc').should('have.text','carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')
        cy.get('.cart_quantity_label').should('be.visible')
        cy.get('.cart_desc_label').should('be.visible')
        cy.get('.cart_quantity').should('have.text','1')
        cy.get('.cart_footer > .btn_secondary').click()
        //cy.get('.cart_footer > .btn_secondary').should('have.css','color','rgb(239, 239, 239)')
       


    });




    }

    


}
export default Products