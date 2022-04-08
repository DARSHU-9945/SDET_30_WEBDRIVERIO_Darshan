class webutil {
     async SelectElementfromDropDown(elementarray,matchText){
       // let elementarray=await $$("//select[@id='qccombo']//option")
       //let elementarray=await $$("//select[@id='qccombo']//option")
        let textArray=[]
        for (const element of elementarray) {

            let text=await element.getText()

            await textArray.push(text)
            
            console.log(text);

            if (text==matchText) {

                await element.click()
                break;    
            }  
            
            console.log(textArray);
        }
    }
}


module.exports=new webutil()