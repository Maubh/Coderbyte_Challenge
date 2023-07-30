const { faker } = require('@faker-js/faker');


Cypress.Commands.add('signUp', () => {
    const username = faker.internet.userName()
    const password = faker.internet.password()
    cy.get('#signin2').click()
    cy.get('#sign-username').type(username)
    cy.get('#sign-password').type(password)
    cy.contains('button','Sign up').click()


})
