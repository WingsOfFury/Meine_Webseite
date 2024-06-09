describe('homelander', () => {
  it('benutze den Contact Button', () => {
    cy.visit('http://192.168.0.199:4321/')
    
    
    
    cy.viewport('macbook-15')
    cy.contains("About").should("exist")
    cy.contains("Blog").should("exist")
    cy.contains("CV").should("exist")
    cy.contains("Testimonials").should("exist")
    cy.contains("Akansel Cengiz").should("exist")


    cy.get("Header").should("exist")
    cy.get("#themeToggle").should("exist").click()
    cy.get(".inline-flex").click()


  


    
    



  })
})




// describe('Home Page', () => {
//   it('Visits the Kitchen Sink', () => {
//     cy.visit('https://example.cypress.io')

//     cy.contains('type').click()
//   })
// })