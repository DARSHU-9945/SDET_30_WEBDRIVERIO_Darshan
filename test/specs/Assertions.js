describe('Assertions', () => {

    it('Assertions_Validation', async() => {

       await browser.url("https://localhost:8888")

       await expect(browser).toHaveUrlContaining('8888')

    let title=await browser.getTitle()

    console.log("========Title Of the Page is====="+title);

    // Title Validation
    await expect(browser).toHaveTitleContaining('localhost')
        
    });
    
});