describe('Handling Disabled Eleemnt', () => {
    it('Disabled Element', async() => {
        await browser.url("http://127.0.0.1:5500/test/specs/handling.html")
        let fnametextfield=await $("//input[@id='fname']")
        await fnametextfield.setValue("BOSS")
        let fnamevalue=await fnametextfield.getValue()
        console.log("=====================>"+fnamevalue);
        let lastnametextfield=await $("//input[@id='lname']")
        await browser.execute(()=>{
            document.getElementById("lname").setAttribute("value","Darshan")
           // await lastnametextfield.setValue("Darshan")
        })
        let lnamevalue= await lastnametextfield.getValue()
            console.log("=====================>"+lnamevalue);
            await browser.debug()   
    });
    
});