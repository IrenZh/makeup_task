import { HomePage } from "../../cypress/models/homepage"
import { ParfumsPage } from "../models/parfumspage"
import { CartModal } from "../models/cartmodal"

describe('Shopping Cart Test', () => {

  const homepage = new HomePage()
  const parfumspage = new ParfumsPage()
  const cartmodal = new CartModal()

  beforeEach(() => {
    homepage.openWebsite()
  })

    it('Check add items to cart, calculate total price and delete item from cart', () => {

        homepage.clickParfumCategory()
        homepage.selectFirstItem()
        homepage.addToCart()
        homepage.clickMakeupCategory()
        homepage.selectFirstItem()
        homepage.addToCart()
        homepage.clickCartButton()
        cartmodal.checkIfItemsInCart()
        cartmodal.checkTotalPrice()
        cartmodal.checkIfDeleteButtonVisible()
        cartmodal.clickDeleteButton()
        cartmodal.checkIfItemDelete()

    })

    it('Check add items to cart, calculate total price and update quantity of item in cart', () => {

      homepage.clickParfumCategory()
        homepage.selectFirstItem()
        homepage.addToCart()
        homepage.clickMakeupCategory()
        homepage.selectFirstItem()
        homepage.addToCart()
        homepage.clickCartButton()
        cartmodal.checkIfItemsInCart()
        cartmodal.checkTotalPrice()
        cartmodal.clickUpdateQuantity()
        cartmodal.checkUpdatedQuantity()

    })
})