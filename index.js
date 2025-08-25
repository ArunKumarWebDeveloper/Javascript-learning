// let iceCream=Number(prompt("number"));


// console.log(iceCream);
// if (iceCream ===10){
//     console.log("ice-cream is blue");

// }
// else if(iceCream ===30){
// console.log("ice cream is cone");
// } 
// else{
//     console.log("ice cream is random");
// }

// switch (iceCream) {
//     case 10:
//         console.log("ice-cream is blue");
//             break; 
//         case 30:
//             console.log("ice-cream is cone");
//             break;   
//         default:
//         console.log("ice cream is random");
//             break;
// }
// let i=0;
// while(i<10){c
//     console.log("Hello");
//     ++i;
// }
// let i=0;
// do {
//     console.log("Hello");
//     ++i;
// } while (i<10);
// arrary
// let arr=[];

// for (let i = 0; i < 10; ++i ) {
// arr.push("arun");
// }

// console.log(arr);   

// object

// const myObj ={
//     name: "arun",

// };
// myObj.newData="aron";
// console.log(myObj); 

// function value(a,b,c) {
//     let result = a + b +c;
//     console.log(result)
// }

// value(10,10,2);
// Anonymous  function
// example
//  const myfunc =function (a,b,c)
// {
//     let ab= a+b+c;
//     return ab;
// }
// let ans = myfunc(10,5,5);

// console.log(ans);
// function intro (name="arun"){
//     console.log(`hello ${name}.channel`)
// }
// intro("arun");

// function ary(arr=[]) {

//     let total=0;
//     for( let i =0; i <arr.length; ++i){
// total=total +arr[i];    }
// return total;
// }

// console.log(ary([1,2,3,4,5]));

// scoping
// let a=20;
// {
//     let a=25;
//     console.log(a);
// }
// console.log(a);

// /DOM 
// const arr= document.body.children;

// const newArr = Array.from(arr);

// for (let i =0; i<newArr.length;++i){
//     console.log(newArr[i]);
// }

// selectors in DOM 
//  console.log(document.head);
// console.log(document.body.firstElementChild);
// placeHolder in DOM 
// iteration 
// append
// advance array methods.

// let arr=[0,1,2,3,5,4,6]
// const result=arr.filter((value,index)=>{
//     if(value<4){
//         return value;
//     }
// });
// console.log(result);
// import express from "express";
// const app=express();
// const port =3000;

// app.listen(port,()=>{
//     console.log(`server is running ${port}.`);
// });
// const arr=[3,4,6,8,10];
// const result = arr.every((value,index)=>{
//     return value > 6;
// });
// console.log(result);

// const result = arr.some((value,index)=>{
//     return value > 3;
// });
// console.log(result);
// const arr=[3,4,6,8,10];
// let value = 0;
// for(let element of arr){
//     value=value+3
//     console.log(value);
// }
// const arr=[3,4,6,8,10];
// let totalsum=0;
// arr.forEach((value,index) => {
//     totalsum+= value;
//     value+=20;
//     console.log(value);
   
// });
// console.log(arr);

// Event listener,

// const heading=document.getElementById("heading");
// const btn =document.getElementById("myBtn");
// const box=document.getElementById("box1");



// btn.addEventListener("click",(e)=>{
//     e.preventDefault();
//  box.style.backgroundColor="yellow";
//  box.style.padding="30px";
//  box.style.color="black"
//  box.classList.add("classForDiv");
// });

// btn.addEventListener("contextmenu",(e)=>{
//     e.preventDefault();
//     btn.style.backgroundColor="red";
// });

// box.addEventListener("mouseover",()=>{
// btn.style.transform="scale(1.1)";
// heading.style.backgroundColor="green"
// });

// window.

// addEventListener("contextmenu",(e)=>{
//     e.preventDefault();
//     btn.style.filter="blur(10px)";
// });

// const input=document.querySelector("input");

// input.addEventListener("change",(e)=>{
//     console.log(e.target.value);
// });

// const a=Math.abs(7);
// console.log(a);

// const func1 =(a,b)=>{
//     return Math.abs(a-b);
// }
// console.log(func1(5,2));

