var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600, 400);
  
  wall = createSprite(1500, 200, 60, height / 2);
  wall.shapeColor = rgb(80, 80, 80);
  //wall.debug = true;

  car = createSprite(400, 200, 80, 30);
  car.shapeColor = rgb(0, 0, 255);
  //car.debug = true;

  speed = Math.round(random(55, 90));
  weight = Math.round(random(400, 1500));

}

function draw() {
  background("black"); 
  
  car.velocityX = speed;

  if(wall.x - car.x < (car.width + wall.width) / 2) {
    
    car.velocityX = 0;
    var deformation = (0.5 * weight * (speed ^ 2)) / 22500;

    if(deformation > 180) {
      car.shapeColor = rgb(255, 0, 0);
    } else if(deformation < 180 && deformation > 100) {
      car.shapeColor = rgb(230, 230, 0);
    } else {
      car.shapeColor = rgb(0, 255, 0);
    }

  }

  drawSprites();
}