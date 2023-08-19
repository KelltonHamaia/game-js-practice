//div jogador = player
let player  = document.querySelector('.player');

//div food
let food  = document.querySelector('.food');

document.onload = setpositionFood();
document.addEventListener('keydown', (e)=>{
    let move = e.keyCode;
    if(move === 38) {
        up();
        colisions();
    }
    if(move === 40) {
        down();
        colisions();
    }
    if(move === 37) {
        left();
        colisions();
    }
    if(move === 39) {
        right();
        colisions();
    }
});

function setpositionFood(){
    let leftVal = (Math.random() * (window.innerWidth - 90)).toFixed(0);
    let topVal = (Math.random() * (window.innerHeight - 90)).toFixed(0);
    food.style.top = `${topVal}px`;
    food.style.left = `${leftVal}px`;
};

