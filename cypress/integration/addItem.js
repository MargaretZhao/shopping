describe('buy something from website', function () {

    before(function () {
        cy.viewport(1431, 790)
        cy.loginPortal()
        cy.get('.btn').click();
    })

    it('search a thing then put in basket', () => {

        cy.searchItem()

        cy.get('h3', { timeout: 10000 })
            .should('contain', '150 Sports Roadster, W30, 1935')

        cy.contains('150 Sports Roadster, W30, 1935').click({ force: true })

        cy.addItemToBasket()
    })

    it('place order as a guest and fill in address', () => {

        cy.get('h3', { timeout: 10000 })
            .should('contain', 'Place order as guest')

        cy.placeOrderAsGuess()

        cy.fillInAddress()
    })

    it('select payment type and verify order', () => {

        cy.get('.dcp-form-date-group', { timeout: 10000 })
            .then(() => {
                cy.get('[data-testid=co-func-footer-forward]').click()
            })

        //cy.get('.ng-scope > .dcp-co-func-footer > .dcp-co-func-footer__cta-bar > .dcp-co-func-footer__cta > .wb-e-btn-1').click({ force: true })

        cy.get('h3', { timeout: 20000 })
            .should('contain', 'Your payment type')

        cy.selectPaymentType()

        cy.get('h2', { timeout: 10000 })
            .should('contain', 'Your order data')

    })
})