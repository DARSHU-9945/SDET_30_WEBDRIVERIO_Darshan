/*describe('dropdown', () => {
    it('getting all text from dropdown ', async () => {

        let elementarray=await $$("//select[@id='qccombo']//option")
        let textArray=[]
        for (const element of elementarray) {
            let text=await element.getText()
            textArray.push(text)
            console.log(text);
            console.log(textArray);


            /*[
[0-0]   'Quick Create...',  'New Organization',
[0-0]   'New Asset',        'New To Do',
[0-0]   'New Campaign',     'New Comment',
[0-0]   'New Contact',      'New Document',
[0-0]   'New Event',        'New Ticket',
[0-0]   'New Lead',         'New Opportunity',
[0-0]   'New PriceBook',    'New Product',
[0-0]   'New Project',      'New Project Milestone',
[0-0]   'New Project Task', 'New Service Contract',
[0-0]   'New Service',      'New Vendor'
[0-0] ]
        }
    });
    
});*/

/*describe('dropdown', () => {
    it('getting all text from dropdown ', async () => {

        let elementarray=await $$("//select[@id='qccombo']//option")
        let textArray=[]
        for (const element of elementarray) {
            let text=await element.getText()
            textArray.push(text)
            console.log(text);

            if (text=='New Vendor') {

                await element.click()
                break;    
            }   
        }

        console.log(textArray);
        await browser.debug()//========> this will stop the execution
        
    });
    
});*/

let wu=require("../../genericUtility/WebUtility")
describe('dropdown', () => {

    it('getting all text from dropdown',async () => {

        let elementarray=await $$("//select[@id='qccombo']//option")
        wu.SelectElementfromDropDown(elementarray,'New Event')
      // await browser.debug()
        
    });
    
});

