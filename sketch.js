const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";



function preload()
{
    bg= loadImage("sprites/bg.png")
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    box1 = new Box(700,320,70,70);
    box2 = new Box(700,160,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(700,180,70,70);
    box5 = new Box(700,200,70,70);
    box6 = new Box(810,320,70,70);
    box7 = new Box(810,300,70,70);
    box8 = new Box(810,280,70,70);
    box9 = new Box(810,260,70,70);
    box10 = new Box(900,320,70,70);
    box11 = new Box(900,300,70,70);
    box12 = new Box(900,280,70,70);
    bird = new Bird(200,50);
    rope = new SlingShot(bird.body,{x:600,y:30});



}

function draw(){

        background(bg);
        noStroke();
        textSize(30)
        text("x : "+mouseX+"y : "+mouseY,mouseX,mouseY)
    
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    box3.display();
    box4.display();
    box5.display();
    bird.display();
    box6.display(); 
    box7.display(); 
    box8.display(); 
    box9.display(); 
    box10.display(); 
    box11.display(); 
    box12.display(); 
    rope.display();
    console.log(bird.body.speed);    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}