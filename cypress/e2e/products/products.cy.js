describe('GET /products', () => {
  it('should return a list of products', () => {
    cy.request('/products').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.products).to.have.length.greaterThan(0);
    });
  });

  it('should get a product by ID', () => {
    cy.request('/products/1').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', 1);
    });
  });

  it('should add a new product', () => {
    cy.request('POST', '/products/add', {
      title: 'Produto Teste',
      price: 100
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('title', 'Produto Teste');
    });
  });
});