/* wdio.conf.js
    exports.config = {  maxInstances: 10,
    
    capabilities: [ { browserName: 'firefox'}, {browserName: 'chrome'}  ], }*/

//===============================================================================================================
/*specs: [
   
    // './test/specs/demoTestScript.js'
    "./test/specs/demo1.js","./test/specs/demo2.js",
],

suites: {

        smokeSuite: ["./test/specs/demo3.js","./test/specs/launchBrowser.js"],
        regressionSuite: ["./test/specs/demo1.js","./test/specs/demo2.js","./test/Tests/CreateContactTest.js"]
},*/

/*wdio wdio.conf.js --suite smokeSuite

wdio wdio.conf.js --suite smokeSuite --suite regressionSuite*/


//================================================================================================================
/*
"specs": [
    [
        "./test/specs/test_login.js",
        "./test/specs/test_product_order.js",
        "./test/specs/test_checkout.js"
    ],
    "./test/specs/test_b*.js",
],
wdio wdio.conf.js --spec ./test/specs/e2e/login.js
//=================================================================================================================

"suites": {
    end2end: [
        [
            "./test/specs/test_login.js",
            "./test/specs/test_product_order.js",
            "./test/specs/test_checkout.js"
        ]
    ],
    allb: ["./test/specs/test_b*.js"]
},
wdio wdio.conf.js --spec ./test/specs/signup.js --spec ./test/specs/forgot-password.js

wdio wdio.conf.js --spec dialog

wdio wdio.conf.js --exclude ./test/specs/e2e/login.js

wdio wdio.conf.js --exclude ./test/specs/signup.js --exclude ./test/specs/forgot-password.js

wdio wdio.conf.js --suite login --exclude ./test/specs/e2e/login.js

wdio wdio.conf.js --suite login --spec ./test/specs/signup.js*/
//=================================================================================================================