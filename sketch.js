const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var world,engine
var maxDrops=100;
var drops=[];
var boy1_image,boy;
var ground;
var thunder,th1,th2,th3,th4,t1,t2,t3,t4;
function preload(){
    boy1_image=loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png"
    ,"walking_5.png","walking_6.png"
    ,"walking_7.png","walking_8.png");
  th1=loadImage('1.png')
  th2=loadImage('2.png')
  th3=loadImage('3.png')
  th4=loadImage('4.png')
}

function setup(){
   createCanvas(800,700)
   engine=Engine.create()
   world=engine.world;
   boy = new Boy(400,500,100,250);
   thunder = createSprite(400,50,10,30);
   thunder.addImage("th1",th1);
   thunder.visible=false; 
}

function draw(){
background(0);
Engine.update(engine)
boy.display();
drops.push(new Drop(random(0,800),0,5))
for(var i=0; i<drops.length; i++){
    drops[i].display();
}
if(keyWentDown("space")){
  thunder.visible=true;
}
if(keyWentUp("space")){
  thunder.visible=false;
}
 
 drawSprites();
}   
 