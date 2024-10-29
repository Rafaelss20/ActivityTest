describe('ActivityTeste', () => {
beforeEach(() => {
  cy.visit('http://localhost:8082')
})
 it('Cenários de teste com Cypress', () => {
  cy.get('#firstName').type("Rafael")
  cy.get('#lastName').type("Santana")
  cy.get('#email').type('rafael@email.com')
  cy.get('#password').type('123456')
  cy.get('#confirmPassword').type('123456')
  cy.get('#cpf').type('000.000.000-00')
  cy.get('button').click()


  })
})