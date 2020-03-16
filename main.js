var snake1;

function setup() {
    createcanvas(800,800);

}

function draw() {
    background(51);
    snake1.update();
    snake1.show();
}

function pressedKey() {
    if (keyCode === UP_ARROW) {
        snake1.dir(0, -1);
    }   else if (keyCode === DOWN_ARROW){
        snake1.dir(0,1);
    }   else if (keyCode === RIGHT_ARROW){
        snake1.dir(1,0);
    }   else if (keyCode === LEFT_ARROW){
        snake1.dir(-1,0);
    }
    }
}
function Snake() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    
    this.dir = function(x, y) {
        this.xspeed
    }
 
    this.update = function() {
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;
    }

    this.show = function() {
        fill(255);
        rect(this.x, this.y, 10 , 10);
    }
}







var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
