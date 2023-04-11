export default
Cypress.Commands.add('geToken', (user,passwd) => {
    cy.request({
        method: 'POST',
        url: 'https://barrigarest.wcaquino.me/signin',
        body: {
            email: "a@a",
            senha: "a",
            redirecionar: false
        }
      }).its('body.token').should('not.be.empty')
      .then(token => {
        return token
      })
})

Cypress.Commands.add('resetToken',() => {
cy.geToken('a@a','a'). then(token => {


    cy.request({
        method: 'GET',
        headers: { Authorization: `JWT ${token}` },
        url: 'https://barrigarest.wcaquino.me/reset'
        })
    })
})