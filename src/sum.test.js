import React from "react";
//Smaple Test

// test('test my first case',()=>{
//     let  data = 10;
//     expect(data).toBe(10);
// })

// const sum = require("./sum");
const obj = require("./sum");
// describe is TestSuite 
//to pass the object test
describe("Update Home Page",()=>{
    it('object test',()=>{
        expect(obj()).toEqual({name:"Eshant"});
    })
})

// describe("Update Home Page",()=>{
//     //it/test is test
//     it('test my first case',()=>{
  
//         expect(sum(1,2)).toBe(3);
//     })
//     describe("Update Home Page",()=>{
//         it('test my first case',()=>{
      
//             expect(sum(1,3)).toBe(4);
//         })
//         it('test my Second case',()=>{
      
//             expect(sum(2,7)).toBe(9);
//         })
//         it('test my third case',()=>{
//       // not.tobe means its should not be equal to to this value then it will pass the test
//             expect(sum(10,10)).not.toBe(21);
//         })
//         it('test my fourth case',()=>{
      
//             expect(sum(21,25)).toBe(46);
//         })
//     })
 
// })