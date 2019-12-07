describe('buy something from website', function () {

    it('search a thing then put in basket', () => {

        cy.searchItem()

        cy.addItemToBasket()
    })

    it('place order as a guest and fill in address', () => {

        cy.placeOrderAsGuess()

        cy.fillInAddress()
    })

    it('select payment type and verify order', () => {

        cy.selectPaymentType()

        cy.get('h2', { timeout: 10000 })
            .should('contain', 'Your order data')

    })
})