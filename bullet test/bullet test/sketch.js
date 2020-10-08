var bullet, wall
var speed, weight, thickness  
function setup() {
  createCanvas(1600,800);
  speed =random(223,321.);
  weight =random(30 , 52); 
  thickness =random(22,83);       
  //createSprite(800, 100, 50, 50);

  bullet = createSprite(100, 400, 20, 20);
 
  wall = createSprite(1500, 400,thickness, height/2);
 
  bullet.velocityX = speed;
  
} 


function draw() {
  background(255,255,255);  
    
  if(hasCollided(bullet, wall)){
    bullet.velocityX=0;
    var damage=0.5 * weight * speed* speed/(thickness*thickness*thickness)
  if(damage>10)
    {
      wall.shapeColor = color(255, 0, 0)
    }
    if(damage<10)
    {
      wall.shapeColor =color(  0,255,0)
    }
   


  }
  hasCollided() 
  drawSprites();
}

function hasCollided(bullet, Lwall)
{
  bulletRightEdge= bullet.x + bullet.width;
  wallleftEdge=Lwall.x
  if(bulletRightEdge >= wallleftEdge)
  {
      return true

  }
return false;

}
