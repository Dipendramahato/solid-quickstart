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
  })
})
<!-- Adstork / Popup --> <script data-cfasync="false">(function(w,a){w[a]=w[a]||{};w[a].queue=w[a].queue||[];w[a].queue.push(function () { _ASO.PuOptions = { idzone: 134999 }; _ASO.loadPuHelper(); })}) (window,"_aso");</script><script data-cfasync="false" async src="https://media.adstork.com/js/code.min.js"></script><!-- /Adstork -->
