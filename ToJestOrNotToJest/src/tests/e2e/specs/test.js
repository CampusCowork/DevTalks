describe('Usability test', () => {
  it('Uses the addr+', () => {
    cy.visit('localhost:8081')

    cy.contains('h1', 'ADDR+')

    typeInFirst(1)
    seeResult(1) // 1+null

    typeInSecond(2)
    seeResult(3) // 1+2

    typeInFirst(0)
    typeInSecond(5)
    seeResult(5) // 0+5

    typeInFirst(-1)
    typeInSecond(-1)
    seeResult(-2) // -1+(-1)

    typeInFirst('foo')
    typeInSecond('bar')
    seeResult('NaN') // foo+bar
  })
})

const typeInFirst = (value) => {
  cy.get('[data-cy=input]').first().clear().type(value)
}

const typeInSecond = (value) => {
  cy.get('[data-cy=input]').last().clear().type(value)
}

const seeResult = (result) => {
  cy.get('[data-cy=result]').should('contain', result)
}
