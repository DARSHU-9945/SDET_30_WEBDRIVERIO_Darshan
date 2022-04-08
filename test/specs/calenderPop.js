describe('Calender', () => {
    it('caleneder popup', async() => {

        await browser.url("http://www.leafground.com")
        await browser.execute(async ()=>{
            await window.scrollBy(0,200)
        })

        let calender = await $("//img[@alt='Calendar']")
        await calender.click()

        let calenderfield= await $("//input[@id='datepicker']")
        await calenderfield.click()

         let day=20
         let month="August"
         let year="2024"
        let monthandYear=month+" "+year
    
        for(;;)
            {
                let title_Text=await $("//div[@class='ui-datepicker-title']").getText()
                if(title_Text.includes(monthandYear))
                {
                    await $("//a[text()='"+day+"']").click()
                    await browser.debug()
                }
                else
                {
                    await $("//span[text()='Next']").click()
                }
            }
 
        })

    })

