describe('ActivityTest - Testando procura por produto', () => {
   beforeEach(() => {
    cy.visit('http://localhost:8082/')
    cy.get('#email').type('joao@email.com')
    cy.get('#password').type('Joao1234')
    cy.get('[type="submit"]').click()
   })
   it ('Testando procura por produtos', () => {
      cy.visit("http://localhost:8082/home")
      cy.get('#searchProduct').type('monitor')
      cy.get('form > button').click()
      cy.get(':nth-child(1) > table > tbody > :nth-child(2) > [style="width: 20%;"] > img').should('be.visible')
      cy.get('#searchProduct').clear()
      cy.get('#searchProduct').type('mouse')
      cy.get('form > button').click()
      cy.get(':nth-child(1) > table > tbody > :nth-child(2) > [style="width: 20%;"] > img').should('be.visible')
    })
  })