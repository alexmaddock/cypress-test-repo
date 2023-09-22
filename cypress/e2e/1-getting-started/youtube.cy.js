/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://www.youtube.com');
  })

  it.only('displays two todo items by default', () => {

    cy.get('#search').click({ force: true })//as('searchBar');
    // cy.get('searchBar').click();
    cy.get('input[id="search"]').type('Design Patterns for cypress testing{enter}');

    cy.get('#title-wrapper').find('#video-title').then((element) => {
      element.contains('Design Patterns for cypress testin').as('DesiredVideo');
      // element.should('have.text', 'Design Patterns for cypress testin');
      element.get('DesiredVideo').should('have.text', 'Christian Dangl').as('Correct Video');
      element.get('CorrectVideo').click();
    })


  });

})
