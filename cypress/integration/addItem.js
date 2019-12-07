describe('Verify add items to shopping basket', function () {

    before(function () {
        cy.viewport(1431, 790)
        cy.loginPortal()
    })

    it('search a thing then put in basket and buy', () => {

        cy.searchItem()

        cy.get('h3', { timeout: 10000 })
            .should('contain', '150 Sports Roadster, W30, 1935')

        cy.contains('150 Sports Roadster, W30, 1935').click({ force: true })

        cy.addItemToBasket()

        cy.get('h3', { timeout: 10000 })
            .should('contain', 'Place order as guest')

        cy.placeOrderAsGuess()

        cy.fillInAddress()

        cy.get('.wb-e-btn-1.dcp-co-func-footer__cta-primary.ng-binding.ng-scope', { timeout: 10000 })
            .then(() => {
                cy.contains('Continue to payment type').click({ force: true })
            })

        cy.get('.ng-scope > .dcp-co-func-footer > .dcp-co-func-footer__cta-bar > .dcp-co-func-footer__cta > .wb-e-btn-1').click({ force: true })

        cy.get('h3', { timeout: 10000 })
            .should('contain', 'Your payment type')

        cy.selectPaymentType()
    })
})