// const a= Math.sin(30*Math.PI/180);

// const angleInDegree=(45*Math.PI)/180;
// const a=Math.tan(angleInDegree);
// const a = Math.floor(9.99);
// const a= Math.log10(10);

// console.log(a);

// date object in javascript

// const a = new Date();
// a.setHours(55);
// console.log(a);

// Local storage and session storage in js

//     const input = document.getElementById("myInput");
//     const Btn = document.getElementById("myBtn");
//     const deleteBtn=document.getElementById("delete");

//     const btnclicked = () => {
//         sessionStorage.setItem("key1", input.value);
//     };

//     Btn.addEventListener("click", btnclicked);

//     deleteBtn.addEventListener("click",()=>{
// sessionStorage.clear();
//     });



// if (sessionStorage.getItem("key1")){
//     alert(sessionStorage.getItem("key1",));

// };

// local storage

// const input = document.getElementById("myInput");
// const Btn = document.getElementById("myBtn");
// const deleteBtn=document.getElementById("delete");

// const btnclicked = () => {
//     localStorage.setItem("key1", JSON.stringify({name:"arun",surname:"kumar"}));
// };

// Btn.addEventListener("click", btnclicked);

// deleteBtn.addEventListener("click",()=>{
// localStorage.removeItem("key1");
// });

// if (localStorage.getItem("key1")){
// console.log(JSON.parse(localStorage.getItem("key1")));

// };

// settimeout and setinterval in javascript

// const btn=document.querySelector("button");
// const printname=(name,gender)=>{
//     const income = Math.floor(Math.random()*1000);
//     console.log(`welcome,${name},your income is $${income}.${gender}`);
// };

// const id = setInterval(printname,1000,"arun",200000,"male");

// btn.addEventListener("click",()=>{
// clearInterval(id);
// });

// oops in javascript

// pass by value
// let a =21;

// let b=a;

// console.log(a);
// console.log(b);

// a=22;

// console.log(a);
// console.log(b);  check output in console.

// pass by reference 

// const a ={
//     name:"hello",
//     surname:"world",
// };

// const b=a;

// console.log(a);
// console.log(b);

// a.name="changed a"

// console.log(a);
// console.log(b);

// b.name="newchange b",

// console.log(a);
// console.log(b);

// const Roman={
//     weight:65,
//     height:515,
//     quote:()=>{
//         console.log("win");
//     },
// };
// factory function // object laterals
// function wweSuperStar(a,b,quote){
//     return {
//         weight:a,
//         height:b,
//         quote:()=>{
//             console.log(quote);
//         },
//     };

// };

// const Romanr= wweSuperStar(65,215,"sample");

// console.log(Romanr);

// Constructor Function

// function star(weight,height){
//     this.weight=weight;
//     this.height=height;

// }

// const Roman= new star(65,215);
// console.log(Roman.constructor);

// Spread constructor 

// const arr=[1,2,3,4];

// const narr=[...arr,122,65];

// console.log(narr);

// classes and inheritance
// function Myclass(){
//     this.a=10;
//     this.b=10;
// }

// class Myclass{

    
//     constructor(value1,value2){
// this.a=value1;
// this.b=value2;
// this.c="default";
//     }
//     print(){
//         console.log("hello");
//     }
// }

// const obj1= new Myclass(10,10);
// obj1.a;
// console.log(obj1);
// inheritance
// class Electronics {
//     #input;
//     #output;
//     #name;


//     constructor(input, output, name){
//         this.#input=input;
//         this.#output=output;
//         this.#name=name;
//     }
//     print(){
//         console.log(this.#name);
//     }
// }

// class charger extends Electronics{
// #plugType;
// constructor(input, output, name, plugType){
//     super(input, output, name)
//     this.#plugType = plugType;
// }
// }

// const hpcharger = new charger(120, 200, "redmi charger", "india");
// const hardisk =new Electronics(100, 100, "harddisk");
// hpcharger.print();

// function example2(name="Arun"){

//     for(let i= 0; i<100; i++){
//  console.log(`${name}: ${i}`)}
// }

// example2();
// console.log("web developer");

// callback//

// promises//
// json anf fetch api//
