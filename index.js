// Chapter 1 - line below is used to print text in consol window 
//  console.log('World is amazing');
//  let a = 2;
//  console.log(a);
//  let name = 'Babbar';
//  console.log(name);
//  name = 3;
//  console.log(name);
//  let person = {
//     firstName : 'ashish' ,
//     age : 25
//  };
// console.log(person.age);


//  let names = ['ashish' , 'rahul' , 'sharma']
//  console.log(names[2]);

//  let age = 17;
//  let status=(age>=18) ? 'Yes Vote' : 'No vote';
//  console.log(status);

//  console.log((false || 'ashish'));
//  console.log((false && 'ashish'));
//  console.log((false && 'name' && 3 && 5));
//  let marks = 90;
//  if(marks>=99){
//     console.log('A');
//  }
//  else if(marks>=90){
//     console.log('B');
//  }
//  else{
//     console.log('Fail');
//  }
 
// let num =2;
// switch(num){
//     case 1: console.log('A');
//     break;
//     case 2: console.log('B');
//     break;
//     default: console.log('D');
// }

// for(let i = 0; i<10; i++){
//     console.log(i);
// }

// let p = 7;
// while(p>5){
//     console.log(p);
//     p--;
// }

// let x = 10;
// do{
//     console.log(x);
//     x--;
// }while(x>5);


// Chapter 2
// const reactangle = {
//     length: 1,
//     breadth: 2,

//     draw: function(){
//         console.log('Done Bhai');
//     }
// };

//Factory function

// function createRectangle(length , breadth){

//     return reactangle = {
//         length: length,
//         breadth: breadth,
    
//         draw(){
//             console.log('Done Bhai');
//         }
//     };
    
// }

// let factoryFunction = createRectangle(5,4);
// let reactangle2 = createRectangle(2,3);
// let reactangle3 = createRectangle(6,7);


//Constructor Function (Pascal notatoion should be followed)
//first letter of every word is capital - NumberOfStudent
// construcor function is only type of function which is defining the function we made
// function Rectangle(len , bre){
//     this.length  = len;
//     this.breadth  = bre;
//     this.draw = function(){
//         console.log('drawing');
//     }
// }

//object creation using constructor

// let rectangleObject  = new Rectangle(4,6);
// rectangleObject.color = 'yellow';
// console.log(rectangleObject);

// delete rectangleObject.color;
// console.log(rectangleObject);

//Primitives are copied by their values
// references are copied by their address

// let a = {value: 10};
// let b = a;

// a.value++;

// console.log(a.value);
// console.log(b.value);

// let a= 10;
// function inc(a){
//     a++;

// }
// inc(a);

// console.log(a);

// let b = 19;
// function dec(b){
//     b++;
// }
// dec(b);
// console.log(b); 

// let b = {value: 10};
// function inc(b){
//     b.value++;
// }
// inc(b);

// console.log(b.value);

// let rectangle = {
//     length: 2,
//     breadth:4
// };

//applying ofr-in loops

// for(let key in rectangle){
//     // keys are reflected through key variable
//     // values are reflected through rectangle along with bracket notation
//     console.log(key, rectangle[key]);
// }

// Applying for-of loops

// for(let key of Object.entries(rectangle)){
//     console.log(key);
// }

// if('color' in rectangle){
//     console.log(Present);
// }

// else{
//     console.log('absent');
// } 

// object cloning

// let src = {
//     a:10, 
//     b: 20
// };

// let dst = {};

// for(let key in src){
//     dst[key] = src[key];
// }

// console.log(dst);
// src.a++;
// console.log(dst);

//methd 2

// let dst = Object.assign({}, src);
// console.log(dst);

//object cloning

// let dst = {... src};
// console.log(dst);

//adding 100para

// const t1 = performance.now();
// for(let i=1; i<=100; i++ ){
//     let newElement  = document.createElement('p');
//     newElement.textContent = 'This is Para' + i;
//     document.body.appendChild(newElement);
//     document.body.appendChild(newElement);

// }

// const t2 = performance.now();
// console.log((t2-t1));


// optimised code
// const t3 = performance.now();
// let myDiv = document.createElement('div');

// for(let index =1 ; index<=100; index++){
//     let element = document.createElement('p');
//     element.textContent = 'Ashish Chauhan' + index;
//     myDiv.appendChild(element);
// }

// document.body.appendChild(myDiv);
// const t4 = performance.now();
// console.log((t4-t3));

// let fragment = document.createDocumentFragment();
// for(let i = 1; i<=100; 1++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is Ashish Chauhan' + i;
//     frangment.appendChild(newElement);
// }
// document.body.appendChild(fragment);


//Sungle threading

// function addPara(){
//     let para = document.createElement('p');
//     para.textContent = 'ja is single';
//     document.body.appendChild(para);
// }

// function appendNewMessage(){
//     let para = document.createElement('p');
//     para.textContent = 'this is second para';
//     document.body.appendChild(para);

// }

// addPara();
// appendNewMessage(); 


// Asynchronous code
// setTimeout(function(){
//     console.log('ashish');
// }, 3000);

// console.log('123');

// let meraPromise = new Promise(function(resolve , reject){
//     setTimeout( function() {
//     console.log('run');
// }, 3000);
//    reject(900);
// });
// meraPromise.then((value) => {console.log(value)});
// meraPromise.catch((error) => { console.log(error)});
// console.log('start');  

let waadaa1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('time out1');

    } , 2000);

    resolve(true);
})
waadaa1.then(() => {
let waadaa2 = new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log('time out 2');
    } , 3000);

    console.log('chal hi gaya akhir kaar');

})
return waadaa2;
}).then((value) => console.log(value));

