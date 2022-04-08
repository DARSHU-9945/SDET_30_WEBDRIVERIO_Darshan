describe('upandlow', () => {
    it('upandlow', async() => {

        let str="#hello WOrD$$"
        let split_1=await str.split("")
        console.log(split_1);
        let lower=0;
        let upper=0;
        let NAC=0
        for (const item of split_1) {

            if(item>='A' &&item<= 'Z'){
                upper++
            }else if(item>='a' &&item<= 'z'){
                lower++
            }else{
                NAC++
                //console.log("not a character");
            }  
        }
        console.log("===============>upper is: "+upper+" "+"lower is : "+lower+" "+"NAC is: " +NAC);

    
        })
    })