
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stoneObj=new stone(235,420,30);

	launcherObject=new launcher(stoneObj.body, {x:240, y:429})
	mango1=new mango(1100,100,30);
	mango2=new mango(980,95,35);
	mango3=new mango(1140,210,42);
	mango4=new mango(950,220,40);
	mango5=new mango(1250,205,20);
	mango6=new mango(870,240,39);
	treeObj=new tree(1050,580);

	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
 
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  stoneObj.display();
  launcherObject.display();
  groundObject.display();

  detectcollision(stoneObj,mango1);
  detectcollision(stoneObj,mango2);
  detectcollision(stoneObj,mango3);
  detectcollision(stoneObj,mango4);
  detectcollision(stoneObj,mango5);
  detectcollision(stoneObj,mango6);
}

function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    launcherObject.fly();
}

function keyPressed(){
	if (keyCode === 32) {
	  Matter.Body.setPosition(stoneObj.body, {x:235, y:420})
	  launcherObject.attach(stoneObj.body);
	}
}

function detectcollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	   if(distance<=lmango.r+lstone.r)
	   {
		   Matter.Body.setStatic(lmango.body,false)
	   }
	}