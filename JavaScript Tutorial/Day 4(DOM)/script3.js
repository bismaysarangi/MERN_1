const body = document.getElementsByTagName('body')[0];

const div = document.getElementsByTagName('div')[0];

const span = document.getElementsByTagName('span')[0];

const button = document.getElementsByTagName('button')[0];

body.addEventListener('click', () => {
    console.log("Body was Clicked");
})

div.addEventListener('click', () => {
    console.log("Div was Clicked");
})

span.addEventListener('click', () => {
    console.log("Span was Clicked");
})

button.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log("Button was Clicked");
})

//Shortcut Event Delegation

// const div = document.getElementsByTagName('div')[0];

// div.addEventListener('click', (event) => {
//     if(event.target.tagName == 'BUTTON') {
//         console.log("Button was clicked.");
//     }

//     else if(event.target.tagName == 'SPAN') {
//         console.log("Span was clicked.");
//     }
//     else {
//         console.log("Div was clicked");
//     }
// })
