let input = document.getElementById("input-email");

function onfun() {
    input.style.backgroundColor = "red";
}

function offun() {
    input.style.backgroundColor = "white";
}

function funsubmit() {
    alert(`You submitted ${input.value}`);
}

function selectfun() {
    alert("You selected something.")
}