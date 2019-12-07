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
})

Cypress.Commands.add('searchItem', () => {
      cy.get('.header-search-wrapper > .ng-scope > .ng-scope > .header-search > .header-search-open-trigger').click({ force: true })
      cy.get('.ng-scope > .header-search > .header-search-open-trigger > a > .header-search-open-trigger-label').click({ force: true })
      cy.get('.ng-scope > .header-search > .header-search-is-open > .ng-pristine > #searchTerm').click({ force: true })
      cy.get('.ng-scope > .header-search > .header-search-is-open > .ng-valid > #searchTerm').type(Cypress.env('itemSearch'), { force: true })
})

Cypress.Commands.add('addItemToBasket', () => {
      cy.get('h3', { timeout: 20000 })
            .should('contain', Cypress.env('itemAdd'))
      cy.contains(Cypress.env('itemAdd')).click({ force: true })
      cy.get('.dcp-pdp-buy-box-add-to-basket__prices-and-action', { timeout: 10000 })
            .should('contain', ' Add to basket')
      cy.contains(' Add to basket').click({ force: true })
      cy.get('.modal-content-to-print > .modal-body > .row > .col-xs-12 > .wb-e-btn-1').click({ force: true })
      cy.get('.ng-scope > .dcp-co-func-footer > .dcp-co-func-footer__cta-bar > .dcp-co-func-footer__cta > .wb-e-btn-1').click({ force: true })
})

Cypress.Commands.add('placeOrderAsGuess', () => {
      cy.get('h3', { timeout: 10000 })
            .should('contain', 'Place order as guest')
      cy.get('.dcp-order-process-login-body__section-inner > .dcp-order-process-login-panel > .dcp-order-process-login-panel__form > .form-group > #dcp-login-guest-user-email').click({ force: true })
      cy.get('.dcp-order-process-login-body__section-inner > .dcp-order-process-login-panel > .dcp-order-process-login-panel__form > .form-group > #dcp-login-guest-user-email').type(Cypress.env('userEmail'))
      cy.get('.dcp-order-process-login-body__section > .dcp-order-process-login-body__section-inner > .dcp-order-process-login-panel > .dcp-order-process-login-panel__form > .wb-e-btn-2').click({ force: true })
})

Cypress.Commands.add('fillInAddress', () => {
      cy.get('.dcp-form-radio-group__label.ng-binding.wb-e-radio-3__label', { timeout: 10000 })
            .then(() => {
                  cy.contains('Ms').click({ force: true })
            })
      cy.get('.ng-scope > .dcp-utils-dynamic-form > .dcp-form > .dcp-form__group > #co_payment_address-firstName').click({ force: true })
      cy.get('.ng-scope > .dcp-utils-dynamic-form > .dcp-form > .dcp-form__group > #co_payment_address-firstName').type(Cypress.env('firstNAme'))
      cy.get('.ng-scope > .dcp-utils-dynamic-form > .dcp-form > .dcp-form__group > #co_payment_address-lastName').click({ force: true })
      cy.get('.ng-scope > .dcp-utils-dynamic-form > .dcp-form > .dcp-form__group > #co_payment_address-lastName').type(Cypress.env('lastName'))
      cy.get('.dcp-utils-dynamic-form > .dcp-form > .dcp-form__group > .dcp-form__group > #co_payment_address-line2').click({ force: true })
      cy.get('.dcp-utils-dynamic-form > .dcp-form > .dcp-form__group > .dcp-form__group > #co_payment_address-line2').type(Cypress.env('addrUnit'))
      cy.get('.dcp-utils-dynamic-form > .dcp-form > .dcp-form__group > .dcp-form__group > #co_payment_address-line1').click({ force: true })
      cy.get('.dcp-utils-dynamic-form > .dcp-form > .dcp-form__group > .dcp-form__group > #co_payment_address-line1').type(Cypress.env('addrStreet'))
      cy.get('.dcp-utils-dynamic-form > .dcp-form > .dcp-form__group > .dcp-form__group > #co_payment_address-postalCode').click({ force: true })
      cy.get('.dcp-utils-dynamic-form > .dcp-form > .dcp-form__group > .dcp-form__group > #co_payment_address-town').click({ force: true })
      cy.get('.dcp-utils-dynamic-form > .dcp-form > .dcp-form__group > .dcp-form__group > #co_payment_address-town').type(Cypress.env('addrTown'))
      cy.get('.dcp-utils-dynamic-form > .dcp-form > .dcp-form__group > .dcp-form__group > #co_payment_address-postalCode').click({ force: true })
      cy.get('.dcp-utils-dynamic-form > .dcp-form > .dcp-form__group > .dcp-form__group > #co_payment_address-postalCode').type(Cypress.env('addrPastalCode'))
})

Cypress.Commands.add('selectPaymentType', () => {
      //cy.get('.dcp-form-date-group', { timeout: 20000 })
      cy.get('[data-testid=co-address-payment]', { timeout: 20000 })
            .then(() => {
                cy.get('[data-testid=co-func-footer-forward]').click({ force: true })
            })

        cy.get('h3', { timeout: 15000 })
            .should('contain', 'Your payment type')
      cy.get('.form-group:nth-child(1) > .dcp-co-payment-modes-overview__item > .dcp-co-payment-modes__radio-wrapper > .wb-e-radio-1__wrapper > .wb-e-radio-1__label').click({ force: true })
      cy.get('.form-group > .dcp-co-payment-modes-overview__item > .dcp-co-payment-modes__radio-wrapper > .wb-e-radio-1__wrapper > #dcp-co-payment-modes_options-CREDITCARD').type(Cypress.env('payType'))
      cy.get('.form-group > .form-group > .dcp-co-payment-modes__sub-items > .wb-e-radio-1__wrapper:nth-child(2) > .wb-e-radio-1__label').click({ force: true })
      cy.get('.form-group > .form-group > .dcp-co-payment-modes__sub-items > .wb-e-radio-1__wrapper > #mastercard').type(Cypress.env('cardTypre'))
      cy.get('.ng-scope > .dcp-co-func-footer > .dcp-co-func-footer__cta-bar > .dcp-co-func-footer__cta > .wb-e-btn-1').click({ force: true })
})



