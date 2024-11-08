describe('ActivityTest - Testando formulário de cadastro', () => {


it('Testando formulário de cadastro', () => {
    cy.visit('http://localhost:8082/create')
    cy.get('#firstName').type("João")
    cy.get('#lastName').type("Silva")
    cy.get('#email').type('joao@email.com')
    cy.get('#password').type('Joao1234')
    cy.get('#confirmPassword').type('Joao1234')
    cy.get('#cpf').type('00000000000')
    cy.get('#nascimento').type('2024-11-06')
    cy.get('#numberCard').type('0000000000000000')
    cy.get('#cvv').type('000')
    cy.get('#dateValed').type('01/30')
    cy.get('[type="submit"]').click()
    cy.get('h1').should('be.visible').and('contain', "Cadastrado com sucesso")
     })

it('Testando formulário de cadastro com senha incorreta', () => {
      cy.visit('http://localhost:8082/create')
      cy.get('#firstName').type("João")
      cy.get('#lastName').type("Silva")
      cy.get('#email').type('joao@email.com')
      cy.get('#password').type('Joao1234')
      cy.get('#confirmPassword').type('Joao123')
      cy.get('#cpf').type('00000000000')
      cy.get('#nascimento').type('2024-11-06')
      cy.get('#numberCard').type('0000000000000000')
      cy.get('#cvv').type('000')
      cy.get('#dateValed').type('01/30')
      cy.get('[type="submit"]').click()
      cy.get('.senhasCreate > :nth-child(2) > li').should('be.visible').and('contain', "Senha não são identicas!")
 })

it('Testando formulário de cadastro com email já cadastrado', () => {
  cy.visit('http://localhost:8082/create')
  cy.get('#firstName').type("João")
  cy.get('#lastName').type("Silva")
  cy.get('#email').type('joao@email.com')
  cy.get('#password').type('Joao1234')
  cy.get('#confirmPassword').type('Joao1234')
  cy.get('#cpf').type('00000000000')
  cy.get('#nascimento').type('2024-11-06')
  cy.get('#numberCard').type('0000000000000000')
  cy.get('#cvv').type('000')
  cy.get('#dateValed').type('01/30')
  cy.get('[type="submit"]').click()
  cy.get(':nth-child(2) > :nth-child(2) > li').should('be.visible').and('contain', "E-mail já cadastrado!")
})
})