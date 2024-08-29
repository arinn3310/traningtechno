// date ,rest,spread,dom

// 1. date
// let date = new date();

// console.log(typeof date)
// console.log(date.getdate());
// console.log(date.gettime());
// console.log(date.getday()); //1-7
// console.log(date.getmonth()); //0-11
// console.log(date.getyear()); //year-1900
// console.log(date.getfullyear()); //year
// console.log(date.gethours());
// console.log(date.getminutes());
// console.log(date.todatestring());
// console.log(date.totimestring());


// destructuring

// let Arr = [10,20,30,40,50];

// // let num = arr[2]
// let [num1, ...numArr]=Arr;  //rest
// console.log(num1);
// console.log(numArr); //rest

// object destructuring

// let obj = {
//     name: "arin",
//     age:"25",
//     // address:"udaipur",
//     gender:"male"
// }
// let {name , address} = obj;
//  console.log(name);

//  let obj1 = {};
//  obj1[address]="abc"
// //  console.log(obj1);

// let arr1 = [10,20,40];
// let arr2 = [20,30,50];

// obj.firstName = "Vinay"
// obj1[firstName] = "XYZ";
// obj1[address] = "abc"

// console.log(obj1);

// let arr1 = [10,20,30];
// let arr2 = arr1;

// arr2.push(1000);

// console.log()
// let num1 = 30;

// let arr1 = [10,20,30];
// let arr2 = [10,20,30];

// arr2.push(1000);

// console.log(arr1 === arr2);

// Spread opeartor

// let arr1 = [10,20,30];
// ... is working as spread operator
// let arr2 = [...arr1]  

// arr2.push(1000);

// console.log(arr1);
// console.log(arr2);

// let arr1 = [10,20,30];
// let arr2 = [30,40,50];

// let arr3 = [...arr1 , 100, ...arr2 , 20, 1000];
// console.log(arr3);

let obj1 = {
    firstname : "",
    lastname : "upadhyay"
}

let obj2 ={

      address : "udaipur",
      gender : "male"
}

let obj3 = {...obj1 , ...obj2, section: "FSD"};
console.log(obj3);


