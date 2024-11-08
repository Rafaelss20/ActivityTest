describe('ActivityTest - Testando procura por produto', () => {

   it ('Testando procura por produtos', () => {
      cy.visit("http://localhost:8082/home")
      cy.get('#searchProduct').type('monitor')
      cy.get('#basic-addon1').click()
      cy.get(':nth-child(1) > .container').should('be.visible')
      cy.get('#searchProduct').clear()
      cy.get('#searchProduct').type('mouse')
      cy.get('#basic-addon1').click()
      cy.get(':nth-child(1) > .container > p').should('be.visible')
    })
  })