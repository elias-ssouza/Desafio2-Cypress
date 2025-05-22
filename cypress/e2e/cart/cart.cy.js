describe('GET /carts/1', () => {
  it('should return the cart details for cart ID 1', () => {
    cy.request('https://dummyjson.com/carts/1')
      .should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', 1);
        expect(response.body).to.have.property('products').and.be.an('array').and.have.length.greaterThan(0);
        expect(response.body).to.have.property('total').and.be.a('number');
        expect(response.body).to.have.property('discountedTotal').and.be.a('number');
        expect(response.body).to.have.property('userId').and.be.a('number');
      });
  });
});
