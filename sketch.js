var fixedRect, movingRect;
var box,box1
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  box = createSprite(200,400,50,20)
  box1 = createSprite(800,400,50,20)
 box.shapeColor = "blue";
 box1.shapeColor = "red";

 box.velocityX = +5;
 box1.velocityX = -5;
}

function draw() {
  background(0,0,0);  
 
  bounceOff(box,box1);
  bounceOff(movingRect,fixedRect)
  drawSprites();
  
}

