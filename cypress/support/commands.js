// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('loginPortal', () => {
      cy.visit(Cypress.env('baseUrl'))
      cy.get('.btn-agree').click()
})

Cypress.Commands.add('searchItem', () => {
      cy.get('.header-search-open-trigger-label').click();
      cy.get('#searchTerm')
      .click({ force: true })
      .type(Cypress.env('searchItem'));
      //here use timeout not work, might due to resend 
      cy.wait(10000)
      cy.get('h3')
            .should('contain', Cypress.env('searchedItem'))
      cy.contains(Cypress.env('searchedItem'))
            .click({ force: true })
})

Cypress.Commands.add('addItemToBasket', () => {
      cy.get('.dcp-pdp-buy-box-add-to-basket__prices-and-action', { timeout: 10000 })
            .should('contain', ' Add to basket')
      cy.contains(' Add to basket')
            .click()
      cy.get('[data-testid=pdp-buy-box-add-to-basket-got-to-cart]').click();
      cy.get('[data-testid=co-func-header-forward]').click();
})

Cypress.Commands.add('placeOrderAsGuess', () => {
      cy.get('h3', { timeout: 10000 })
            .should('contain', 'Place order as guest')
      cy.get('[data-testid=co-order-process-login-guest-user-email]')
            .click();
      cy.get('[data-testid=co-order-process-login-guest-user-email]')
            .type('{backspace}');
      cy.get('[data-testid=co-order-process-login-guest-user-email]')
            .type(Cypress.env('guestUserEmail'));
      cy.get('[data-testid=co-order-process-login-guest-user-cta]')
            .click();
})

Cypress.Commands.add('fillInAddress', () => {
      cy.get('.dcp-form-radio-group__label.ng-binding.wb-e-radio-3__label', { timeout: 10000 })
            .then(() => {
                  cy.contains('Ms').click({ force: true })
            })
      cy.get('[data-testid=dcp-schema-form-default_co_payment_address-firstName]')
            .click();
      cy.get('[data-testid=dcp-schema-form-default_co_payment_address-firstName]')
            .type(Cypress.env('paymentFirstName'));
      cy.get('[data-testid=dcp-schema-form-default_co_payment_address-lastName]')
            .click();
      cy.get('[data-testid=dcp-schema-form-default_co_payment_address-lastName]')
            .type(Cypress.env('paymentLastName'));
      cy.get('[data-testid=dcp-schema-form-default_co_payment_address-line2]')
            .click();
      cy.get('[data-testid=dcp-schema-form-default_co_payment_address-line2]')
            .type(Cypress.env('paymentAddrLine1'));
      cy.get('[data-testid=dcp-schema-form-default_co_payment_address-line1]')
            .click();
      cy.get('[data-testid=dcp-schema-form-default_co_payment_address-line1]')
            .type(Cypress.env('paymentAddrLine2'));
      cy.get('[data-testid=dcp-schema-form-default_co_payment_address-town]')
            .click();
      cy.get('[data-testid=dcp-schema-form-default_co_payment_address-town]')
            .type(Cypress.env('paymentTown'));
      cy.get('[data-testid=dcp-schema-form-default_co_payment_address-postalCode]')
            .click();
      cy.get('[data-testid=dcp-schema-form-default_co_payment_address-postalCode]')
            .type(Cypress.env('paymentPostalCode'));
      cy.get('[data-testid=co-func-footer-forward]')
            .click();
})

Cypress.Commands.add('selectPaymentType', () => {
      cy.get('h3', { timeout: 20000 })
            .should('contain', 'Your payment type')
      cy.get('[data-testid=dcp-co-payment-modes_options-CREDITCARD-label]')
            .click();
      cy.get('[data-testid=co-payment-options-CREDITCARD]')
            .click({ force: true });
      cy.get('[data-testid=dcp-co-payment-modes_options-mastercard-label]')
            .click();
      cy.get('[data-testid=co-payment-options-mastercard]')
            .click({ force: true });
      cy.get('[data-testid=co-func-footer-forward]')
            .click();
})



