describe('required-input', function () {
  it('test to see if you can submit a form without any info', function () {
    cy.visit('http://sample-website.beforeyoubid.com.au/contact')

    cy.viewport(375, 812)

    cy.get(
      '.Wrapper-sc-7lyyy9-0 > .style__InternalContainer-sc-1wsspy8-0 > .style__RowContainer-sc-1wsspy8-3 > .style__Row-sc-1wsspy8-4 > .Button__ButtonWrapper-sj5hgh-0'
    ).click()

    cy.get('.style__ContactText-sc-1wsspy8-2 cvoTmy').find(
      // Checks for Successful submit message after clicking
      'Your message has been sent :)'
    )
  })
})
