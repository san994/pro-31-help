const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

 var engine,world;


function preload()
{
	
}

function setup() {
    rectMode(CENTER);
	var canvas = createCanvas(600, 400);

	engine = Engine.create();
	world = engine.world;

    //Create the Bodies Here.
    ground = new Ground(300,350,100,20);
    

    Engine.run(engine);
  
}


function draw() {
  background(0);
  
  ground.display();



 
 
}




