
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mango1,mango2,mango3,mango4,mango5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  detectcollision(stoneObj,mango1);
  detectcollision(stoneObj,mango2);
  detectcollision(stoneObj,mango3);
  detectcollision(stoneObj,mango4);
  detectcollision(stoneObj,mango5);

  drawSprites();
 
}

function keyPressed(){
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
   Matter.Body.setPosition(stoneObj.body, {x:235, y:420})
   launcherObject.attach(stoneObj.body);
    }
}

function detectcollision(lstone,lmango){
	mango.body.position = lmango.body.position
	stone.body.position = lstone.body.position

	var distance = dist(stoneBodyPosition.x , stoneBodyPosition.x,
		mangoBodyPosition.x , mangoBodyPosition.y)

		if(distance<=lmango.r+lstone.r){
			Matter.body.setStatic(lmango.body,false)
		}
}