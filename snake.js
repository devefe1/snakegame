let cvs = document.getElementById('snake');
let ctx = cvs.getContext('2d');

const box = 32;

const field = new Image();
field.src = "/assets/ground.png";

const foodPic = new Image();
foodPic.src = "/assets/food.png";

//snake

let snake = [];

snake[0] = { x : 9 * box, y : 10 * box};

//food
let food = {
    x : Math.floor(Math.random()*17+1) * box,
    y : Math.floor(Math.random()*15+3) * box
}

//score or coins

let score = 0;

//controls

let direc;

document.addEventListener("keydown", direction);

function direction(event){
    let key = event.keyCode;
    if(key == 37 && direc != "RIGHT"){
         direc = "LEFT";
    } else if(key == 38 && direc != "DOWN"){
        direc = "UP";
    } else if(key == 39 && direc != "LEFT"){
        direc = "RIGHT";
    } else if(key == 40 && direc != "UP"){
        direc = "DOWN";
    }
}

//hit wall or snake
function collision(head,array){
    for(let i = 0; i < array.length; i++){
        if(head.x == array[i].x && head.y == array[i].y){
            return true;
        }
    }
    return false;
}

//put on canvas

function draw(){
    ctx.drawImage(field,0,0);

    for(let i = 0; i < snake.length; i++){
        ctx.fillStyle = (i == 0)? "green" : "white";
        ctx.fillRect(snake[i].x, snake[i].y,box,box);


        ctx.strokeStyle = "red";
        ctx.strokeRect(snake[i].x,snake[i].y,box,box)
    }

ctx.drawImage(foodPic, food.x, food.y);   

//former position
let snakeX = snake[0].x;
let snakeY = snake[0].y;

//direction
if(direc == "LEFT") snakeX -= box;
if(direc == "UP") snakeY -= box;
if(direc == "RIGHT") snakeX += box;
if(direc == "DOWN") snakeY += box;

//if snake eats food
if (snakeX == food.x && snakeY == food.y){
    score++;
    // eat.play();
    food = {
        x : Math.floor(Math.random()*17+1) * box,
        y : Math.floor(Math.random()*15+3) * box
    }
//Don't remove tail
} else{
//remove tail
    snake.pop();
}

//new head

let newHead = {
    x : snakeX,
    y : snakeY
}

//end game

if(snakeX < box || snakeX > 17 * box || snakeY < 3*box || snakeY > 17*box || collision(newHead,snake)){
    clearInterval(game);
    dead.play();
}

snake.unshift(newHead);

ctx.fillStyle = "white";
ctx.font = "45px Changa one"
ctx.fillText(score,2*box,1.6*box);
}

//draw func every 100 ms

let game = setInterval(draw,100);


let a;
function show_hide(){
    if (a==1)
    {
        document.getElementById('snake').style.display='none';
        return a = 0;
    }
else 
{
    document.getElementById('snake').style.display='';
    return a = 1;
}
}