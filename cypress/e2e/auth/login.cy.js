describe('POST /auth/login', () => {
  it('should login with valid credentials', () => {
    cy.request('POST', '/auth/login', {
      username: 'emilys',
      password: 'emilyspass'
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('should return 400 for wrong password', () => {
    cy.request({
      method: 'POST',
      url: '/auth/login',
      body: {
        username: 'kminchelle',
        password: 'wrongpassword'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.message).to.eq('Invalid credentials');
    });
  });

});