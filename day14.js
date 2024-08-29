 let myDiv = document.getElementById("main");

// myDiv.id="container";
// myDiv.className="head";
// myDiv.style.width="200px";
// myDiv.style.height="200px";
// myDiv.style.backgroundColor="green";

// console.log(myDiv.getAttribute("id"));
// console.log(myDiv.getAttribute("class"));
// console.log(myDiv.getAttribute("style"));

// myDiv.setAttribute("id","text");
// console.log(myDiv.getAttribute("id"));

// myDiv.setAttribute("style","background-color : red");
 
// let obj =  {
// id = "main",
// style : {
//     width : "200px",
//     height : "200px",
//     backgroundColor : "green"
// }
// }
// obj.id = "container";
// obj.style.borderRadius = "20px";


// // setattribute
// obj.id = "head";
// obj.style = {
//     backgroundColor = "red"
// }

// inner html , inner text , textcontent

// // console.log(myDiv.innerHTML);
// myDiv.innerHTML = "<input type='password' placeholder='enter password'><button>submit</button>"
// console.log(myDiv.innerText)
// console.log(myDiv.innerHTML)
// console.log(myDiv.textContent) console the hidden text also

// let myDiv = document.getElementsByClassName

 




// events

// document.getElementById("button").onclick = function(){
//     console.log("hello techno \n button clicked");
//     let newDiv = document.createElement("div");
//     newDiv.style.width = "200px";
//     newDiv.style.height = "200px";
//     newDiv.style.backgroundColor = "blue";
//     document.body.appendChild(newDiv);
// }

// document.getElementById("button").addEventListener("click",
//     function(){
//              console.log("hello techno \n button clicked");
//      let newDiv = document.createElement("div");
//      newDiv.style.width = "200px";
//      newDiv.style.height = "200px";
//     newDiv.style.backgroundColor = "blue";
//     document.body.appendChild(newDiv);

//     }
// )
//  document.getElementById("box").addEventListener("mouseenter",
//     function(){




let obj ={};
function getvalue(a){
 obj[a.target.name] = a.target.name
 console.log(obj);
}


document.getElementById("name").addEventListener("change",
    function(event){
        // let fieldvalue = document.getElementById("name").value;
        // console.log(fieldvalue);
        getvalue(event)

    }
);

document.getElementById("name").addEventListener("change",
    function(event){
        // let fieldvalue = document.getElementById("name").value;
        // console.log(fieldvalue);
        getvalue(event)

    }
);