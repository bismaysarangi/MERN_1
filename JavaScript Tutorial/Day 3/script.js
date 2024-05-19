// This Keyword

let obj = {
    name:'Bismay',
    age:20,
    fun: function() {
        console.log(this.age);
    }
}

obj.fun();

console.log(this);

// Constructor

function user() {
    this.name = name;
}

let person = new user("Bismay");
console.log(person);

// Recursion

function fact(n) {
    if (n == 0) {
        return 1;
    }
    else {
        return n * fact(n - 1);
    }
}

console.log(fact(5));

// SetTimeout

console.log("This");

setTimeout(() => {
    console.log("Synchronous");
}, 1000);


console.log("is");

// Callback Hell

function loadingData(callback) {
    setTimeout(() => {
        console.log("Loading Data");
        callback();
    }, 5000);
}

function approved() {
    setTimeout(() => {
        console.log("Approved");
    }, 2000);
}

loadingData(function() {
    approved();
});