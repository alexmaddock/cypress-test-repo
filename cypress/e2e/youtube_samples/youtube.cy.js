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

    cy.get('#above-the-fold').contains("Design Patterns for sustainable automatic");
    cy.get('#subscribe-button-shape').contains('Subscribe').should('be.visible');
    // cy.get('#top-level-buttons-computed').contains('Share').should('be.visible');

    // Expand Description with more button
    cy.get('#attributed-snippet-text').then((el) => {
      let textLength = el.getText();
      cy.log(textLength.length);
      expect(textLength).to.be.lessThan(40);

      cy.get('#expand').click();
      textLength = el.getText();
      expect(textLength).to.be.greaterThan(40);
    })


  });

  it('videos can be sorted correctly by most recent comments', () => {

  })

  it('videos can be sorted by most popular comments', () => {

  })

})
