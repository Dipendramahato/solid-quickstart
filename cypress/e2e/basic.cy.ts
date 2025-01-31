describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('display header text', () => {
    cy.get('h1')
    .contains('Hello World!', { matchCase: false })
  })

  it('displays Click button', () => {
    cy.get('button')
    .contains('Clicks');
    <script data-cfasync="false" async src="https://media.adstork.com/js/pu/c.js#zid=134999"></script>
  })
})
