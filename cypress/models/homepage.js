export class HomePage {

  openWebsite() {
    cy.visit('/')
    cy.title().should('contain', 'MAKEUP')
  }

  getParfumCategory() {
    return cy.get('a.menu-list__link').contains('Парфумерія')
  }

  getMakeupCategory() {
    return cy.get('a.menu-list__link').contains('Макіяж')
  }

  getProductItem() {
    return cy.get('.simple-slider-list__name')
  }

  getAddCartButton() {
    return cy.get('.product-item__button')
  }

  getCartButton() {
    return cy.get('.header-basket')
  }

  getSearchField() {
    return cy.get('[data-id="search-input"]')
  }

  clickParfumCategory() {
    this.getParfumCategory().click()
  }

  clickMakeupCategory() {
    this.getMakeupCategory().click()
  }

  selectFirstItem() {
    this.getProductItem().first().click()
  }

  addToCart() {
    this.getAddCartButton().click()
  }

  clickCartButton() {
    this.getCartButton().click()
  }

  clickSearchField() {
    this.getSearchField().click().type(searchQuery).type('{enter}')
  }

  checkIfSearchResults(searchQuery) {
    cy.get('a.simple-slider-list__name[data-default-name').each(($el) => {
      expect($el.text()).to.include(searchQuery)
    })

  }
}
