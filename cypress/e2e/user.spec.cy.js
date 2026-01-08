import userData from '../fixtures/user-data.json'

describe('Orange HRM tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: ':nth-child(6) > .oxd-main-menu-item > .oxd-text',
    firstNameField: '.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input',
    lastNameField: ':nth-child(3) > :nth-child(2) > .oxd-input',
    employeeIdField: ':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
    otherIdField: ':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
    driversLicenseField: ':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
    licenceExpiryDate: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input',
    dateCloseButton: '.--close',
    saveButton: ':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button'
  }

  const userData = {
    userSuccess: {
      username: 'Admin',
      password: 'admin123'
    },
    userFail: {
      username: 'teste',
      password: 'teste'
    }
  }

  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('Lucas')
    cy.get(selectorsList.lastNameField).type('Borges')
    cy.get(selectorsList.employeeIdField).clear().type('0256')
    cy.get(selectorsList.otherIdField).clear().type('025896')
    cy.get(selectorsList.driversLicenseField).clear().type('1234567')
    cy.get(selectorsList.licenceExpiryDate).clear().type('2023-18-10')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.saveButton).click()
  })
  it('Login c- Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
})
})