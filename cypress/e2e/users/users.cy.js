describe('GET /users', () => {
  it('should return list of users', () => {
    cy.request('/users').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.users).to.have.length.greaterThan(0);
    });
  });
});