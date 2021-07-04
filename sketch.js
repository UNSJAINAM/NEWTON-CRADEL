const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1,bob2,bob3,bob4,bob5,chain,chain2,chain3,chain4,chain5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
 
bob1=new Bob(350,400,50)
bob2=new Bob(400,400,50)
bob3=new Bob(450,400,50)
bob4=new Bob(500,400,50)
bob5=new Bob(550,400,50)
chain=new chain(bob1.body,{x:350,y:100})
chain2=new chain(bob2.body,{x:400,y:100})
chain3=new chain(bob3.body,{x:450,y:100})
chain4=new chain(bob4.body,{x:500,y:100})
chain5=new chain(bob5.body,{x:550,y:100})

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background();

  rect(roof.position.x,roof.position.y,230,20);

  chain.display()
  chain2.display()
  chain3.display()
  chain4.display()
  chain5.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  
 drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:30 ,y:155})
	}
}
