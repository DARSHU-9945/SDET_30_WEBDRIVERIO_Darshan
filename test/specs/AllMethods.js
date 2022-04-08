/*
toHaveUrl
browser.url('https://webdriver.io/')
await expect(browser).toHaveUrl('https://webdriver.io')


==========================================================================================================================

toHaveUrlContaining
browser.url('https://webdriver.io/')
await expect(browser).toHaveUrlContaining('webdriver')

==========================================================================================================================

toHaveTitle
browser.url('https://webdriver.io/')
await expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js')

==========================================================================================================================

toHaveTitleContaining
browser.url('https://webdriver.io/')
await expect(browser).toHaveTitleContaining('WebdriverIO')

==========================================================================================================================

toBeDisplayed
const elem = $('#someElem')
await expect(elem).toBeDisplayed()

==========================================================================================================================

toExist
const elem = $('#someElem')
await expect(elem).toExist()

==========================================================================================================================

toBePresent
const elem = $('#someElem')
await expect(elem).toBePresent()

==========================================================================================================================

toBeExisting
Same as toExist
const elem = $('#someElem')
await expect(elem).toBeExisting()

==========================================================================================================================

toBeFocused
Checks if element has focus. This assertion only works in a web context.
const elem = $('#someElem')
await expect(elem).toBeFocused()

==========================================================================================================================

toHaveAttribute
Checks if an element has a certain attribute with a specific value.
const myInput = $('input')
await expect(myInput).toHaveAttribute('class', 'form-control')

==========================================================================================================================

toHaveAttr
Same as toHaveAttribute.
const myInput = $('input')
await expect(myInput).toHaveAttr('class', 'form-control')

==========================================================================================================================

toHaveAttributeContaining
Checks if an element has a certain attribute that contains a value.
const myInput = $('input')
await expect(myInput).toHaveAttributeContaining('class', 'form')

==========================================================================================================================

toHaveAttrContaining
Same as toHaveAttributeContaining.

Usage
const myInput = $('input')
await expect(myInput).toHaveAttrContaining('class', 'form')

==========================================================================================================================

toHaveValue
Checks if an input element has a certain value.

Usage
const myInput = $('input')
await expect(myInput).toHaveValue('user', { ignoreCase: true })

==========================================================================================================================
toHaveValueContaining
Checks if an input element contains a certain value.

Usage
const myInput = $('input')
await expect(myInput).toHaveValueContaining('us')

==========================================================================================================================
toBeClickable
Checks if an element can be clicked by calling isClickable on the element.

Usage
const elem = $('#elem')
await expect(elem).toBeClickable()

==========================================================================================================================
toBeDisabled
Checks if an element is disabled by calling isEnabled on the element.

Usage
const elem = $('#elem')
await expect(elem).toBeDisabled()
// same as
await expect(elem).not.toBeEnabled()

==========================================================================================================================
toBeEnabled
Checks if an element is enabled by calling isEnabled on the element.

Usage
const elem = $('#elem')
await expect(elem).toBeEnabled()
// same as
await expect(elem).not.toBeDisabled()

==========================================================================================================================
toBeSelected
Checks if an element is enabled by calling isSelected on the element.

Usage
const elem = $('#elem')
await expect(elem).toBeSelected()

==========================================================================================================================
toBeChecked
Same as toBeSelected.

Usage
const elem = $('#elem')
await expect(elem).toBeChecked()

==========================================================================================================================
toHaveHref
Checks if link element has a specific link target.

Usage
const link = $('a')
await expect(link).toHaveHref('https://webdriver.io')

==========================================================================================================================
toHaveLink
Same as toHaveHref.

Usage
const link = $('a')
await expect(link).toHaveLink('https://webdriver.io')

==========================================================================================================================
toHaveHrefContaining
Checks if link element contains a specific link target.

Usage
const link = $('a')
await expect(link).toHaveHrefContaining('webdriver.io')

==========================================================================================================================
toHaveLinkContaining
Same as toHaveHrefContaining.

Usage
const link = $('a')
await expect(link).toHaveLinkContaining('webdriver.io')

==========================================================================================================================
toHaveId
Checks if element has a specific id attribute.

Usage
const elem = $('#elem')
await expect(elem).toHaveId('elem')
==========================================================================================================================
toHaveText
Checks if element has a specific text. Can also be called with an array as parameter in the case where the element can have different texts.

Usage
browser.url('https://webdriver.io/')
const elem = $('.tagline')
await expect(elem).toHaveText('Next-gen browser and mobile automation test framework for Node.js')
await expect(elem).toHaveText(['Next-gen browser and mobile automation test framework for Node.js', 'Adding helper functions'])

==========================================================================================================================
toHaveTextContaining
Checks if element contains a specific text. Can also be called with an array as parameter in the case where the element can have different texts.

Usage
browser.url('https://webdriver.io/')
const elem = $('.tagline')
await expect(elem).toHaveTextContaining('browser and mobile automation test framework')
await expect(elem).toHaveTextContaining(['browser and mobile automation test framework', 'helper functions'])


==========================================================================================================================
toBeDisplayedInViewport
Checks if an element is within the viewport by calling isDisplayedInViewport on the element.

Usage
const elem = $('#elem')
await expect(elem).toBeDisplayedInViewport()

==========================================================================================================================

getTimeouts
The Get Timeouts command gets timeout durations associated with the current session.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.getTimeouts()
Returns
<Object>
timeouts
: Object containing timeout durations for script, pageLoad and implicit timeouts.

==========================================================================================================================
setTimeouts
The Set Timeouts command sets timeout durations associated with the current session. The timeouts that can be controlled are listed in the table of session timeouts below.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.setTimeouts(implicit, pageLoad, script)
Parameters
Name	Type	Details
implicit

optional	number	integer in ms for session implicit wait timeout
pageLoad

optional	number	integer in ms for session page load timeout
script

optional	number	integer in ms for session script timeout
getUrl
The Get Current URL command returns the URL of the current top-level browsing context.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.getUrl()
Returns
<string>
url
: current top-level browsing context’s active document’s document URL
navigateTo
The navigateTo (go) command is used to cause the user agent to navigate the current top-level browsing context a new location.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.navigateTo(url)
Parameters
Name	Type	Details
url
string	string representing an absolute URL (beginning with http(s)), possibly including a fragment (#...), could also be a local scheme (about: etc)
Returns
<string>
url
: current document URL of the top-level browsing context.
back
The Back command causes the browser to traverse one step backward in the joint session history of the current top-level browsing context. This is equivalent to pressing the back button in the browser chrome or calling window.history.back.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.back()
forward
The Forward command causes the browser to traverse one step forwards in the joint session history of the current top-level browsing context.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.forward()
refresh
The Refresh command causes the browser to reload the page in current top-level browsing context.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.refresh()
getTitle
The Get Title command returns the document title of the current top-level browsing context, equivalent to calling document.title.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.getTitle()
Returns
<string>
title
: Returns a string which is the same as document.title of the current top-level browsing context.
getWindowHandle
The Get Window Handle command returns the window handle for the current top-level browsing context. It can be used as an argument to Switch To Window.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.getWindowHandle()
Returns
<string>
handle
: Returns a string which is the window handle for the current top-level browsing context.
closeWindow
The Close Window command closes the current top-level browsing context. Once done, if there are no more top-level browsing contexts open, the WebDriver session itself is closed.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.closeWindow()
switchToWindow
The Switch To Window command is used to select the current top-level browsing context for the current session, i.e. the one that will be used for processing commands.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.switchToWindow(handle)
Parameters
Name	Type	Details
handle
string	a string representing a window handle, should be one of the strings that was returned in a call to getWindowHandles
createWindow
Create a new top-level browsing context.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.createWindow(type)
Parameters
Name	Type	Details
type
string	Set to 'tab' if the newly created window shares an OS-level window with the current browsing context, or 'window' otherwise.
Returns
<Object>
window
: New window object containing 'handle' with the value of the handle and 'type' with the value of the created window type
getWindowHandles
The Get Window Handles command returns a list of window handles for every open top-level browsing context. The order in which the window handles are returned is arbitrary.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.getWindowHandles()
Returns
<String[]>
handles
: An array which is a list of window handles.
printPage
The Print Page command renders the document to a paginated PDF document.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.printPage(orientation, scale, background, width, height, top, bottom, left, right, shrinkToFit, pageRanges)
Parameters
Name	Type	Details
orientation

optional	string	page orientation. Default: portrait
scale

optional	number	page scale. Default: 1
background

optional	boolean	page background. Default: false
width

optional	number	page width in cm. Default: 21.59 from page
height

optional	number	page height in cm. Default: 27.94 from page
top

optional	number	page margin in cm from top margin. Default: 1
bottom

optional	number	page margin in cm from bottom margin. Default: 1
left

optional	number	page margin in cm from left margin. Default: 1
right

optional	number	page margin in cm from right margin. Default: 1
shrinkToFit

optional	boolean	shrink pdf to fit in page. Default: true
pageRanges

optional	object[]	page ranges. Default []
Returns
<string>
pdf
: The base64-encoded PDF representation of the paginated document.
switchToFrame
The Switch To Frame command is used to select the current top-level browsing context or a child browsing context of the current browsing context to use as the current browsing context for subsequent commands.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.switchToFrame(id)
Parameters
Name	Type	Details
id
number, object, null	one of three possible types: null: this represents the top-level browsing context (i.e., not an iframe), a Number, representing the index of the window object corresponding to a frame, an Element object received using findElement.
switchToParentFrame
The Switch to Parent Frame command sets the current browsing context for future commands to the parent of the current browsing context.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.switchToParentFrame()
getWindowRect
The Get Window Rect command returns the size and position on the screen of the operating system window corresponding to the current top-level browsing context.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.getWindowRect()
Returns
<Object>
windowRect
: A JSON representation of a "window rect" object. This has 4 properties: x, y, width and height.
setWindowRect
The Set Window Rect command alters the size and the position of the operating system window corresponding to the current top-level browsing context.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.setWindowRect(x, y, width, height)
Parameters
Name	Type	Details
x
number, null	the screenX attribute of the window object
y
number, null	the screenY attribute of the window object
width
number, null	the width of the outer dimensions of the top-level browsing context, including browser chrome etc...
height
number, null	the height of the outer dimensions of the top-level browsing context, including browser chrome etc...
Returns
<Object>
windowRect
: A JSON representation of a "window rect" object based on the new window state.
maximizeWindow
The Maximize Window command invokes the window manager-specific "maximize" operation, if any, on the window containing the current top-level browsing context. This typically increases the window to the maximum available size without going full-screen.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.maximizeWindow()
Returns
<Object>
windowRect
: A JSON representation of a "window rect" object based on the new window state.
minimizeWindow
The Minimize Window command invokes the window manager-specific "minimize" operation, if any, on the window containing the current top-level browsing context. This typically hides the window in the system tray.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.minimizeWindow()
Returns
<Object>
windowRect
: A JSON representation of a "window rect" object of the (new) current top-level browsing context.
fullscreenWindow
The Fullscreen Window command invokes the window manager-specific “full screen” operation, if any, on the window containing the current top-level browsing context. This typically increases the window to the size of the physical display and can hide browser chrome elements such as toolbars.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.fullscreenWindow()
Returns
<Object>
windowRect
: A JSON representation of a "window rect" object of the (new) current top-level browsing context.
findElement
The Find Element command is used to find an element in the current browsing context that can be used for future commands. This command returns JSON representation of the element that can be passed to $ command to transform the reference to an extended WebdriverIO element.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.findElement(using, value)
Parameters
Name	Type	Details
using
string	a valid element location strategy
value
string	the actual selector that will be used to find an element
Example
Asynchronous Mode
Synchronous Mode
// get element
const elementRef = await browser.findElement('xpath', '//div')
const element = await $(elementRef)
await element.click()
Returns
<object>
element
: A JSON representation of an element object, e.g. { &#39;element-6066-11e4-a52e-4f735466cecf&#39;: &#39;ELEMENT_1&#39; }.
findElementFromShadowRoot
The Find Element From Shadow Root command is used to find an element within the shadow root of an element that can be used for future commands. This command returns JSON representation of the element that can be passed to $ command to transform the reference to an extended WebdriverIO element.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.findElementFromShadowRoot(shadowId, using, value)
Parameters
Name	Type	Details
shadowId
String	element id of a shadow root element
using
string	a valid element location strategy
value
string	the actual selector that will be used to find an element
Example
Asynchronous Mode
Synchronous Mode
// get shadow root
const element = await browser.findElement('xpath', '//div')
const shadowRoot = await browser.getElementShadowRoot(
    element['element-6066-11e4-a52e-4f735466cecf']
)
// fetch element within that shadow root
const elementRef = await browser.findElementFromShadowRoot(
    shadowRoot['shadow-6066-11e4-a52e-4f735466cecf'],
    'xpath',
    '//div'
)
Returns
<object>
element
: A JSON representation of an element shadow object, e.g. { &#39;element-6066-11e4-a52e-4f735466cecf&#39;: &#39;ELEMENT_1&#39; }.
findElements
The Find Elements command is used to find elements in the current browsing context that can be used for future commands. This command returns array of JSON representation of the elements that can be passed to $ command to transform the reference to an extended WebdriverIO element (See findElement).

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.findElements(using, value)
Parameters
Name	Type	Details
using
string	a valid element location strategy
value
string	the actual selector that will be used to find an element
Returns
<object[]>
elements
: A (possibly empty) JSON list of representations of an element object, e.g. [{ &#39;element-6066-11e4-a52e-4f735466cecf&#39;: &#39;ELEMENT_1&#39; }].
findElementsFromShadowRoot
The Find Elements command is used to find elements within the shadow root of an element that can be used for future commands. This command returns array of JSON representation of the elements that can be passed to $ command to transform the reference to an extended WebdriverIO element (See findElement).

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.findElementsFromShadowRoot(shadowId, using, value)
Parameters
Name	Type	Details
shadowId
String	element id of a shadow root element
using
string	a valid element location strategy
value
string	the actual selector that will be used to find an element
Example
Asynchronous Mode
Synchronous Mode
// get shadow root
const element = await browser.findElement('xpath', '//div')
const shadowRoot = await browser.getElementShadowRoot(
    element['element-6066-11e4-a52e-4f735466cecf']
)
// fetch elements within that shadow root
const elementRef = await browser.findElementsFromShadowRoot(
    shadowRoot['shadow-6066-11e4-a52e-4f735466cecf'],
    'xpath',
    '//div'
)
Returns
<object[]>
elements
: A (possibly empty) JSON list of representations of an element object, e.g. { &#39;element-6066-11e4-a52e-4f735466cecf&#39;: &#39;ELEMENT_1&#39; }.
findElementFromElement
The Find Element From Element command is used to find an element from a web element in the current browsing context that can be used for future commands. This command returns JSON representation of the element that can be passed to $ command to transform the reference to an extended WebdriverIO element (See findElement).

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.findElementFromElement(elementId, using, value)
Parameters
Name	Type	Details
elementId
String	the id of an element returned in a previous call to Find Element(s)
using
string	a valid element location strategy
value
string	the actual selector that will be used to find an element
Returns
<object>
element
: A JSON representation of an element object, e.g. { &#39;element-6066-11e4-a52e-4f735466cecf&#39;: &#39;ELEMENT_1&#39; }.
findElementsFromElement
The Find Elements From Element command is used to find elements from a web element in the current browsing context that can be used for future commands. This command returns array of JSON representation of the elements that can be passed to $ command to transform the reference to an extended WebdriverIO element (See findElement).

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.findElementsFromElement(elementId, using, value)
Parameters
Name	Type	Details
elementId
String	the id of an element returned in a previous call to Find Element(s)
using
string	a valid element location strategy
value
string	the actual selector that will be used to find an element
Returns
<object[]>
elements
: A (possibly empty) JSON list of representations of an element object, e.g. [{ &#39;element-6066-11e4-a52e-4f735466cecf&#39;: &#39;ELEMENT_1&#39; }].
getElementShadowRoot
Get the shadow root object of an element. The result object can be used to fetch elements within this shadow root using e.g. findElementFromShadowRoots or findElementsFromShadowRoots.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.getElementShadowRoot(elementId)
Parameters
Name	Type	Details
elementId
String	the id of an element returned in a previous call to Find Element(s)
Returns
<string>
element
: A JSON representation of an element shadow root, e.g. { &#39;shadow-6066-11e4-a52e-4f735466cecf&#39;: &#39;ELEMENT_1&#39; }.
getActiveElement
Get Active Element returns the active element of the current browsing context’s document element. This command returns JSON representation of the element that can be passed to $ command to transform the reference to an extended WebdriverIO element (See findElement).

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.getActiveElement()
Returns
<string>
element
: A JSON representation of an element object, e.g. { &#39;element-6066-11e4-a52e-4f735466cecf&#39;: &#39;ELEMENT_1&#39; }.
isElementSelected
Is Element Selected determines if the referenced element is selected or not. This operation only makes sense on input elements of the Checkbox- and Radio Button states, or option elements.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.isElementSelected(elementId)
Parameters
Name	Type	Details
elementId
String	the id of an element returned in a previous call to Find Element(s)
Returns
<Boolean>
isSelected
: true or false based on the selected state.
isElementDisplayed
Is Element Displayed determines the visibility of an element which is guided by what is perceptually visible to the human eye. In this context, an element's displayedness does not relate to the visibility or display style properties.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.isElementDisplayed(elementId)
Parameters
Name	Type	Details
elementId
String	the id of an element returned in a previous call to Find Element(s)
Returns
<Boolean>
isDisplayed
: true or false based on the visible state.
getElementAttribute
The Get Element Attribute command will return the attribute of a web element.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.getElementAttribute(elementId, name)
Parameters
Name	Type	Details
elementId
String	the id of an element returned in a previous call to Find Element(s)
name
String	name of the attribute value to retrieve
Returns
<string>
attribute
: The named attribute of the element.
getElementProperty
The Get Element Property command will return the result of getting a property of an element.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.getElementProperty(elementId, name)
Parameters
Name	Type	Details
elementId
String	the id of an element returned in a previous call to Find Element(s)
name
String	name of the attribute property to retrieve
Returns
<string>
property
: The named property of the element, accessed by calling GetOwnProperty on the element object.
getElementCSSValue
The Get Element CSS Value command retrieves the computed value of the given CSS property of the given web element.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.getElementCSSValue(elementId, propertyName)
Parameters
Name	Type	Details
elementId
String	the id of an element returned in a previous call to Find Element(s)
propertyName
String	name of the CSS property to retrieve
Returns
<string>
cssValue
: The computed value of the parameter corresponding to property name from the element's style declarations (unless the document type is xml, in which case the return value is simply the empty string).
getElementText
The Get Element Text command intends to return an element’s text "as rendered". An element's rendered text is also used for locating a elements by their link text and partial link text.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.getElementText(elementId)
Parameters
Name	Type	Details
elementId
String	the id of an element returned in a previous call to Find Element(s)
Returns
<string>
text
: The visible text of the element (including child elements), following the algorithm defined in the Selenium Atoms for bot.dom.getVisibleText.
getElementTagName
The Get Element Tag Name command returns the qualified element name of the given web element.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.getElementTagName(elementId)
Parameters
Name	Type	Details
elementId
String	the id of an element returned in a previous call to Find Element(s)
Returns
<string>
text
: The tagName attribute of the element.
getElementRect
The Get Element Rect command returns the dimensions and coordinates of the given web element.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.getElementRect(elementId)
Parameters
Name	Type	Details
elementId
String	the id of an element returned in a previous call to Find Element(s)
Returns
<Object>
elementRect
: A JSON object representing the position and bounding rect of the element.
isElementEnabled
Is Element Enabled determines if the referenced element is enabled or not. This operation only makes sense on form controls.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.isElementEnabled(elementId)
Parameters
Name	Type	Details
elementId
String	the id of an element returned in a previous call to Find Element(s)
Returns
<Boolean>
isEnabled
: If the element is in an xml document, or is a disabled form control: false, otherwise, true.
elementClick
The Element Click command scrolls into view the element if it is not already pointer-interactable, and clicks its in-view center point. If the element's center point is obscured by another element, an element click intercepted error is returned. If the element is outside the viewport, an element not interactable error is returned.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.elementClick(elementId)
Parameters
Name	Type	Details
elementId
String	the id of an element returned in a previous call to Find Element(s)
elementClear
The Element Clear command scrolls into view an editable or resettable element and then attempts to clear its selected files or text content.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.elementClear(elementId)
Parameters
Name	Type	Details
elementId
String	the id of an element returned in a previous call to Find Element(s)
elementSendKeys
The Element Send Keys command scrolls into view the form control element and then sends the provided keys to the element. In case the element is not keyboard-interactable, an element not interactable error is returned.

The key input state used for input may be cleared mid-way through "typing" by sending the null key, which is U+E000 (NULL).

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.elementSendKeys(elementId, text)
Parameters
Name	Type	Details
elementId
String	the id of an element returned in a previous call to Find Element(s)
text
string	string to send as keystrokes to the element
getPageSource
The Get Page Source command returns a string serialization of the DOM of the current browsing context active document.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.getPageSource()
Returns
<string>
pageSource
: the DOM of the current browsing context active document

executeScript
The Execute Script command executes a JavaScript function in the context of the current browsing context and returns the return value of the function.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.executeScript(script, args)
Parameters
Name	Type	Details
script
string	a string, the Javascript function body you want executed
args
string, object, number, boolean, undefined[]	an array of JSON values which will be deserialized and passed as arguments to your function
Returns
<*>
result
: Either the return value of your script, the fulfillment of the Promise returned by your script, or the error which was the reason for your script's returned Promise's rejection.
executeAsyncScript
The Execute Async Script command causes JavaScript to execute as an anonymous function. Unlike the Execute Script command, the result of the function is ignored. Instead an additional argument is provided as the final argument to the function. This is a function that, when called, returns its first argument as the response.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.executeAsyncScript(script, args)
Parameters
Name	Type	Details
script
string	a string, the Javascript function body you want executed
args
string, object, number, boolean, undefined[]	an array of JSON values which will be deserialized and passed as arguments to your function
Returns
<*>
result
: Either the return value of your script, the fulfillment of the Promise returned by your script, or the error which was the reason for your script's returned Promise's rejection.
getAllCookies
The Get All Cookies command returns all cookies associated with the address of the current browsing context’s active document.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.getAllCookies()
Returns
<Object[]>
cookies
: A list of serialized cookies. Each serialized cookie has a number of optional fields which may or may not be returned in addition to name and value.
addCookie
The Add Cookie command adds a single cookie to the cookie store associated with the active document's address.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.addCookie(cookie)
Parameters
Name	Type	Details
cookie
object	A JSON object representing a cookie. It must have at least the name and value fields and could have more, including expiry-time and so on
deleteAllCookies
The Delete All Cookies command allows deletion of all cookies associated with the active document's address.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.deleteAllCookies()
getNamedCookie
The Get Named Cookie command returns the cookie with the requested name from the associated cookies in the cookie store of the current browsing context's active document. If no cookie is found, a no such cookie error is returned.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.getNamedCookie(name)
Parameters
Name	Type	Details
name
String	name of the cookie to retrieve
Returns
<Object>
cookie
: A serialized cookie, with name and value fields. There are a number of optional fields like path, domain, and expiry-time which may also be present.
deleteCookie
The Delete Cookie command allows you to delete either a single cookie by parameter name, or all the cookies associated with the active document's address if name is undefined.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.deleteCookie(name)
Parameters
Name	Type	Details
name
String	name of the cookie to delete
performActions
The Perform Actions command is used to execute complex user actions. See spec for more details.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.performActions(actions)
Parameters
Name	Type	Details
actions
object[]	a list of objects, each of which represents an input source and its associated actions
releaseActions
The Release Actions command is used to release all the keys and pointer buttons that are currently depressed. This causes events to be fired as if the state was released by an explicit series of actions. It also clears all the internal state of the virtual devices.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.releaseActions()
dismissAlert
The Dismiss Alert command dismisses a simple dialog if present, otherwise error. A request to dismiss an alert user prompt, which may not necessarily have a dismiss button, has the same effect as accepting it.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.dismissAlert()
acceptAlert
The Accept Alert command accepts a simple dialog if present, otherwise error.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.acceptAlert()
getAlertText
The Get Alert Text command returns the message of the current user prompt. If there is no current user prompt, it returns an error.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.getAlertText()
Returns
<string>
alertText
: The message of the user prompt.
sendAlertText
The Send Alert Text command sets the text field of a window.prompt user prompt to the given value.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.sendAlertText(text)
Parameters
Name	Type	Details
text
string	string to set the prompt to
takeScreenshot
The Take Screenshot command takes a screenshot of the top-level browsing context's viewport.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.takeScreenshot()
Returns
<string>
screenshot
: The base64-encoded PNG image data comprising the screenshot of the initial viewport.
takeElementScreenshot
The Take Element Screenshot command takes a screenshot of the visible region encompassed by the bounding rectangle of an element.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.takeElementScreenshot(elementId, scroll)
Parameters
Name	Type	Details
elementId
String	the id of an element returned in a previous call to Find Element(s)
scroll

optional	boolean	scroll into view the element. Default: true
Returns
<string>
screenshot
: The base64-encoded PNG image data comprising the screenshot of the visible region of an element’s bounding rectangle after it has been scrolled into view.
getElementComputedRole
Get the computed WAI-ARIA role of an element.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.getElementComputedRole(elementId)
Parameters
Name	Type	Details
elementId
String	the id of an element returned in a previous call to Find Element(s)
Returns
<string>
role
: The result of computing the WAI-ARIA role of element.
getElementComputedLabel
Get the accessible name of the element.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.getElementComputedLabel(elementId)
Parameters
Name	Type	Details
elementId
String	the id of an element returned in a previous call to Find Element(s)
Returns
<string>
label
: The result of a Accessible Name and Description Computation for the Accessible Name of the element.
setPermissions
Simulates user modification of a PermissionDescriptor's permission state. Note: this feature has not landed in all browsers yet.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.setPermissions(descriptor, state, oneRealm)
Parameters
Name	Type	Details
descriptor
object	Each powerful feature has one or more aspects that websites can request permission to access. To describe these aspects, each feature defines a subtype of PermissionDescriptor to be its permission descriptor type. Note: this feature has not landed in all browsers yet.
state
string	Determines whether permission is granted, denied or prompted.
oneRealm

optional	boolean	Whether or not to apply permissions to all execution contexts.
Example
Asynchronous Mode
Synchronous Mode
// set midi permissions
browser.setPermissions({
  name: 'midi',
  sysex; true
, 'granted'); // can be also 'denied' or 'prompt'
generateTestReport
Generates a report for testing. Extension for Reporting API. Note: this feature has not landed in all browsers yet.

WebDriver Protocol command. More details can be found in the official protocol docs.

Usage
browser.generateTestReport(message, group)
Parameters
Name         	 Type	        Details
message         string	        Message to be displayed in the report.
group           optional	    string	Specifies the endpoint group to deliver the report to.

newSession
Create a new session. The server should attempt to create a session that most closely matches the desired and required capabilities. Required capabilities have higher priority than desired capabilities and must be set for the session to be created.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.newSession(desiredCapabilities, requiredCapabilities)
Parameters
Name	Type	Details
desiredCapabilities
object	An object describing the session's desired capabilities.
requiredCapabilities

optional	object	An object describing the session's required capabilities (Optional).
Returns
<Object>
capabilities
: An object describing the session's capabilities.
getSessions
Returns a list of the currently active sessions. Each session will be returned as a list of JSON objects containing id and capabilities.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.getSessions()
Returns
<Object[]>
capabilities
: A list of the currently active sessions.
getSession
Retrieve the capabilities of the specified session.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.getSession()
Returns
<Object>
capabilities
: An object describing the session's capabilities.
deleteSession
Delete the session.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.deleteSession()
setTimeouts
Configure the amount of time that a particular type of operation can execute for before they are aborted and a |Timeout| error is returned to the client.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.setTimeouts(type, ms)
Parameters
Name	Type	Details
type
string	The type of operation to set the timeout for. Valid values are: "script" for script timeouts, "implicit" for modifying the implicit wait timeout and "page load" for setting a page load timeout.
ms
number	The amount of time, in milliseconds, that time-limited commands are permitted to run
setAsyncTimeout
Set the amount of time, in milliseconds, that asynchronous scripts executed by /session/:sessionId/execute_async are permitted to run before they are aborted and a Timeout error is returned to the client.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.setAsyncTimeout(ms)
Parameters
Name	Type	Details
ms
number	The amount of time, in milliseconds, that time-limited commands are permitted to run
setImplicitTimeout
Set the amount of time the driver should wait when searching for elements. When searching for a single element, the driver should poll the page until an element is found or the timeout expires, whichever occurs first. When searching for multiple elements, the driver should poll the page until at least one element is found or the timeout expires, at which point it should return an empty list. If this command is never sent, the driver should default to an implicit wait of 0ms.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.setImplicitTimeout(ms)
Parameters
Name	Type	Details
ms
number	The amount of time, in milliseconds, to wait on an element.
getUrl
Retrieve the URL of the current page.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.getUrl()
Returns
<String>
url
: The current URL.
navigateTo
Navigate to a new URL.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.navigateTo(url)
Parameters
Name	Type	Details
url
string	The URL to navigate to.
back
Navigate backwards in the browser history, if possible.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.back()
forward
Navigate forwards in the browser history, if possible.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.forward()
refresh
Refresh the current page.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.refresh()
getTitle
Get the current page title.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.getTitle()
Returns
<String>
title
: The current page title.
getWindowHandle
Retrieve the current window handle.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.getWindowHandle()
Returns
<String>
windowHandle
: The current window handle.
getWindowHandles
Retrieve the list of all window handles available to the session.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.getWindowHandles()
Returns
<String[]>
windowHandles
: A list of window handles.
closeWindow
Close the current window.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.closeWindow()
switchToWindow
Change focus to another window. The window to change focus to may be specified by its server assigned window handle, or by the value of its name attribute.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.switchToWindow(name)
Parameters
Name	Type	Details
name
string	The window to change focus to
switchToFrame
Change focus to another frame on the page. If the frame id is null, the server should switch to the page's default content.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.switchToFrame(id)
Parameters
Name	Type	Details
id
string, number, object, null	Identifier for the frame to change focus to
switchToParentFrame
Change focus to the parent context. If the current context is the top level browsing context, the context remains unchanged.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.switchToParentFrame()
getWindowPosition
Get the position of the current focussed window.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.getWindowPosition()
Returns
<Object>
positon
: The X and Y coordinates for the window, relative to the upper left corner of the screen.
setWindowPosition
Change the position of the current focussed window.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.setWindowPosition(x, y)
Parameters
Name	Type	Details
x
number	The X coordinate to position the window at, relative to the upper left corner of the screen.
y
number	The Y coordinate to position the window at, relative to the upper left corner of the screen.
Returns
<Object>
positon
: The X and Y coordinates for the window, relative to the upper left corner of the screen.
_getWindowSize
Get the size of the current focused window.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser._getWindowSize()
Returns
<Object>
size
: The size of the window.
_setWindowSize
Change the size of the current focused window.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser._setWindowSize(width, height)
Parameters
Name	Type	Details
width
number	the new window width
height
number	the new window height
maximizeWindow
Maximize the current focused window if not already maximized.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.maximizeWindow()
findElement
Search for an element on the page, starting from the document root. The located element will be returned as a WebElement JSON object. The table below lists the locator strategies that each server should support. Each locator must return the first matching element located in the DOM.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.findElement(using, value)
Parameters
Name	Type	Details
using
string	the locator strategy to use
value
string	the search target
Returns
<object>
ELEMENT
: A WebElement JSON object for the located element.
findElements
Search for multiple elements on the page, starting from the document root. The located elements will be returned as a WebElement JSON objects. The table below lists the locator strategies that each server should support. Elements should be returned in the order located in the DOM.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.findElements(using, value)
Parameters
Name	Type	Details
using
string	the locator strategy to use
value
string	the search target
Returns
<object[]>
ELEMENTS
: A list of WebElement JSON objects for the located elements.
findElementFromElement
Search for an element on the page, starting from the identified element. The located element will be returned as a WebElement JSON object. The table below lists the locator strategies that each server should support. Each locator must return the first matching element located in the DOM.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.findElementFromElement(elementId, using, value)
Parameters
Name	Type	Details
elementId
String	ID of the element to route the command to
using
string	the locator strategy to use
value
string	the search target
Returns
<object>
ELEMENT
: A WebElement JSON object for the located element.
findElementsFromElement
Search for multiple elements on the page, starting from the identified element. The located elements will be returned as a WebElement JSON objects. The table below lists the locator strategies that each server should support. Elements should be returned in the order located in the DOM.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.findElementsFromElement(elementId, using, value)
Parameters
Name	Type	Details
elementId
String	ID of the element to route the command to
using
string	the locator strategy to use
value
string	the search target
Returns
<object[]>
ELEMENTS
: A list of WebElement JSON objects for the located elements.
getActiveElement
Get the element on the page that currently has focus. The element will be returned as a WebElement JSON object.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.getActiveElement()
Returns
<String>
ELEMENT
: A WebElement JSON object for the active element.
isElementSelected
Determine if an OPTION element, or an INPUT element of type checkbox or radiobutton is currently selected.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.isElementSelected(elementId)
Parameters
Name	Type	Details
elementId
String	ID of the element to route the command to
Returns
<Boolean>
isSelected
: Whether the element is selected.
isElementDisplayed
Determine if an element is currently displayed.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.isElementDisplayed(elementId)
Parameters
Name	Type	Details
elementId
String	ID of the element to route the command to
Returns
<Boolean>
isDisplayed
: Whether the element is displayed.
getElementAttribute
Get the value of an element's attribute.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.getElementAttribute(elementId, name)
Parameters
Name	Type	Details
elementId
String	ID of the element to route the command to
name
String	name of the attribute value to retrieve
Returns
<String|Null>
attribute
: The value of the attribute, or null if it is not set on the element.
getElementCSSValue
Query the value of an element's computed CSS property. The CSS property to query should be specified using the CSS property name, not the JavaScript property name (e.g. background-color instead of backgroundColor).

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.getElementCSSValue(elementId, propertyName)
Parameters
Name	Type	Details
elementId
String	ID of the element to route the command to
propertyName
String	name of the CSS property to retrieve
Returns
<String>
propertyName
: The value of the specified CSS property.
getElementText
Returns the visible text for the element.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.getElementText(elementId)
Parameters
Name	Type	Details
elementId
String	ID of the element to route the command to
Returns
<String>
text
: The visible text of the element.
getElementTagName
Query for an element's tag name.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.getElementTagName(elementId)
Parameters
Name	Type	Details
elementId
String	ID of the element to route the command to
Returns
<String>
tagName
: The element's tag name, as a lowercase string.
getElementLocation
Determine an element's location on the page. The point (0, 0) refers to the upper-left corner of the page. The element's coordinates are returned as a JSON object with x and y properties.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.getElementLocation(elementId)
Parameters
Name	Type	Details
elementId
String	ID of the element to route the command to
Returns
<Object>
location
: The X and Y coordinates for the element on the page.
getElementLocationInView
Determine an element's location on the screen once it has been scrolled into view.

Note: This is considered an internal command and should only be used to determine an element's location for correctly generating native events.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.getElementLocationInView(elementId)
Parameters
Name	Type	Details
elementId
String	ID of the element to route the command to
Returns
<Object>
location
: The X and Y coordinates for the element on the page.
getElementSize
Determine an element's size in pixels. The size will be returned as a JSON object with width and height properties.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.getElementSize(elementId)
Parameters
Name	Type	Details
elementId
String	ID of the element to route the command to
Returns
<Object>
size
: The width and height of the element, in pixels.
isElementEnabled
Determine if an element is currently enabled.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.isElementEnabled(elementId)
Parameters
Name	Type	Details
elementId
String	ID of the element to route the command to
Returns
<Boolean>
isEnabled
: Whether the element is enabled.
elementClick
Click any mouse button (at the coordinates set by the last moveto command). Note that calling this command after calling buttondown and before calling button up (or any out-of-order interactions sequence) will yield undefined behaviour).

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.elementClick(elementId)
Parameters
Name	Type	Details
elementId
String	ID of the element to route the command to
elementEquals
Compare elements with each other.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.elementEquals(elementId, otherElementId)
Parameters
Name	Type	Details
elementId
String	ID of the element to route the command to
otherElementId
String	ID of the element to compare against
Returns
<Boolean>
isEqual
: Whether the two IDs refer to the same element.
elementSubmit
JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.elementSubmit(elementId)
Parameters
Name	Type	Details
elementId
String	ID of the form element to be submitted
elementClear
JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.elementClear(elementId)
Parameters
Name	Type	Details
elementId
String	ID of the element to route the command to
elementSendKeys
JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.elementSendKeys(elementId, value)
Parameters
Name	Type	Details
elementId
String	ID of the element to route the command to
value
string[]	The sequence of keys to type. An array must be provided.
sendKeys
JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.sendKeys(value)
Parameters
Name	Type	Details
value
string[]	The sequence of keys to type. An array must be provided.
getPageSource
JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.getPageSource()
Returns
<String>
source
: The current page source.
executeScript
JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.executeScript(script, args)
Parameters
Name	Type	Details
script
string	the script to execute
args

optional	string, object, number, boolean, undefined[]	the script arguments
Returns
<*>
result
: The script result.
executeAsyncScript
JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.executeAsyncScript(script, args)
Parameters
Name	Type	Details
script
string	the script to execute
args
string, object, number, boolean, undefined[]	the script arguments
Returns
<*>
result
: The script result.
getAllCookies
JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.getAllCookies()
Returns
<Object[]>
cookies
: A list of cookies.
addCookie
JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.addCookie(cookie)
Parameters
Name	Type	Details
cookie
object	A JSON object representing a cookie. It must have at least the name and value fields and could have more, including expiry-time and so on
deleteAllCookies
JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.deleteAllCookies()
deleteCookie
JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.deleteCookie(name)
Parameters
Name	Type	Details
name
String	name of the cookie to retrieve
dismissAlert
JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.dismissAlert()
acceptAlert
JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.acceptAlert()
getAlertText
JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.getAlertText()
Returns
<String>
alertText
: The text of the currently displayed alert.
sendAlertText
JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.sendAlertText(text)
Parameters
Name	Type	Details
text
string	keystrokes to send to the prompt() dialog
takeScreenshot
JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.takeScreenshot()
Returns
<String>
screenshot
: screenshot as a base64 encoded PNG
getAvailableEngines
JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.getAvailableEngines()
Returns
<String[]>
engines
: A list of available engines
getActiveEngine
JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.getActiveEngine()
Returns
<String>
engine
: The name of the active IME engine
isIMEActivated
JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.isIMEActivated()
Returns
<Boolean>
isActive
: true if IME input is available and currently active, false otherwise
deactivateIME
JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.deactivateIME()
activateIME
JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.activateIME(engine)
Parameters
Name	Type	Details
engine
string	name of the engine to activate
getOrientation
JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.getOrientation()
Returns
<String>
orientation
: The current browser orientation corresponding to a value defined in ScreenOrientation: {LANDSCAPE|PORTRAIT}.
setOrientation
JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.setOrientation(orientation)
Parameters
Name	Type	Details
orientation
string	the new browser orientation as defined in ScreenOrientation: {LANDSCAPE
moveToElement
JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.moveToElement(element, xoffset, yoffset)
Parameters
Name	Type	Details
element

optional	string, null	opaque ID assigned to the element to move to, as described in the WebElement JSON Object, if not specified or is null, the offset is relative to current position of the mouse
xoffset

optional	number	x offset to move to, relative to the top-left corner of the element, if not specified, the mouse will move to the middle of the element
yoffset

optional	number	y offset to move to, relative to the top-left corner of the element, if not specified, the mouse will move to the middle of the element
buttonDown
Click and hold the left mouse button (at the coordinates set by the last moveto command). Note that the next mouse-related command that should follow is buttonup . Any other mouse command (such as click or another call to buttondown) will yield undefined behaviour.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.buttonDown(button)
Parameters
Name	Type	Details
button

optional	number	which button, enum: LEFT = 0, MIDDLE = 1 , RIGHT = 2, defaults to the left mouse button if not specified
buttonUp
Releases the mouse button previously held (where the mouse is currently at). Must be called once for every buttondown command issued. See the note in click and buttondown about implications of out-of-order commands.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.buttonUp(button)
Parameters
Name	Type	Details
button

optional	number	which button, enum: LEFT = 0, MIDDLE = 1 , RIGHT = 2, defaults to the left mouse button if not specified
positionClick
Clicks at the current mouse coordinates (set by moveto).

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.positionClick(button)
Parameters
Name	Type	Details
button

optional	number	which button, enum: LEFT = 0, RIGHT = 2, defaults to the left mouse button if not specified
positionDoubleClick
Double-clicks at the current mouse coordinates (set by moveto).

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.positionDoubleClick()
touchClick
Single tap on the touch enabled device.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.touchClick(element)
Parameters
Name	Type	Details
element
string	ID of the element to single tap on.
touchDown
Finger down on the screen.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.touchDown(x, y)
Parameters
Name	Type	Details
x
number	x coordinate on the screen
y
number	y coordinate on the screen
touchUp
Finger up on the screen.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.touchUp(x, y)
Parameters
Name	Type	Details
x
number	x coordinate on the screen
y
number	y coordinate on the screen
touchMove
Finger move on the screen.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.touchMove(x, y)
Parameters
Name	Type	Details
x
number	x coordinate on the screen
y
number	y coordinate on the screen
touchScroll
Finger move on the screen.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.touchScroll(xoffset, yoffset, element)
Parameters
Name	Type	Details
xoffset
number	the x offset in pixels to scroll by
yoffset
number	the y offset in pixels to scroll by
element

optional	string	ID of the element where the scroll starts
touchDoubleClick
Double tap on the touch screen using finger motion events.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.touchDoubleClick(element)
Parameters
Name	Type	Details
element
string	ID of the element to double tap on
touchLongClick
Long press on the touch screen using finger motion events.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.touchLongClick(element)
Parameters
Name	Type	Details
element
string	ID of the element to long press on
touchFlick
Flick on the touch screen using finger motion events. This flickcommand starts at a particulat screen location.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.touchFlick(xoffset, yoffset, element, speed, xspeed, yspeed)
Parameters
Name	Type	Details
xoffset

optional	number	the x offset in pixels to flick by
yoffset

optional	number	the y offset in pixels to flick by
element

optional	string	ID of the element where the flick starts
speed

optional	number	the speed in pixels per seconds
xspeed

optional	number	the x speed in pixels per second
yspeed

optional	number	the y speed in pixels per second
getGeoLocation
Get the current geo location.

JSON Wire Protocol command. More details can be found in the official protocol docs.

Usage
browser.getGeoLocation()
Returns
<Object>
location
: The current geo location.
*/