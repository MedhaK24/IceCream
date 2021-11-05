const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup() {
  createCanvas(1200, 400);
  engine = Engine.create(); world = engine.world;
  ground = new Ground(600, 390, 1200, 10);
  platform = new Ground(900,300,300,10)

  icecream1 = new IceCream(760,280,50,50)
  icecream2 = new IceCream(810,280,50,50)
  icecream3 = new IceCream(860,280,50,50)
  icecream4 = new IceCream(910,280,50,50)
  icecream5 = new IceCream(960,280,50,50)
  icecream6 = new IceCream(1010,280,50,50)
  icecream7 = new IceCream(760,230,50,50)
  icecream8 = new IceCream(810,230,50,50)
  icecream9 = new IceCream(860,230,50,50)
  icecream10 = new IceCream(910,230,50,50)
  icecream11 = new IceCream(960,230,50,50)
  icecream12 = new IceCream(1010,230,50,50)
}

function draw() {
  background("black");

  ground.display();
  platform.display();
  icecream1.display(); 
  icecream2.display();  
  icecream3.display();     
  icecream4.display();     
  icecream5.display();     
  icecream6.display(); 
  icecream7.display(); 
  icecream8.display();  
  icecream9.display();     
  icecream10.display();     
  icecream11.display();     
  icecream12.display();    
}
