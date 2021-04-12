describe('Realtor Data View', () => {
  it('Homepage shows realtor data', () => {
    cy.visit('/')
    cy.get('[data-cy=realtor-table]').should('be.visible')
    cy.get('[data-cy=realtor-row]').should('be.visible')
    cy.get('[data-cy=realtor-name]').should('be.visible')
    cy.get('[data-cy=realtor-address]').should('be.visible')
  })
})