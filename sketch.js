var spongebobimg, tornadoimg, cashimg, bgimg, homeimg;
var bob, tornado, cash, home;
var c1, c2, c3, c4, c5, c6, c7, c8, c9, c10;
var tornadoGroup;
var cashGroup;
var gamestate=1;
var score=0;
function preload(){
  spongebobimg = loadImage("Images/spongebob.png")
  cashimg = loadImage("Images/cash.png")
  bgimg = loadImage("Images/bg.jpg")
  pineapleimg = loadImage("Images/pineaple 1.png")
  tornadoimg = loadImage("Images/tornado.png")
}
function setup() {
  createCanvas(1300,700);


  bob=createSprite(50, 400, 10,10)
  bob.addImage(spongebobimg)
  bob.scale=0.5
  cashGroup=new Group()
  tornadoGroup=new Group()


  
}

function draw() {
  background(bgimg);
  textSize(25);
  fill("black");
  text("Score:" + score,1200,100)

    if(gamestate==1){
      if(keyDown(DOWN_ARROW)){
        bob.y=bob.y+5;
      }
      if(keyDown(UP_ARROW)){
        bob.y=bob.y-5;
      }
      if(keyDown(LEFT_ARROW)){
        bob.x=bob.x-5;
      }
      if(keyDown(RIGHT_ARROW)){
        bob.x=bob.x+5;
      }
      if(tornadoGroup.isTouching(bob)){
        bob.visible=false;
        gamestate=0;   
      }
      if(cashGroup.isTouching(bob)){
        cashGroup.destroyEach();
        score++;
      }
      spawnTornado();
      spawnCash();
}
else if(gamestate==0){
  tornadoGroup.setVelocityXEach(0);
  tornadoGroup.setVelocityYEach(0);
  textSize(100);
  fill("black");
  text("GAME OVER " ,350,350)
}
drawSprites()
}


function spawnTornado(){
  if(frameCount%100==0){
  var tornado=createSprite(0,random(0,700), 10,10)
  tornado.addImage(tornadoimg)
  tornado.velocityX=random(-5,15)
  tornadoGroup.add(tornado);
}
}


function spawnCash(){
  if(frameCount%200==0){

  
  var cash = createSprite(random(250,1000),random(50,700),10,10);
  cash.addImage(cashimg);
  cash.scale=0.2
  cashGroup.add(cash);
  }
}