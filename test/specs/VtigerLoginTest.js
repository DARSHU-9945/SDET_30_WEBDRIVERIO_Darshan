
/*const { assert } = require("chai");
var lp = require("../pageobjects/vtigerLoginPage")
let CommnData=require("../Data/CommonData")

let ExcelDta =require("../../genericUtility/excelUtility")*/
let TestDta=require("../Data/SpecificData")
describe('loginToVtiger', () => {
    it('loginToVtigerAndValidateTitle',async () => {

        //lp.loginToApplication(CommnData.url,CommnData.userName,CommnData.Password)
        wdioExpect(browser).toHaveTitleContaining(TestDta.partialTitleHomePage)
    });

    it.only('loginToVtigerAndValidateTitle from Excel',async () => {

       // let excelArray=await ExcelDta("ProjectData.xlsx",'Sheet1')

       // lp.loginToApplication(excelArray[0].url,excelArray[0].userName,excelArray[0].Password)
        wdioExpect(browser).toHaveTitleContaining(TestDta.partialTitleHomePage)


})
})