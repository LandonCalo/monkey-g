
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  // createCanvas(600, 600);
  


  var survivalTime=0;
  
  //creating monkey
   monkey=createSprite(80,315,20,20);
   monkey.addAnimation("moving", monkey_running);
  // monkey.addImage(bananaImage)
   monkey.scale=0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)

  FoodGroup = new Group();
 obstacleGroup = new Group();
  score = 0;
 
  
}


function draw() {
  
  background(255);
  
    
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  
  
   
    if(keyDown("space")&& monkey.y>314) {
      monkey.velocityY = -18;
    }
    monkey.velocityY = monkey.velocityY + 0.8;
  
    monkey.collide(ground);   
    spawnFood();
  spawnrock();
 
  drawSprites();
      
  
  
}



function spawnFood() {
  //write code here to spawn the Food
  if (frameCount % 80 === 0) {
    banana = createSprite(600,250,40,10);
    banana.y = random(120,200);    
    banana.velocityX = -5;
    
     //assign lifetime to the variable
    banana.lifetime = 300;
    monkey.depth = banana.depth + 1;
    
    //add image of banana
     banana.addImage(bananaImage);
     banana.scale=0.05;
    
    //add each banana to the group
    FoodGroup.add(banana);
  }
}
function spawnrock() {
  //write code here to spawn the Food
  if (frameCount % 80 === 0) {
    rock = createSprite(600,330,40,10);
       
    rock.velocityX = -5;
    
     //assign lifetime to the variable
    rock.lifetime = 300;
   
    
    //add image of banana
     rock.addImage(obstacleImage);
     rock.scale=0.1;
    
    //add each banana to the group
    obstacleGroup.add(rock);
  }
}
