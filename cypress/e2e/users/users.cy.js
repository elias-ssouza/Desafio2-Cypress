describe('GET /users', () => {
  it('should return list of users', () => {
    cy.request('/users').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.users).to.have.length.greaterThan(0);
    });
  });

  it('should return a list of users', () => {
    cy.request('/users').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.users).to.be.an('array');
    });
  });

  it('should return a specific user', () => {
    cy.request('/users/1').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', 1);
    });
  });

});