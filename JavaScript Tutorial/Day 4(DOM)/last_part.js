function changeColor() {
    var col = document.getElementById("my_div");
    col.style.backgroundColor = "orange";
}

function onMouseOver() {
    var mouse = document.getElementById("my_div");
    mouse.style.backgroundColor = "green";
}

function onMouseOut() {
    var mouse = document.getElementById("my_div");
    mouse.style.backgroundColor = "purple";
}

document.getElementById('btn').addEventListener('click', fun);

function fun() {
    document.getElementById('last_div')
    .style.backgroundColor = "Black";
}