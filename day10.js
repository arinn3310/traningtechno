// "use strict"
// use strict is used to define strict mode in javascript
// loops , strict mode , console types, array methods

// for , while,do while

// let count = 1;
// let a =30;
// b = 30;
// console.log(b);

// function sum(){
//     if you want strict mode inside particular block
//     "use strict"
//     console.log("sum function");
// }

// sum();

// while(count<=30){
//     console.log(count);
//     count++;
// }

// do{
//     console.log(count);
//     count++;
// }while(count<=5);
// in do while the loop run atleast for one time 

// for(let i=0;i<=10;i++){
//       console.log(i);
// }

// for(i=0;i>0;i++){
//     console.log(i);
// }

// let arr = [10,20,30,40,50,60,70,80]

// for(let i=0;i<  arr.length;i++){
//     console.log(arr[i]);
// }


// for of and for in loop

// let items = ["first","second",3,4,"fifth"];

// for(let item of items){
//     console.log(item);
// }

// for(let index in items){
//     console.log(index);
//     console.log(items[index]);
// }

// strict mode 

// types of console

// console.log("log statement");
// console.error("this is an error console");
// console.warn("this is an warning console");

// console.assert(5>10,"5 is not greater than 10");
// console.assert(10>5,"10 is not greater than 5");

// let person = {
//     name:"arin",
//     age:"**" ,
//     address : {
//         city:"bangalore",
//         zipcode : "313001"
//     },
//     hobbies : ["reading","swimming","dancing"],
// }
// console.dir(person);

// let data =[
//     {
//         name:"arin",address : "bangalore",dept : "fsd"
//     },
//     {
//         name:"ariiin",address : "bangalore",dept : "fsd"
//         },
//         {
//             name:"arinnn",address : "bangalore",dept : "fsd"
//             }
//             ]
// console.table(data);

// console.group("group");
// console.log("msg1");   
// console.log("msg2");
// console.groupEnd();

//  console.count("counter");
//  console.count("counter");
//  console.count("counter");

// let arr =[10,20,30,40];
// let result=arr.push(1000); //to push the element
// console.log(result); //indexing btaega

// console.log(arr);

// console.log(arr.pop());
// console.log(arr);

// let arr=[10,20,30];
// console.log(arr.unshift(1000))
// console.log(arr); //unshift is used to add the element at 0 th index(returns array lenth)

// console.log(arr.shift()) //to remove the element from 0 the index
// console.log(arr);

// let arr1=[20,30];
// let arr2=[10,40];
// let result=arr2.concat(arr2);

// console.log(arr1);
// console.log(arr2);
// console.log(concat);
 ///to concat both arrays but it doesnt change the original arrays it form new array


//  Slice , splice 

// let arr = [1,2,3,4,5,6,7,8,];

// let slicedArr
// slicedArr = arr.slice(2,5);

// console.log(arr);
// console.log(slicedArr);
// let arr = [1,2,3,4,5,6,];

// arr.splice(2);
// console.log(arr.splice(2,2));
// arr.splice(2,0,"arin");
// console.log(arr);

// includes
// let result = arr.includes(4);
// console.log(result);

// reverse
// arr.reverse();
// console.log(arr);

// let arr = [1,2,3,4,5,6,];

// join

// let result = arr.join("arin");
// console.log(result);

// 10-2-2024
// 10/2/2024

// let arr = [1,2,3,4,5,6,];

// let arr1 = [10,20,[30,[40]]]
// let result = arr1.flat(1);
// console.log(result);

// map,filter,reduce

// map returns a new array with the same lenght as original
// let arr = [10,20,30,40,50,60,];

// let newArr = arr.map((item)=>{
//     if(item == 30){
//     return item;
//     }

// })
// console.log(newArr);
// console.log(arr);


// for each

// let result = arr.foreach((item , i )=>{
//     console.log(i)
//     // return item;
// })

// console.log(result);