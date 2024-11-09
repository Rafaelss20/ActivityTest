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
describe('ActivityTest - Testando adicionar ao carrinho', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8082/')
        cy.get('#email').type('joao@email.com')
        cy.get('#password').type('Joao1234')
        cy.get('[type="submit"]').click()
       })

    it("Testando adicionar ao carrinho", () => {
      cy.visit('http://localhost:8082/home')
      cy.get(':nth-child(1) > table > tbody > :nth-child(2) > .buttoncar > button > a > iconify-icon').click()
      cy.get('[href="/Carbuy"]').click()
      cy.get('body > :nth-child(2) > :nth-child(2)').should('be.visible')
    })
    
})
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
describe('ActivityTest - Realizar compra', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8082/')
        cy.get('#email').type('joao@email.com')
        cy.get('#password').type('Joao1234')
        cy.get('[type="submit"]').click()
       })
   
    it("Testando realização de compra", () => {
        cy.visit('http://localhost:8082/home')
        cy.get(':nth-child(1) > table > tbody > :nth-child(2) > .buttoncar > button > a > iconify-icon').click()
        cy.get('[href="/Carbuy"]').click()
        cy.get('body > :nth-child(2) > :nth-child(2)').should('be.visible')
        cy.get(':nth-child(2) > button').click()
        cy.get('form > :nth-child(1) > input').type('0000')
        cy.get(':nth-child(2) > input').type('000')
        cy.get('#cpf').type('00000000000')
        cy.get('.cotainerButton > [type="submit"]').click()
    })
    
})

