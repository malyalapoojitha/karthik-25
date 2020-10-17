
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin,paperObject,ground;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;


	paperObject=new Paper(200,450,70);
	ground=new Ground(width/2,670,width,20);
	
	dustbin=new Dustbin(1200,650);
	// var render = Render.create({
	// 	element: document.body,
	// 	engine: engine,
	// 	options: {
	// 	  width: 1600,
	// 	  height: 700,
	// 	  wireframes: false
	// 	}
	//   });
	  Engine.run(engine);
	  //Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  paperObject.display();
  ground.display();
  dustbin.display();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});

  
	}
}
