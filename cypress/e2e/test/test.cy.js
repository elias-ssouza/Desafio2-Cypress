describe('GET /test', () => {
    it('should handle /test endpoint (if exists)', () => {
        cy.request({
            url: '/test',
            failOnStatusCode: false
        }).then((response) => {
            expect([200, 404]).to.include(response.status);
        });
    });

});