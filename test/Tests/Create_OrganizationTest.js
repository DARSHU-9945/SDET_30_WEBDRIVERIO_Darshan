const { assert } = require("chai");
var hp=require("../pageobjects/vtigerHomePage")
var op=require("../pageobjects/OrganizationsPage")
var cop=require("../pageobjects/CreateOrganizationsPage")

describe('Create_Organization', () => {

    it('TestCase_01', async() => {
        await hp.clickonOrganizationsLink()
        await op.clickonPlussButton()
       await cop.CreateOrganizationsPage("Virat_Kohli")
        //await cop.CreateOrganizationsPageIndustry("Virat_Kohli")
       
    });
    
});