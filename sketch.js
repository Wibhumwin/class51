var canvas;
var ball, player, goal, goalhit, ballImg, playerImg, goalImg, goalhitImg, background, backgroundImg;

function preload() {
    backgroundImg = loadImage("/images/background.png");
    goalImg = loadImage("/images/goal.png");
    ballImg = loadImage("/images/ball.png");
    playerImg = loadImage("/images/player.png");
    
}

function setup() {
    createCanvas(1500,600);

    player = createSprite(200,400,10,20)
    player.addImage("player", playerImg)
    player.scale = 1.3;
    
    ball = createSprite(500,450,10,10);
    ball.addImage("ball", ballImg)
    ball.scale = 0.3;

    goal = createSprite(1200,400,10,20);
    goal.addImage("goal", goalImg)
    goal.scale = 0.6;

    player.setCollider("circle",-20,80,30)
    player.debug = true;

    ball.setCollider("circle",0,0,100)
    ball.debug = true;

    goal.setCollider("circle",0,0,100)
    goal.debug = true;


}

function draw() {
    background(backgroundImg);

    if (keyDown("RIGHT_ARROW")) {
        player.velocityX = +3;
    }

    if(player.isTouching(ball)) {
        ball.velocityX = +10
    }

    

    if(ball.isTouching(goal)) {
        player.velocityX = 0;
        ball.velocityX = 0;

    }

    drawSprites();
}