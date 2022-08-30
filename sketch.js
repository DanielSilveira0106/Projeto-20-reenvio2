
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine , world;
var block1 , block2 , block3;




function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

   
	engine = Engine.create();
	world = engine.world;
	
       var plane_options={
        isStatic:true
        }

        plane = Bodies.rectangle(200,390,400,10,plane_options)
        World.add(world,plane)

     var block1_options ={        
      restitution:0.7,
      friction:0.01,
      frictionAir:0.1
     }
     var block2_options ={
      restitution:0.5,
      friction:0.03,
      frictionAir:0.2
    
     }
     var block3_options ={
      restitution:0.07,
      friction:0.03,
      frictionAir:0.3	
     }
       block1 = Bodies.circle(220,10,10,block1_options)
    World.add(world,block1)
 
    block2 = Bodies.rectangle(110,50,10,10,block2_options)
	World.add(world,block2)
	
	block3 = Bodies.rectangle(350,50,10,10,block3_options)
	World.add(world,block3);
    fill("red");
    rectMode(CENTER);
    ellipseMode(RADIUS);
    
    
	
	
  
}


function draw() {
  background(0);
  
 Engine.update(engine);
 fill("brown");
 rect(plane.position.x,plane.position.y,1200);
 fill("green");
 ellipse(block1.position.x,block1.position.y,30);
 fill("pink");
 rect(block2.position.x,block2.position.y,50,50);
 rect(block3.position.x,block3.position.y,100,50);
 
}



