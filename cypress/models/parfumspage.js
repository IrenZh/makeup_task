import { HomePage } from "./homepage";

export class ParfumsPage extends HomePage {

    getChanellFilter() {
        return cy.get('li.catalog-checkbox-list__item#popularinput-checkbox-2243-23957')
    }

    getDeodorantFilter() {
        return cy.get('li.catalog-checkbox-list__item#input-checkbox-2251-22453')
    }

    getMinPriceField() {
        return cy.get('[data-id="price-from"]')
    }

    getMaxPriceField() {
        return cy.get('[data-id="price-to"]')
    }

    getManCategory(){
        return cy.contains('Чоловічі')
    }

    selectChanellFilter() {
        this.getChanellFilter().click()
    }

    selectDeodorantFilter() {
        this.getDeodorantFilter().click()
    }

    setValueToMinField(value) {
        this.getMinPriceField()
            .clear().type(value)
        return this
    }

    setValueToMaxField(value) {
        this.getMaxPriceField()
            .clear().type(value)
        return this
    }

    checkPriceFilter(min, max) {
        return cy.get('.simple-slider-list__bottom').then(($prices) => {
            for (let i = 0; i < $prices.length; i++) {
                const price = parseFloat($prices[i].innerText.replace(/\s+/g, ''))
                expect(price).to.be.at.least(min)
                expect(price).to.be.at.most(max)
            }
        })
    }

    selectManCategory() {
        this.getManCategory().click()
    }


}

