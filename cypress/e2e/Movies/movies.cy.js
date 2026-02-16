describe("Home Route", () => {
    it("should verify the home path", () => {
        cy.visit("/");
        cy.location("pathname").should("eq", "/");
    });

});
