console.log("Hello");

//console.log(2+3);

/* hi
hi
*/

console.log(2+8);

let a = 6;
let b = 7;

console.log(a*b);

let bool = true;
console.log(typeof bool);

let c;
console.log(typeof c);

// Type Conversion

result = '2' + 4;
console.log(result);

new_result = '3' - 2;
console.log(new_result);

res = null;
res = Number(res);
console.log(res);

r = 20.50
r = parseInt(r);
console.log(r);

// Comparision Operators
let x = 5;
let y = "5";
console.log(a == b);
console.log(a === b);
console.log(a != b);
console.log(a !== b);

// Conditional

age = 18;
name = "Bismay";

if (age > 18) {
    console.log("You are eligible to vote.");
}
else if(age == 18) {
    if(name == 'Bismay') {
        console.log("You are special.");
    }
}
else {
    console.log("Not Eligible.")
}

// Switch case
let ch = 2;
switch(ch) {
    case 1:
        console.log("First Case");
        break;
    case 2:
        console.log("Second Case");
        break;
    case 3:
        console.log("Third case");
        break;
    default:
        console.log("Wrong Entry");
        break;
}

// Looping

for(let i = 1; i <= 10; i++) {
    console.log(i);
}

// Functions

function namee(a) {
    console.log("Hello"+ a);
}

namee("Bismay");

function add(a, b) {
    console.log(a+b);
}

add(4,60);

let subtract = (a, b) => console.log(a - b);

subtract(400, 20)

// Arrays

names = ['Bismay', 'Rahul', 'Ram', 'Sheena'];
names.splice(1, 0, 'Mandeep');
console.log(names);

num = [10, 20, 30, 40];
num.forEach((value, index, array) => {
    console.log(value + " " + index + " " + array);
});

let ar = num.map((val, index) => {
    return val+20;
})
console.log(ar);

// Calculating execution time
console.time('loop_time')

let array = []
for (let x = 0; x <= 10000000; x++)
    array.push(x);

console.timeEnd('loop_time')
