describe('ActivityTest - Testando adicionar ao carrinho', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8082/')
        cy.get('#email').type('joao@email.com')
        cy.get('#password').type('Joao1234')
        cy.get('[type="submit"]').click()
       })

    it("Testando adicionar ao carrinho", () => {
      cy.visit('http://localhost:8082/home')
      cy.get(':nth-child(1) > .container > a').click()
      cy.get('[href="/Carbuy"]').click()
      cy.get('body > :nth-child(2) > :nth-child(2)').should('be.visible')
    })
    
})