describe('POST /auth/login', () => {
  it('should login with valid credentials', () => {
    cy.request('POST', '/auth/login', {
      username: 'emilys',
      password: 'emilyspass'
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});