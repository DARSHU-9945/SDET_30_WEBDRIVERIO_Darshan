describe('selectable', () => {
    it('should demonstrate the select command', async() => {

        await browser.url("http://www.leafground.com")
        await browser.execute(async ()=>{
            await window.scrollBy(0,500)
        })

        let drag=await $("//img[@alt='selectable']").click()

        let tablelist=await $$("//ol[@id='selectable']//li")

        //console.log("======================>"+tablelist);
        
        let tble=[]

        for(var item of tablelist){
            let text=await item.getText();
            tble.push(text)
            console.log(text);
            if (text=='Item 5') {
                //await browser.debug()
                await item.click()
                await browser.debug()
                break;    
            } 
        }

        console.log(tble);
    })
})