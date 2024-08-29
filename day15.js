// evemnt loop,timer function,call back hell,promises

// var a = 20;
// let b = 10000;

// function sum(){
//     let x = 200;
//     let y = 300;
//     return x + y;
// }
//  let c = 100;
// console.log(a , b , c)
// sum();

// timer function

// setTimeout(()=>{
//     console.log("hello")

// },2000);

// let timeout= setTimeout(()=>{
//     console.log("hello techno");
      
// },2000);

// let interval = setInterval(()=>{
//     console.log(Math.random());
      
// },2000);

// document.getElementById("button").addEventListener
// ("click",function(){
//     console.log("stop button clicked");
//     clearInterval(interval);
// });

// let interval2 = setInterval(()=>{
//     console.log(Math.random());
      
// },2000);
// document.getElementById("button2").addEventListener
// ("click",function(){
//     console.log("start button clicked");
//     clearInterval(interval);
// })
// function(start);

// document.getElementById("timeout").addEventListener
// ("click",function(){
//     console.log("stop time out button clicked");
//     clearTimeout(timeout);
// });

// asyn js

// let a = 20;
// let b = 30;
// console.log(a+b);

// setTimeout(()=>{
//     console.log("hello techno");
// },0 );

// console.log(a);
// console.log(b);


// callbacks

// function step1(callback){
//     setTimeout(()=>{
//      console.log("step1 completed");
//      callback();
//          },1000 );
// }

// function step2(callback){
//     setTimeout(()=>{
//             console.log("step 2 completed");
//             callback();
//          },1000 );
// }
// function step3(callback){
//     setTimeout(()=>{
//             console.log("step 3 completed");
//             callback();
//          },1000 );
// }
// // callback hell
// step1(()=>{
//     step2(()=>{
//         step3(()=>{
//             console.log("all steps completed");
//         })
//     })
// })


// promises


// function fetchdata (){
//     return new Promise((resolve,reject)=>{
//         let data = {
//             name:"techno",
//             age:30
//         };
//         return resolve(data);
//     }catch (console.error();
//     ))
// }
// let fetchdata = fetchdata();
// console.log(fetchdata);



