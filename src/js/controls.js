//gerando valor ficticio para iniciar a partida
let playerLeft = (Math.floor(Math.random() * 20) + 20).toFixed(0);
let playerTop = (Math.floor(Math.random() * 20) + 20).toFixed(0);
let sprite = document.querySelector('.img-player');

//Atribuindo para que os valores sejam manipulaveis 
player.style.left = `${playerLeft}px`;
player.style.top = `${playerTop}px`;

let points = 1; 


let movement = {
    top: parseInt(player.style.top),
    left: parseInt(player.style.left),
}


function up(){
    movement.top -= 15
    player.style.top = `${movement.top}px`;
}

function down(){
    movement.top += 15
    player.style.top = `${movement.top}px`;         
}

function left (){
    sprite.setAttribute("src", "./img/nagatoro-left.png")
    movement.left -= 15
    player.style.left = `${movement.left}px`;      
}

function right(){
    sprite.setAttribute("src", "./img/nagatoro.png")
    movement.left += 15
    player.style.left = `${movement.left}px`;      
}

function colisions(){
    let pLeft = Number(player.style.left.replace('px', '')); 
    let fLeft = Number(food.style.left.replace('px', ''));
    let pTop = Number(player.style.top.replace('px', '')); 
    let fTop = Number(food.style.top.replace('px', ''));

    //borda esquerda                                           //borderTop da esquerda
    if(((pLeft+60) - fLeft >=3 && (pLeft+60) - fLeft < 10) && ((pTop + 60) - fTop) >=1 && ((pTop + 60) - fTop) <=32){
        console.log('ok')
        setpositionFood()
        document.querySelector('.pontos').innerHTML = points++;
        
    };

    //borda da direita                                           //borderTop da direita
    if(((fLeft + 50) - pLeft >=3 && (fLeft + 50) - pLeft < 10) && (((pTop + 60) - fTop) >=1 && ((pTop + 60) - fTop) <=32)){
        console.log('ok 2')
        setpositionFood()
        document.querySelector('.pontos').innerHTML = points++;
    };

    //borda da direita                                           //borderBottom da direita   
    if(((pLeft + 50) - fLeft >=3 && (pLeft + 50) - fLeft <= 68) && ((pTop + 50) - fTop >=28 && (pTop + 50) - fTop <= 88)){
        console.log('ok 3')
        setpositionFood()
        document.querySelector('.pontos').innerHTML = points++;
    }

    //borda da esquerda                             //corrigir
    if(((fLeft + 50) - pLeft >=3 ) && ((fLeft + 50) - pLeft <= 18 ) && (((fTop + 50) - pTop >= 3) && (fTop + 50) - pTop <= 58)  ){
        console.log('ok 4' )
        setpositionFood()
        document.querySelector('.pontos').innerHTML = points++;
    }
}
