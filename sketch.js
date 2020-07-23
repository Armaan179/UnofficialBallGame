
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,paperimg;
var dustbin1,dustbin2,dustbin3,dustbin1img,dustbin2img,dustbin3img;


function preload()
{
	paperimg=loadImage("https://projectsassets.s3.us-east-2.amazonaws.com/paper.png");
	dustbin1img=loadImage("https://projectsassets.s3.us-east-2.amazonaws.com/paper.png");
	dustbin2img=loadImage("https://projectsassets.s3.us-east-2.amazonaws.com/paper.png");
	dustbin3img=loadImage("https://projectsassets.s3.us-east-2.amazonaws.com/paper.png");
}

function setup() {
	createCanvas(800, 700);
	//paper = new Paper(100,50,10,10);
	dustbin1 = createSprite(400,600,50,100);
	dustbin2 = createSprite(700,600,50,100);
	dustbin3 = createSprite(400,700,100,50);
	ellipse(56, 46, 55, 55);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  paper.display();
  var ball_options ={
	restitution: 1.0
}

ball = Bodies.circle(200,600,20, ball_options);
World.add(world,ball);

console.log(ground);
paper.addImage(paperimg,0,0,this.width);
dustbin1.addImage(dustbin1img,0,0,this.width);
dustbin2.addImage(dustbin21img,0,0,this.width);
dustbin3.addImage(dustbin31img,0,0,this.width);
}


background(255);
Engine.update(engine);
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);

ellipseMode(RADIUS);
ellipse(ball.position.x, ball.position.y, 20, 20);
ball.shapeColor(255);

  drawSprites();
  ball.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

 
  function keyDown(){
	if (keyCode("space")){
		ball.veloxityX=6;
		ball.velocityY=9;
	} 

  }


