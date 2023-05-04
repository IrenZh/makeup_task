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

        homepage.clickParfumCategory
        parfumspage.selectManCategory
        homepage.selectFirstItem
        homepage.addToCart
        homepage.clickMakeupCategory
        homepage.selectFirstItem
        homepage.addToCart
        homepage.clickCartButton
        cartmodal.checkIfItemsInCart
        cartmodal.checkTotalPrice
        cartmodal.checkIfDeleteButtonVisible
        cartmodal.clickDeleteButton
        cartmodal.checkIfItemDelete

    })

    it('')
})