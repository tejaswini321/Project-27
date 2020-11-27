
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5, bob6, bob7;
var roof;
var rope1, rope2, rope3, rope4, rope5, rope6, rope7;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     bob1 = new Bob(310,500,35);
     roof = new Roof(400,100,800,5);
     rope1 = new Rope(bob1.body, roof.body,0,0,700);

     bob2 = new Bob(350,500,35);
     rope2 = new Rope(bob2.body, roof.body,65,0,700);

     bob3 = new Bob(390,500,35);
     rope3 = new Rope(bob3.body, roof.body, 130, 0 ,700);
     
     bob4 = new Bob(430,500,35);
     rope4 = new Rope(bob4.body, roof.body, 195,0,700);

     bob5 = new Bob(270,500,35);
     rope5 = new Rope(bob5.body, roof.body, -65, 0, 700);
     
     bob6 = new Bob(230,500,35);
     rope6 = new Rope(bob6.body, roof.body, -130, 0, 700);

     bob7 = new Bob(190,500,35);
     rope7 = new Rope(bob7.body, roof.body, -195, 0, 700);

   
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  bob1.display();
  roof.display();
  rope1.display();
  bob2.display();
  rope2.display();
  bob3.display();
  rope3.display();
  bob4.display();
  rope4.display();
  bob5.display();
  rope5.display();
  bob6.display();
  rope6.display();
  bob7.display();
  rope7.display();
 
 
  drawSprites();
 
}

function keyPressed () {

  if(keyCode===UP_ARROW){
  Matter.Body.applyForce(bob7.body,bob7.body.position,{x:-700,y:0});
  }
}



