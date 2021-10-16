var iss,issImg, spacecraft,spacecraftImg,sl,sr,ss
var backgroundImg
var hasDocked = false
var ax = 200
var ay = 200
var r = 100
var angle = 0

function preload(){
  backgroundImg = loadImage("/Assets/spacebg.jpg")
  issImg = loadImage("/Assets/iss.png")
  spacecraftImg = loadImage("/Assets/spacecraft1.png")
  sl = loadImage("/Assets/spacecraft4.png")
  sr = loadImage("/Assets/spacecraft3.png")
  ss = loadImage("/Assets/spacecraft2.png")
}

function setup() {
  createCanvas(800,400);
  spacecraft =  createSprite(400, 400, 1, 1);
  spacecraft.addImage("stationary",spacecraftImg)
  spacecraft.addImage("straight",ss)
  spacecraft.addImage("right",sr)
  spacecraft.addImage("left",sl)
  spacecraft.scale = 0.2
  spacecraft.mirrorX(-1)



}

function draw() {
  background(backgroundImg)
  drawSprites();
  spacecraft.changeImage("stationary")
  spacecraft.rotation = 0
  spacecraft.x = ax+r*Math.cos(angle*Math.PI/180)
  spacecraft.y = ax+r*Math.sin(angle*Math.PI/180)


  if(!hasDocked){
    handleKeyPress()
    spacecraft.x = spacecraft.x + random(-1,1)
  }

  if(hasDocked){
    Text("Docked Successfully !")
  }
  

}

function handleKeyPress(){
  if(keyDown("UP_ARROW")){
    spacecraft.changeImage("straight")
    spacecraft.y -= 2
    
    
  }
  if(keyDown("RIGHT_ARROW")){
    spacecraft.changeImage("right")
    spacecraft.x += 2
    spacecraft.rotation = 60-angle

  }
  if(keyDown("LEFT_ARROW")){
    spacecraft.changeImage("left")
    spacecraft.x -= 2
    spacecraft.rotation = 60+angle

  }
  
}