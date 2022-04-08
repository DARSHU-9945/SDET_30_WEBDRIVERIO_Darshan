// describe('hooks', function () {
//     before(function () {
//       // runs once before the first test in this block
//       console.log("Open the Browser");
//       console.log("Enter the URl");
//     });
  
//     after(function () {
//       // runs once after the last test in this block
//       console.log("Close the Browser");
//     });
  
//     beforeEach(function () {
//       // runs before each test in this block
//       console.log("Login To Application");
//     });
  
//     afterEach(function () {
//       // runs after each test in this block
//       console.log("Logout To Application");
//     });
  
//     // test cases
//   });

describe('Test Suite-1',()=>{
    before(function () {
        //       // runs once before the first test in this block
           console.log("Open the Browser");
           console.log("Enter the URl");
            });

    after(function () {
                      // runs once after the last test in this block
            console.log("Close the Browser");
             });

    beforeEach(function () {
                          // runs before each test in this block
            console.log("Login To Application");
            });

    afterEach(function () {
                              // runs after each test in this block
            console.log("Logout To Application");
            });


    it('TestCase_01',()=>{
        console.log("Contact Created");
    })

    it('TestCase_02',()=>{
        console.log("Organization CReated");
    })

})