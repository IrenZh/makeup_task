import { HomePage } from "./homepage";

export class CartModal extends HomePage{

    getNameOfItemInCart() {
        return cy.get('.minicart-product__name')
    }

    getDeleteButton() {
        return cy.get('.minicart-product__delete-button')
    }

    checkIfItemsInCart() {
       this.getNameOfItemInCart.should('have.length', 2)
    }
    
    checkTotalPrice() {
        cy.get('.minicart__subtotal-value').invoke('text').then(parseFloat).should('be.gt', 0)
        const expectedPrice = Cypress.$('.price__currency').first().text() + Cypress.$('.price__value').first().text()
        cy.get('.minicart__subtotal-value').invoke('text').should('equal', expectedPrice)
    
    }

    checkIfDeleteButtonVisible() {
        this.getDeleteButton.first().should('be.visible')
    }

    clickDeleteButton(){
        this.getDeleteButton.click()
    }

    checkIfItemDelete() {
        this.getNameOfItemInCart().should('have.length', 1)
    }
}