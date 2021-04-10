const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var f1, f2, f3, f4, f5;
var f6, f7, f8, f9, f10, f11, f12;
var weight, chain;

function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1600,800);

    engine = Engine.create();
    world = engine.world;

    f1 = new Building(1400, 750, 150, 75);
    f2 = new Building(1400, 700, 150, 75);
    f3 = new Building(1400, 650, 150, 75);
    f4 = new Building(1400, 600, 150, 75);
    f5 = new Building(1400, 550, 150, 75);

    f6 = new Building(1000, 750, 125, 75);
    f7 = new Building(1000, 700, 125, 75);
    f8 = new Building(1000, 650, 125, 75);
    f9 = new Building(1000, 600, 125, 75);
    f10 = new Building(1000, 550, 125, 75);
    f11 = new Building(1000, 500, 125, 75);
    f12 = new Building(1000, 450, 125, 75);

    weight = new Weight(300, 600, 80, 80);

    ground = new Ground(800,height,1600,20);

    chain = new Chain(weight.body,{x:300, y:300});
}

function draw(){
    background(0);

    Engine.update(engine);
    
    ground.display();

    chain.display();

    fill(255);
    weight.display();

    fill("green");
    f1.display();

    fill("blue");
    f2.display();

    fill("orange");
    f3.display();

    fill("yellow");
    f4.display();

    fill("red");
    f5.display();

    fill("pink");
    f6.display();

    fill("orange");
    f7.display();

    fill("lightblue");
    f8.display();

    fill("lightgreen");
    f9.display();

    fill("red");
    f10.display();

    fill("white");
    f11.display();

    fill("green");
    f12.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(weight.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    //Chain.fly();
}