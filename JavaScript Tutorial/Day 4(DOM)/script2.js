// let hero = document.querySelector('#hero');

// console.log(hero.getAttribute('about'));

// Animation
function myMove() {
    let pos = 0;
    const elem = document.getElementsByClassName("inside")[0];
    const id = setInterval(frame, 10);
    function frame() {
        if(pos == 350) {
            clearInterval(id);
        }
        pos++;
        elem.style.top = pos + 'px';
        elem.style.left = pos++ + 'px'
    }

}