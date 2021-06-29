
function preload(){
 runnerImg=loadAnimation("Runner-1.png","Runner-2.png");
 pathImg=loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=4;
runner=createSprite(200,200,20,20);
runner.addAnimation("running",runnerImg);
runner.scale=0.1;
edges=createEdgeSprites()
  
}

function draw() {
  background(0);
  


  if(path.y>400){
    path.y=height/2;
  }
drawSprites()
}
