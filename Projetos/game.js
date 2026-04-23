const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restartButton");

const gridSize = 20;
let snake = [];
let food = {}; // posição da comida
let dx = 1, dy = 0; // posição do jogador
let score = 0;
let gameInterval;
let isGameOver = false;



function generateFood() {
    food = {
        x:Math.floor(Math.random()*(canvas.width / gridSize)),
        y:Math.floor(Math.random()*(canvas.height /gridSize))
    }
}
 //limpar o canvas
function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height)

    //desenhar comida
    ctx.fillStyle='red';
    ctx.fillRect (food.x * gridSize, food.y *gridSize, gridSize,gridSize);

    //desenhar cobra
    ctx.fillStyle='lime';
    snake.forEach(segment =>{
        ctx.fillRect(segment.x *gridSize, segment.y *gridSize,gridSize,gridSize)
    });
}

function update(){
    if(isGameOver)return

    const head = {x: snake[0].x + dx, y: snake[0].y + dy};
    snake.unshift(head);

    if(head.x === food.x && head.y === food.y){
        score++;
        scoreElement.textContent = `Pontos: ${score}`;
        generateFood();
    }else{
        snake.pop();
    }

    if(checkCollision()){
        endGame();
        return;
    }
}

function checkCollision(){
    const head = snake[0];
    const hitWall = head.x < 0 || head.y < 0 || head.x >= canvas.width / gridSize || head.y >= canvas.height / gridSize;
    const hitSelf = snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y);

    return hitWall || hitSelf 
}

function endGame(){
    isGameOver = true;
    clearInterval(gameInterval);
    alert(`Fim de Jogo, sua pontuação ${score}`)
}

function gameLoop(){
    update();
    draw();
}

function startGame(){
    snake = [{x:10, y:10}];
    dx = 1; dy=0;
    score = 0;
    isGameOver = false;
    scoreElement.textContent = `Pontos: ${score}`;
    if(gameInterval){
        clearInterval(gameInterval);
    }

    generateFood();
    gameInterval = setInterval(gameLoop, 500);
}

document.addEventListener('keydown', e =>{
    switch (e.key){
        case 'ArrowUp':
            if (dy === 0) {dx = 0; dy = -1;}
            break;
        case 'ArrowDown':
            if (dy === 0) {dx = 0; dy = 1;}
            break;
        case 'ArrowLeft':
            if (dx === 0) {dx = -1; dy = 0;}
            break;
        case 'ArrowRight':
            if (dx === 0) {dx = 1; dy = 0;}
            break;
    }
})

restartButton.addEventListener('click', startGame)
startGame()