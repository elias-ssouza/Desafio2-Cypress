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

  it('should return 404 for non-existent product', () => {
    cy.request({
      url: '/products/999999',
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  it('should return 404 for non-existent product', () => {
    cy.request({
      url: '/products/999999',
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  it('should find products with search term "phone"', () => {
    cy.request('/products/search?q=phone').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.products.length).to.be.greaterThan(0);
    });
  });

});
describe('POST /products',() =>{
  it('should add a complete new product', () => {
    cy.request({
      method: 'POST',
      url: '/products/add',
      body: {
        title: 'Produto Teste Completo',
        description: 'Descrição do produto',
        price: 999,
        brand: 'Marca Genérica'
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('title', 'Produto Teste Completo');
    });
  });

})

