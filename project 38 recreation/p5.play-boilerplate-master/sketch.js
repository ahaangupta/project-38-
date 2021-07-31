var death 
var bullet
var mapImage
var bulletImage
var shipImage
var gameState = 0 
function preload(){
mapImage = loadImage("space.PNG")
shipImage = loadImage("space ship.png")
bulletImage = loadImage("bullet.PNG")
}
function setup(){
createCanvas(windowWidth,windowHeight)

ship = createSprite(windowWidth/2,windowHeight/2,50,60)
ship.addImage(shipImage)
ship.scale = 0.1
}
function draw(){
background(mapImage)
drawSprites()
// movement for ship
if(keyCode === 38){
    velocity.X = 4
}
//camera movement
camera.position.x = shiup.x;
camera.position.y = ship.y;

}

function keyPressed(){
    if(keyCode === 32){
        bullet = createSprite(ship.x,ship.y,50,60)
        bullet.addImage(bulletImage)
        bullet.scale = 0.1
        bullet.velocityX = 8
    }
}

 