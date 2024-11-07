describe('ActivityTest', () => {
beforeEach(() => {
  cy.visit('http://localhost:8082')
})

it('Testando formulário de cadastro', () => {
    cy.visit('http://localhost:8082/create')
    cy.get('#firstName').type("João")
    cy.get('#lastName').type("Silva")
    cy.get('#email').type('joao@email.com')
    cy.get('#password').type('Joao1234')
    cy.get('#confirmPassword').type('Joao1234')
    cy.get('#cpf').type('000.000.000-00')
    cy.get('#nascimento').type('2024-11-06')
    cy.get('#numberCard').type('1')
    cy.get('#cvv').type('1')
    cy.get('#dateValed').type('01/01/01')
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
      cy.get('#cpf').type('000.000.000-00')
      cy.get('#nascimento').type('2024-11-06')
      cy.get('#numberCard').type('1')
      cy.get('#cvv').type('1')
      cy.get('#dateValed').type('01/01/01')
      cy.get('[type="submit"]').click()
      cy.get(':nth-child(26)').should('be.visible').and('contain', "Senha não são identicas!")
 })

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