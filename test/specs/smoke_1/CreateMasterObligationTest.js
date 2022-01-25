var basePage=require('../../pageObjects/BasePage')
var loginPage=require('../../pageObjects/LoginPage')
var masterObligationsPage=require('../../pageObjects/MasterObligationsPage')


const expectChai=require('chai').expect

const fs=require('fs')





describe('Master Obligation', () => {
    it('Create Master Obligation Test', async () => {
        await masterObligationsPage.clickOnAdminModule()
    })
})