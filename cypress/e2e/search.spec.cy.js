import { HomePage } from "../../cypress/models/homepage"


describe('Search Item', () => {

    const homepage = new HomePage()

    beforeEach(() => {
        homepage.openWebsite()
      })
  
    it('Verify if all items displayed correctly according to the search query', () => {
      const searchQuery = 'помада'

      homepage.clickSearchField()
      homepage.checkIfSearchResults(searchQuery)
  
    })
  })
  