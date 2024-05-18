// For of

let arr = [10, 20, 30, 40]

for(let i in arr) {
    console.log(arr[i]);
}

for(let j of arr) {
    console.log(j);
}

// Multidimensional Array
let a = [["John", 20], ["Harry", 6], ["Kevin", 10]];

console.log(a[0][0]);

// Normal Way

for(let i = 0; i < a.length; i++) {
    for(let j = 0; j < a[i].length; j++) {
        console.log(a[i][j]);
    }
}

// For Each

a.forEach(data => {
    data.forEach(value => {
        console.log(value);
    });
});

// For Of

for(let ar of a) {
    for(i of ar) {
        console.log(i);
    }
}


// Copy and Spread
let arr1 = [1, 2, 3];
// let arr2 = arr1;
let arr2 = [...arr1]

arr1.push(4);
console.log(arr2);

// Array Destructing

let array1 = [1, 2];
let [item1, item2] = array1;

console.log(item1);

//Objects

let obj = {
    name:"Bismay",
    age:20,
    fun: function(){
        console.log("FUNN");
    },
    array3:[8, 5, 7]
};

console.log(obj.name);
obj.fun();
console.log(obj.array3);
obj.key = "item";
console.log(obj);

for(let i in obj) {
    console.log(i);
}

for(let i in obj) {
    console.log(obj[i]);
}

// Fuctions Inside Functions
function fun() {
    console.log("Funn1");
    function fun2() {
        console.log("Funn2");
    }
    fun2();
}
fun();


// Sets
let s = [10, 20, 30];
let ss = new Set(s);

ss.add(56);
console.log(ss);

// Length of a set

let length = 0;
for(element of ss) {
    length++;
}

console.log(length);


