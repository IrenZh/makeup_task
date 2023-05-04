import { HomePage } from "../../cypress/models/homepage"
import { ParfumsPage } from "../models/parfumspage"

describe('Check filters', () => {

  const homepage = new HomePage()
  const parfumspage = new ParfumsPage()
  const minPrice = 1160
  const maxPrice = 1900

  beforeEach(() => {
    homepage.openWebsite()
  })

    it('Verify the price filter', () => {

      homepage.clickParfumCategory()
      parfumspage.selectChanellFilter()
      parfumspage.selectDeodorantFilter()
      parfumspage.setValueToMinField(minPrice)
      parfumspage.setValueToMaxField(maxPrice)
      parfumspage.checkPriceFilter(minPrice, maxPrice)
      
    })
  })
