// this

// let user = {
//     username : "arin"
//     age : "20"
//     getuserdetails : function(){
//         console.log
//         console.log('hello, my username is ${this.username}and my age is ${this.age}');
//     }
// }

// console.log(this);


// user.getuserdetails();

// constructors--functions which converts data into a new object


// function Person(name, age){
//     const personObj = {
//         username : name,
//         age : age,
//         greet : function(){
//             console.log(`hello, my name is ${this.username} and my age is ${this.age}`);
//         }
//     }
//     return personObj;

// }

// const person1 = Person("arin","20");
// const person2 = Person("arinmm","200");
// person1.greet();
// person2.greet();


// function Person(name, age){
//         this.name = name;
//         this.age = age;
        // this.greet = function(){
        //     console.log(`hello, my name is ${this.name} and my age is ${this.age}`);
        // }
    // }
//  Person.prototype.greet = function(){
//     console.log(`hello, my name is ${this.name} and my age is ${this.age}`);
//  }



//  const person1 = new Person("arin","20");
// const person2 = new Person("arinmm","200");
// person1.greet();
// person2.greet();
// console.log(person1);
// console.log(person2);

// classes

// class person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;

//     }

//     greet(){
//         console.log(`hello, my name is ${this.name} and my age is ${this.age}`);
//     }
// }
// const person1 = new person("arin","20");
// const person2 = new person("dev","200");
// // console.log(person1)
// // // person1.greet();
// // // person2.greet();
// console.log(person1);
// console.log(person2);/


// class Animal{
//     constructor(name){
//         this.name = name;
//     }
//     speak(){
//         console.log(`${this.name}make a noise`);
//     }
// }
// class dog extends animal{
//     constructor(name){
//         super(name);
//     }

//     speak(){
//         console.log(`${this.name}barks`);

//     }
// }

// class cat extends animal{
//     constructor(name){
//         super(name);
//     }


//     speak(){
//         console.log(`${this.name}meows`);
//     }
// } 

class bankAccount{
    #balance = 0;
    constructor(owner){
        this.owner = owner;
    }
    deposit(owner){
        this.balance = amount;
        console.log(`${this.owner} deposited ${amount},current balance : ${this.#balance}`)
    }
}         