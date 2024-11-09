describe('ActivityTest - Testando acompanhamento de pedido', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8082/')
        cy.get('#email').type('joao@email.com')
        cy.get('#password').type('Joao1234')
        cy.get('[type="submit"]').click()
       })
   
      it("Testando acompanhamento de pedido", () => {
      cy.visit('http://localhost:8082/home')
      cy.get('[href="/Pedidos"]').click()
      cy.get('#codRastreio').type("NCAXOPERQ")
      cy.get('.flex > form > button').click()
      cy.get('table').should('be.visible')
    
    })

    it("Testando acompanhamento de pedido com código inválido", () => {
        cy.visit('http://localhost:8082/home')
        cy.get('[href="/Pedidos"]').click()
        cy.get('#codRastreio').type("ABCD")
        cy.get('.flex > form > button').click()
        cy.get(':nth-child(2) > th').should('be.visible').and('contain', 'Código ABCD não encontrado.')
      
      })
})