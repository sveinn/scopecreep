describe("integration test", () => {
  it("can visit the app", () => {
    cy.visit("/")
      .get("#scope-starter-project")
      .should("have.text", "Scope Javascript Starter Project");
  });
});
