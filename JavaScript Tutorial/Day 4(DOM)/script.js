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
var z = console.log(document.querySelector('.middle').previousElementSibling.previousElementSibling);

if(z.previousElementSibling.previousElementSibling == null) {
    console.log("Previous Previous Element sibling not present.");
}
else {
    console.log(z.previousElementSibling.previousElementSibling);
}