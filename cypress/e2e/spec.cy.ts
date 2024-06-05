describe('home page', () => {
  it('the buttons are there', () => {
    cy.visit('http://192.168.0.199:4321/')
    
    cy.viewport('macbook-15')

    cy.get("Header").should("exist")
    cy.get("#themeToggle").click()


    // cy.get(".cursor-pointer").should("exist").click()
    // .contains("Blog").click()

    // cy.get(".cursor-pointer").should("exist").click()
    // .contains("Contact")

    // cy.get(".cursor-pointer").should("exist").click()
    // .contains("About")

    // cy.get(".cursor-pointer").should("exist").click()
    // .contains("Testimonial").should("exist").click()

    
    



  })
})




// describe('Home Page', () => {
//   it('Visits the Kitchen Sink', () => {
//     cy.visit('https://example.cypress.io')

//     cy.contains('type').click()
//   })
// })