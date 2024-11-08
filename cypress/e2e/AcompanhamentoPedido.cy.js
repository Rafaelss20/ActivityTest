describe('ActivityTest - Testando acompanhamento de pedido', () => {
    
    it("Testando acompanhamento de pedido", () => {
      cy.visit('http://localhost:8082/home')
      cy.get('[href="/Pedidos"]').click()
      cy.get('#codRastreio').type("NCAXOPERQ")
      cy.get('form > button').click()
    
    })

    it("Testando acompanhamento de pedido com código inválido", () => {
        cy.visit('http://localhost:8082/home')
        cy.get('[href="/Pedidos"]').click()
        cy.get('#codRastreio').type("ABCD")
        cy.get('form > button').click()
        cy.get(':nth-child(2) > th').should('be.visible')
      
      })
})