describe("Simple and basic search flow", () => {
  it("should show the Glasses Morty", () => {
    cy.visit("http://localhost:3000");
    cy.get('input[name="name"]').type("Glasses Morty").type("{enter}");
    cy.get('[data-cy="143"]').click();
    cy.get('[data-cy="image"]')
      .should("have.attr", "src")
      .should(
        "eq",
        "https://rickandmortyapi.com/api/character/avatar/143.jpeg",
      );
  });
});
