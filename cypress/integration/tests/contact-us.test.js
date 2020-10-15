const faker = require('faker')

let firstName = faker.name.findName() // fake full name
let exampleEmail = faker.internet.exampleEmail() // fake email
let exampleSentence = faker.lorem.sentences() // fake sentence

describe('test_name', function () {
  it('what_it_does', function () {
    cy.visit('http://sample-website.beforeyoubid.com.au/contact')

    cy.viewport(1440, 747)

    cy.get(
      '.style__Row-sc-1wsspy8-4:nth-child(1) > .style__Item-sc-1wsspy8-7:nth-child(1) > .Input__Wrapper-sc-1kmdb1h-2 > .jss23 > .jss33'
    ).click()

    cy.get(
      '.style__Row-sc-1wsspy8-4:nth-child(1) > .style__Item-sc-1wsspy8-7:nth-child(1) > .Input__Wrapper-sc-1kmdb1h-2 > .jss23 > .jss33'
    ).type(firstName)

    cy.get(
      '.style__Row-sc-1wsspy8-4 > .style__Item-sc-1wsspy8-7:nth-child(2) > .Input__Wrapper-sc-1kmdb1h-2 > .jss23 > .jss33'
    ).type(exampleEmail)

    cy.get(
      '.style__Item-sc-1wsspy8-7 > .TextArea__Wrapper-sc-1gjtjkn-1 > .jss40 > .jss23 > .jss33'
    ).type(exampleSentence)

    cy.get(
      '.Wrapper-sc-7lyyy9-0 > .style__InternalContainer-sc-1wsspy8-0 > .style__RowContainer-sc-1wsspy8-3 > .style__Row-sc-1wsspy8-4 > .Button__ButtonWrapper-sj5hgh-0'
    ).click()
  })
})
