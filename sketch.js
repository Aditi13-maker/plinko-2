const Constraint=Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var gameState="play"
var particles=[];
var plinkos=[]
var divisions=[]
var score=0
var divisionHeight=600;

function setup() {
  createCanvas(480,800);
 divisionHeight=350
 engine=Engine.create()
 world=engine.world
//divisions=new Divisions(k,k,400,10)
//plinkos=new Plinkos(j,j,10)

for(var k=6;k<=innerWidth;k=k+80){
  divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
    
  }
  for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,75));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,175));
  }

   for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,275));
  }

   for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,375));
  }

  
  ground=new Ground(240,795,480,10)
//for(var j=40;j<=width;j=j+5){
 // plinkos.push(new Plinko(j,75));
//}


}

function draw() {
  background("black");  

  fill("black")
  stroke(3)
  text("Score:"+score,740,40)
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-30, width/2+30), 10,10));
    score++;
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    
    divisions[k].display();
  }

ground.display()
 
if(particles!=null){
  particles.display()
  if(particles.body.position.x<300){
    score=score+500;
    particles=null
    if(count>=5)gameState="end"
  }
}

if(particles!=null){
  particles.display()
  if(particles.body.position.x>301&&particles.body.position.x<600){
    score=score+100;
    particles=null
    if(count>=5)gameState="end"
  }
}

if(particles!=null){
  particles.display()
  if(particles.body.position.x>601&&particles.body.position.x<900){
    score=score+200;
    particles=null
    if(count>=5)gameState="end"
  }
}

}

function mousePressed(){
  if(gameState!=="end"){
    count++
    particle=new Particles(mouseX=10,10,10)
  }
}