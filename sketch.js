const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var Ball;
var ground;
var Bin1, Bin2, Bin3;
var BinIMG

function preload()
{	

	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	var options = {
		isStatic: true

	}
	ground = Bodies.rectangle(600, 370, 1200, 10, options);
	World.add(world, ground);


	

	

	Engine.run(engine);

	Ball = new ball(400, 200, 30);
	Bin1 = new bin(650, 300, 70, 5);
	Bin2 = new bin(615, 265, 5, 70);
	Bin3 = new bin(685, 265, 5, 70);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);



  Ball.display();
  Bin1.display();
  Bin2.display();
  Bin3.display();
  
  

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(Ball.body, Ball.body.position,{x: 96, y: -117})
	}
}



