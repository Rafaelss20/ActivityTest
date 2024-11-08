describe('ActivityTest - Testando login', () => {
    
    it ('Testando login', () => {
      cy.visit("http://localhost:8082/")
      cy.get('#email').type('joao@email.com')
      cy.get('#password').type('Joao1234')
      cy.get('[type="submit"]').click()
      
    })

    it('Testando login com email ou senha incorretos', () => {
        cy.visit("http://localhost:8082/")
        cy.get('#email').type('joao@email.com')
        cy.get('#password').type('Joao123')
        cy.get('[type="submit"]').click()
        cy.get('li').should('be.visible').and('contain', "E-mail/Senha incorretos!")
      })


})