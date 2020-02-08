const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("Sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground2 = new Ground(600,200,200,5);
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(608,175,40,40);
   
    box2 = new Box(615,175,40,40);
    box9 = new Box(605,150,40,40);
    box0 = new Box(615,150,40,40);
    box10 = new Box(607,100,40,40);
    box6 = new Box(595,175,40,40);
    
    log1 = new Box(605,170,125,5);
    log9 = new Box(605,100,115,5);
    
    box3 = new Box(700,350,60,60);
    box01 = new Box(810,350,60,60);
    pig = new Pig(805,300,60,60);
    box03 = new Box(840,330,60,60);
    box04 = new Box(770,330,60,60);
    box05 = new Box(807,130,50,60);
    log3 = new Box(800,300,280,10);
    log2 = new Box(810,345,280,10);
    log4 = new Box(810,150,200,10);
    box4 = new Box(920,350,60,60);
    //pig3 = new Pig(810, 200);


    
    //log3 =  new Log(810,180,70,40);

    //log4 = new Log(760,120,70,40);
    //log5 = new Log(870,120,40,40);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box1.shapeColor="red";
    box2.display();
    ground.display();
    //pig1.display();
    //log1.display();

    box3.display();
    box4.display();
    box6.display();
    //pig3.display();
    //log3.display();

    //log4.display();
    //log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
    ground2.display();
    log1.display();
    box9.display();
    box0.display();
    log9.display();
    box10.display();
    box01.display();
    box03.display();
    box04.display();
    box05.display();
    log2.display();
    log3.display();
    log4.display();
    pig.display();
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}