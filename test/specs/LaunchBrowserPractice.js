//============For passing the Result=================================//

/*describe('Launch Browser',()=>{
    it('Navigate To Amazon',async()=>{
        await browser.url("https://amazon.in")

        // URL validation

        await expect(browser).toHaveUrlContaining('amazon')

    let title=await browser.getTitle()

    console.log("========Title Of the Page is====="+title);

    // Title Validation
    await expect(browser).toHaveTitleContaining('Shop')
    })
})*/

//================For failing the Result===============================//

/*describe('Launch Browser',()=>{
    it('Navigate To Amazon',async()=>{
        await browser.url("https://amazon.in")

        // URL validation

        await expect(browser).toHaveUrlContaining('Flipcart')

    let title=await browser.getTitle()

    console.log("========Title Of the Page is====="+title);

    // Title Validation
    await expect(browser).toHaveTitleContaining('Cart')
    })
})*/

//========================================================================

describe('Launch Browser',()=>{
    it('Navigate To Amazon',async()=>{
        await browser.url("http://localhost:8888/")

        // URL validation

        await wdioExpect(browser).toHaveUrlContaining('localhost')
///===========================================================================
    let title=await browser.getTitle()

    console.log("========Title Of the Page is====="+title);

    // Title Validation
    await wdioExpect(browser).toHaveTitleContaining('CRM')

///===========================================================================

    const elem = $("//a[text()='Contacts']")  //====>Element is displayed
    await wdioExpect(elem).toBeDisplayed()
    console.log("Element is displayed");

    // Expected: "displayed"======>
    // Received: "not displayed"=====> for incorrect xpath or elemnet is not displayed

///===========================================================================
    //browser.getTimeouts()
///===========================================================================

   // const myInput = $("//input[@src='themes/images/searchicon.PNG']")
    //await wdioExpect(myInput).toHaveAttribute('class','searchBtn')
    //console.log("========================>Yes it is having attribute of class===>searchBtn <================");
    /* }else{
        console.log("====================>Yes it is Not having attribute of class===>tabUnSelected <=======");
     }*/

    //Expected: "searchBtn"
        //Received: undefined====> for invalid input=== ex: PNG1
        // its not going to print else statement also, its directly gives Error as
        //Error: Expect $(`//input[@src='themes/images/searchicon.PNG1']`) to have attribute class
     // for correct o/p its print  //=======================>Yes it is having attribute of class===>searchBtn <================

     //=============================================================================================================

/*const myInput1 = $("//input[@src='themes/images/searchicon.PNG']")
    await wdioExpect(myInput1).toHaveAttributeContaining('class','search')
    console.log("========================>Yes it is having attribute of class===>searchBtn <================");

//========================>Yes it is having attribute of class===>searchBtn <================*/

//==================================================================================================================
/*const myInput2 = $("//input[@src='themes/images/searchicon.PNG']")
await wdioExpect(myInput2).toHaveElementClass('form-control', { message: 'Not a form control!', })*/

//Expect $(`//input[@src='themes/images/searchicon.PNG']`) to have class
//Error: Not a form control!
//Expected: "form-control"
// Received: "searchBtn"

//============================================================================================================

/*const elem1 = $("//input[@src='themes/images/searchicon.PNG']")
await wdioExpect(elem1).toHaveElementProperty('height', 70)
console.log("Yes it is having height of 70");*/
//await expect(elem1).not.toHaveElementProperty('height', 0)

//Expected: 70
//Received: 31

// const elem2 = $("//input[@src='themes/images/searchicon.PNG']")
// await wdioExpect(elem2).toHaveElementProperty('height', 31)
// console.log("Yes it is having height of 31");

// Yes it is having height of 31

//============================================================================================================

/*const Input = $("//input[@name='module']")

await wdioExpect(Input).toHaveValue('Home', { ignoreCase: true })

console.log("================Yes it is having an value of Home==============");

//] ================Yes it is having an value of Home==============*/

//============================================================================================================
/*const elem = $('#elem')
await expect(elem).toBeClickable()

const elem = $('#elem')
await expect(elem).toBeDisabled()
await expect(elem).not.toBeEnabled()

const elem = $('#elem')
await expect(elem).toBeSelected()

                or

const elem = $('#elem')
await expect(elem).toBeChecked()

const elem = $('#elem')
await expect(elem).toHaveId('elem')

browser.url('https://webdriver.io/')

const elem = $('.tagline')

await expect(elem).toHaveTextContaining('browser and mobile automation test framework')

await expect(elem).toHaveTextContaining(['browser and mobile automation test framework', 'helper functions'])

const elem = $('#elem')
await expect(elem).toBeDisplayedInViewport()*/

//============================================================================================================

/*const URL=await browser.getUrl()
console.log("=============>url of current page is <=============: " +URL);

await browser.navigateTo("https://www.google.com/")

// it also works even await is not put for below statements except assignment statements

await browser.back()

await browser.forward()

await browser.back()

await browser.refresh()

const TITLE=await browser.getTitle()

console.log("=============>Title of the Page is<=============: " +TITLE);

=============>url of current page is <=============: http://localhost:8888/index.php?action=index&module=Home

=============>Title of the Page is<=============: Administrator - Home - vtiger CRM 5 - Commercial Open Source CRM
*/
//============================================================================================================
/*var windowid=await browser.getWindowHandle()

console.log("==========>windowId of the browser is:<=========== "+windowid);

//==========>windowId of the browser is:<=========== CDwindow-60E741331956096D89A29FDA5155B97B

//browser.closeWindow()

//browser.switchToWindow(handle)

await browser.createWindow("https://www.google.com/")

var windowids=await browser.getWindowHandles()

console.log("==========>windowIds of the browser is:<=========== "+windowids);

//==========>windowIds of the browser is:<=========== CDwindow-60E741331956096D89A29FDA5155B97B

//await browser.printPage("portrait", 1, false, 21.59 , 21.59 , 1, 1, 1, 1, true, [])===>

// unknown error: unknown error: PrintToPDF is only supported in headless mode 
*/

//============================================================================================================

//browser.switchToFrame(id)

//browser.switchToParentFrame()

console.log(await browser.getWindowRect());

//{ height: 754, width: 1382, x: -8, y: -8 }

await browser.setWindowRect(-10, -10, 1100, 1754)

//============================================================================================================

//browser.maximizeWindow()

//browser.minimizeWindow()

//browser.fullscreenWindow()

//browser.findElement(using, value)
// get element
// const elementRef = await browser.findElement('xpath', '//div')
// const element = await $(elementRef)
// await element.click()

//browser.findElements(using, value)

// browser.isElementSelected(elementId)

// browser.isElementDisplayed(elementId)

// browser.getElementAttribute(elementId, name)

// browser.getElementProperty(elementId, name)

// browser.getElementCSSValue(elementId, propertyName)

// browser.getElementText(elementId)

// browser.getElementTagName(elementId)

// browser.getElementRect(elementId)

// browser.isElementEnabled(elementId)

// browser.elementClick(elementId)

// browser.elementClear(elementId)

// browser.elementSendKeys(elementId, text)

 browser.getPageSource()

// browser.executeScript(script, args)

// browser.executeAsyncScript(script, args)

browser.getAllCookies()

// browser.addCookie(cookie)

// browser.deleteAllCookies()

// browser.getNamedCookie(name)

// browser.deleteCookie(name)

// browser.releaseActions()

// browser.dismissAlert()

// browser.acceptAlert()

// browser.getAlertText()

// browser.sendAlertText(text)

 browser.takeScreenshot()

// browser.takeElementScreenshot(elementId, scroll)

//============================================================================================================

    })
})

