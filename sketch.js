var dog,happydog,database,foodstock,foodS//Create variables here
var dogimg,happyimg;
function preload()
{
  dogimg=loadImage("images/dogImg.png")
  happyimg=loadImage("images/dogImg1.png")
}

function setup() {
  database=firebase.database();
  createCanvas(500, 500);
  dog=createSprite(300,300)
  dog.addImage(dogimg)
  dog.scale=0.3
  foodstock=database.ref("food");
  foodstock.on("value",readstock)
  
}


function draw() {  
background("green")
  
  if(keyDown(UP_ARROW)){
    writestock(foodS);
    dog.addImage(happyimg)
  }
  drawSprites();
  textSize(20)
  fill("yellow")
  text("press UpArrow key to feed the Hungry Dog",50,50)

}
function readstock(data){
  foodS=data.val();
}
function writestock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref("/").update({
    food:x
  })
}

