//DOM

let a = document.querySelectorAll('li');
console.log(a);

let b = document.querySelectorAll('top');
console.log(b);

//Parent Element
let parent = document.querySelector('div');
let p = parent.parentElement;
console.log(p);

//Previous Element Sibling
// var z = console.log(document.querySelector('.middle').previousElementSibling.previousElementSibling);

// if(z.previousElementSibling.previousElementSibling == null) {
//     console.log("Previous Previous Element sibling not present.");
// }
// else {
//     console.log(z.previousElementSibling.previousElementSibling);
// }

var z = document.querySelectorAll('.middle');

z.forEach((ele) =>console.log( ele.previousElementSibling));

//Append Child

const ul = document.querySelector('ul');
const newt = document.createElement('li');
newt.textContent = "Giga Chad";
ul.appendChild(newt);

//Remove
// const uli = document.querySelector('ul');
// ul.remove();

const list = document.querySelector('ul')
const change = list.children[1];
const newE = document.createElement('li');
newE.textContent = "Holaaaa Amigos";
list.replaceChild(newE, change);