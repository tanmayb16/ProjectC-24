const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
function setup() {
	createCanvas(1200,700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20);
	dustbin1 = new Dustbin(800,650,200,20);
	dustbin2 = new Dustbin(690,610,20,100);
	dustbin3 = new Dustbin(910,610,20,100);

	paper = new Paper(100,650,25,25);
	Engine.run(engine);
}


function draw() {
  background(255);
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
        Body.applyForce(paper.body,paper.body.position,{x:35,y:-35})
	 }
   }
   



