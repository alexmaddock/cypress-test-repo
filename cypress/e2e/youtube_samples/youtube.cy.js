/// <reference types="cypress" />

describe('Search Video', () => {
  beforeEach(() => {
    cy.visit('https://www.youtube.com');
  })

  it.only('page shows necessary elements to indicate it has loaded', () => {

    cy.get('#search').click({ force: true })
    cy.get('input[id="search"]').type('Design Patterns for cypress testing{enter}');

    cy.contains('Design Patterns for sustainable automatic').then((el) => {
      expect(el.text()).to.contain('Christian Dangl');
      cy.get(el).as('video title');
      cy.get('@video title').click()
    });

    cy.get('#title').contains('Design Patters for sustainable automatic');
    cy.get('#subscribe-button-shape').contains('subscribe').should('be.visible');
    cy.get('button').contains('Share').should('be.visible');

  });

  it.only('videos can be sorted correctly by most recent comments', () => {

  })

  it.only('videos can be sorted by most popular comments', () => {

  })

})
