import { constants } from "buffer"
import Register from "../../../support/pageObject/Register"
const registerData = require("../../../fixtures/registerData.json")

describe('Create New Account Functionality', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
  })
  it.only('Make sure successfully create a new account', () => {
    cy.get(Register.fName).type(registerData.newAcc.newFName)
    cy.get(Register.lName).type(registerData.newAcc.newLName)
    cy.get(Register.email).type(registerData.newAcc.newEmail)
    cy.get(Register.pwd).type(registerData.newAcc.newPwd)
    cy.get(Register.confirm_pwd).type(registerData.newAcc.newConfirmPwd)
    Register.clickCreate()
    Register.verifySuccess()
  })
  it('Verify success create account will redirect to valid url', () => {
    cy.get(Register.fName).type(registerData.newAcc.newFName)
    cy.get(Register.lName).type(registerData.newAcc.newLName)
    cy.get(Register.email).type(registerData.newAcc.newEmail)
    cy.get(Register.pwd).type(registerData.newAcc.newPwd)
    cy.get(Register.confirm_pwd).type(registerData.newAcc.newConfirmPwd)
    Register.clickCreate()
    Register.verifySuccess()
    cy.url().should('contain', '/')
  })
  it('Verify failed create account using registered customer', () => {
    cy.get(Register.fName).type(registerData.currentAcc.currentFName)
    cy.get(Register.lName).type(registerData.currentAcc.currentLName)
    cy.get(Register.email).type(registerData.currentAcc.currentEmail)
    cy.get(Register.pwd).type(registerData.currentAcc.currentPwd)
    cy.get(Register.confirm_pwd).type(registerData.currentAcc.currentConfirmPwd)
    Register.clickCreate()
    Register.verifyError()
  })
  it('Verify failed create account using registered email', () => {
    cy.get(Register.fName).type(registerData.emptyCase.FName),
    cy.get(Register.lName).type(registerData.emptyCase.LName),
    cy.get(Register.email).type(registerData.currentAcc.currentEmail),
    cy.get(Register.pwd).type(registerData.emptyCase.pwd),
    cy.get(Register.confirm_pwd).type(registerData.emptyCase.confirmPwd)
    Register.clickCreate()
    Register.verifyError()
    })
  it('Verify failed create account without fills all the fields', () => {
    cy.get(Register.fName).type(''),
    cy.get(Register.lName).type(''),
    cy.get(Register.email).type(''),
    cy.get(Register.pwd).type(''),
    cy.get(Register.confirm_pwd).type('')
    Register.clickCreate()
  })
  it('Verify failed create account without fills the First Name field', () => {
    cy.get(Register.fName).type(''),
    cy.get(Register.lName).type(registerData.emptyCase.LName),
    cy.get(Register.email).type(registerData.emptyCase.email),
    cy.get(Register.pwd).type(registerData.emptyCase.pwd),
    cy.get(Register.confirm_pwd).type(registerData.emptyCase.confirmPwd)
    Register.clickCreate()
  })
  it('Verify failed create account without fills the Last Name field', () => {
    cy.get(Register.fName).type(registerData.emptyCase.FName),
    cy.get(Register.lName).type(''),
    cy.get(Register.email).type(registerData.emptyCase.email),
    cy.get(Register.pwd).type(registerData.emptyCase.pwd),
    cy.get(Register.confirm_pwd).type(registerData.emptyCase.confirmPwd)
    Register.clickCreate()

  })
  it('Verify failed create account without fills the E-mail field', () => {
    cy.get(Register.fName).type(registerData.emptyCase.FName),
    cy.get(Register.lName).type(registerData.emptyCase.LName),
    cy.get(Register.email).type(''),
    cy.get(Register.pwd).type(registerData.emptyCase.pwd),
    cy.get(Register.confirm_pwd).type(registerData.emptyCase.confirmPwd)
    Register.clickCreate()
  })
  it('Verify failed create account without fills the Password field', () => {
    cy.get(Register.fName).type(registerData.emptyCase.FName),
    cy.get(Register.lName).type(registerData.emptyCase.LName),
    cy.get(Register.email).type(registerData.emptyCase.email),
    cy.get(Register.pwd).type(''),
    cy.get(Register.confirm_pwd).type(registerData.emptyCase.confirmPwd)
    Register.clickCreate()
  })
  it('Verify failed create account without fills the Confirm Password field', () => {
    cy.get(Register.fName).type(registerData.emptyCase.FName),
    cy.get(Register.lName).type(registerData.emptyCase.LName),
    cy.get(Register.email).type(registerData.emptyCase.email),
    cy.get(Register.pwd).type(registerData.emptyCase.pwd),
    cy.get(Register.confirm_pwd).type('')
    Register.clickCreate()
  })
  

})