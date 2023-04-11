/// <reference types="cypress" />

import '../../support/commands'

describe('Should test at a functional level', () => {
  let token
  
  before(() => {
    cy.geToken('a@a','a')
    .then(tkn => {
      token = tkn
    })
  })
  beforeEach(() => {
    cy.resetToken()
  })
})

it('full API test', () => {
 
    cy.request({
      method: 'POST',
      url: 'https://barrigarest.wcaquino.me/contas',
      headers: { Authorization: `JWT ${token}` },
      body: {
          nome: 'conta qualquer'
      },
    }).as('response')
 
  cy.get('@response').then(res =>{
    expect(res.status).to.be.equal(201)
    expect(res.body).to.have.property('id')
    expect(res.body).to.have.property('nome','conta qualquer')
  })
  
})
