describe('Homepage', () => {
    it('Homepage has grid layout', () => {
        cy.visit('/')
        cy.get('[data-cy=grid]').should('be.visible')
    })
})