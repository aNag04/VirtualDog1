//Create variables here
var dog, happyDog;
var database;
var foodS, foodStock;
var dogImg,happyDogImg
function preload()
{
dogImg = loadImage("dog.png")
happyDogImg = loadImage("happyDog.png")
  //load images here
  
}

function setup() {
	createCanvas(800, 700);
  database = firebase.database()
  dog = createSprite(250,300,150,150)
  dog.addImage(dogImg)
  dog.scale = 0.5;
  database.ref("Food").on("value",readStock)
}
function readStock(data){
  foods = data.val()

}

function draw() {  
  background(46,139,87);
  if(keyWentUp(UP_ARROW)){
    writeFood(foods)
    dog.addImage("happyDogImg")
  }
 
  drawSprites();
  //add styles here

}
function writeFood(x){
  if(x<=0){
    x = 0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}



