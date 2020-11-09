var box1,box2,box3,box4;
function setup() {
  createCanvas(800,400);
  box1= createSprite(0,100,50,50);
  box1.shapeColor="green"
  box1.velocityX = 10;
  box2=createSprite(700,100,50,50);
  box2.shapeColor="red"
  box2.velocityX = -10;
  box3=createSprite(750,0,50,50);
  box3.shapeColor="green"
  box3.velocityY = 7;
  box4=createSprite(750,400,50,50);
  box4.velocityY = -7;
  box4.shapeColor="blue"
}

function draw() {
  background("pink");  
  
  bounceOff(box1, box2);
  drawSprites();
}


// function that accept arguments
function bounceOff (obj1, obj2){
  if(obj1.x-obj2.x<(obj1.width+obj2.width)/2
  && obj2.x-obj1.x<(obj1.width+obj2.width)/2){
    obj1.velocityX = obj1.velocityX * (-1); 
    obj2.velocityX = obj2.velocityX * (-1);
    console.log("OBJ1:" + obj1.velocityX)
    console.log("OBJ2:" +obj2.velocityX)
  }
  if(obj1.y-obj2.y<(obj1.height+obj2.height)/2
   && obj2.y-obj1.y<(obj1.height+obj2.height)/2){
    obj1.velocityY = obj1.velocityY * (-1); 
    obj2.velocityY = obj2.velocityY * (-1);
   }



 // && {
 
}