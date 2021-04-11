describe('Realtor Data View', () => {
  it('Homepage shows realtor data', () => {
    cy.visit('/')
    cy.get('[data-cy=realtor-table]')
  })
})