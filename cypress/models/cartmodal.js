import { HomePage } from "./homepage";

export class CartModal extends HomePage{

    getNameOfItemInCart() {
        return cy.get('.product__header')
    }

    getDeleteButton() {
        return cy.get('.minicart-product__delete-button')
    }

    getQuantity (){
        return cy.get('.product__button-increase')
    }

    checkIfItemsInCart() {
       this.getNameOfItemInCart().should('have.length', 2)
    }
    
    checkTotalPrice() {
        cy.get('.total').invoke('text').then(parseFloat).should('be.gt', 0)
        const expectedPrice = Cypress.$('.product__price').first().text() + Cypress.$('.product__price').first().text()
        cy.get('.total').invoke('text').should('equal', expectedPrice)
    
    }

    checkIfDeleteButtonVisible() {
        this.getDeleteButton().first().should('be.visible')
    }

    clickDeleteButton(){
        this.getDeleteButton().click()
    }

    checkIfItemDelete() {
        this.getNameOfItemInCart().should('have.length', 1)
    }

    clickUpdateQuantity() {
        this.getQuantity().click()
      }

      checkUpdatedQuantity() {
        this.getQuantity().then($quantity => {
          const updatedQuantity = parseInt($quantity) + 1
           this.getQuantity()
            .should('have.value', updatedQuantity.toString())
        })
      }
}