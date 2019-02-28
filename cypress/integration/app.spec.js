describe('First test', () => {
  it('is working', () => {
    expect(true).to.equal(true);
  });
});

describe('Second test', () => {
  it('visit the app page', () => {
    cy.visit('/');
  });
});

describe('Third test', () => {
  it('accepts input', () => {
    cy.visit('/');

    const text = 'Tampere';
    cy.get('input').type(text).should('have.value', text);
  });
});
