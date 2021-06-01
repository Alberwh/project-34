const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var hero,monster,rope,ground;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10
function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  
  b1 = new Box(600,350,50,50)
  b2 = new Box(600,300,50,50)
  b3 = new Box(600,250,50,50)
  b4 = new Box(600,200,50,50)
  b5 = new Box(600,150,50,50)
  b6 = new Box(600,100,50,50)
  b7 = new Box(600,50,50,50)
  b8 = new Box(600,0,50,50)
  b9 = new Box(700,350,50,50)
  b10 = new Box(700,300,50,50)
  
  
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();

  hero.display();
 // rope.display();
  monster.display();
  b1.display()
  b2.display()
  b3.display()
  b4.display()
  b5.display()
  b6.display()
  b7.display()
  b8.display()
  b9.display()
  b10.display()
  
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}
