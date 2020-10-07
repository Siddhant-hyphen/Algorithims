var fixedRect,movingRect



function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 100, 50);
  movingRect = createSprite(100, 100, 50, 100);
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "yellow";
  fixedRect.debug = true;
  movingRect.debug = true;

}

function draw() {
  background("black");
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 && fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2 && fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2 && movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
  console.log(movingRect.x - fixedRect.x);
}
else{
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "yellow";
}
  drawSprites();
}