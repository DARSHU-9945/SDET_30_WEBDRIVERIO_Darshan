const { assert } = require("chai");
var hp=require("../pageobjects/vtigerHomePage")
var cp=require("../pageobjects/Contactspage")
var ccp=require("../pageobjects/CreateContactPage")

describe('Create_Contact', () => {

    it('CreateContactsPage', async() => {
        await hp.clickonContactLink()
        await cp.clickonPlussButton()
        await ccp.CreateContactPage("Rohit_Sharma")
         //await ccp.CreateContactPagewithleadsource("Rohit_Sharma")
        // await ccp.newWindow("Virat_Kohli")
    });
    
});