const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var  box2;
var box3;
var  box4;
var box5;
var bird;
var log1;
var log2;
var log3;
var log 4;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(300,320,70,70);
    box4 = new Box(980,320,70,70);
    box5 = new Box(920,300,70,70);




log1 = new Log(920,320,PI/2);
    log2 = new Log(300,320,PI/2);
    log3 = new Log(980,320,-PI/7);
    log4 = new Log(920,300,PI/7);


    bird = new Bird(200,50,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
  bird.display();




  log1.display();
  log2.display();
  log3.display();
  log4.display();
}