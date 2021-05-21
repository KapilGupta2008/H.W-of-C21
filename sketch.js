var movingRect, fixedRect,movingRect2, movingRect3;
var Boundry1, Boundry2, Boundry3, Boundry4;


function setup() {
    createCanvas(800, 500);
    fixedRect = createSprite(200, 300, 70, 40);
    fixedRect.shapeColor = "blue";
   fixedRect.velocityX = 2;
    movingRect = createSprite(700, 300, 70, 40);
    movingRect.shapeColor = "orange";
    movingRect.velocityX = -2;
    movingRect2 = createSprite(600, 200, 70, 40);
    movingRect2.shapeColor = "orange";
    movingRect2.velocityX = -2;
    movingRect3 = createSprite(600, 100, 70, 40);
    movingRect3.shapeColor = "orange";
    //movingRect3.velocityX = -2;
    Boundry1 = createSprite(500, 490, 1000,1);
    Boundry2 = createSprite(795, 250, 1,1000);
    Boundry3 = createSprite(5, 250, 1,1000);
    Boundry4 = createSprite(500, 10, 1000,1);

}


function draw() {
    background(0);
    movingRect.x=mouseX;
    movingRect.y=mouseY;
   
/*if(isTouching())
{
    fixedRect.shapeColor = "White";
    movingRect.shapeColor = "white";
}
else
{
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";   
}*/

bounceOff(movingRect,fixedRect);

isTouching(movingRect2,movingRect);

drawSprites();
}


function isTouching(a,b)
{
    if (a.x - b.x <= a.width / 2 + b.width / 2 &&
        b.x - a.x <= a.width / 2 + b.width / 2 &&
        a.y - b.y <= a.height / 2 + b.height / 2 &&
        b.y - a.y <= a.height / 2 + b.height / 2) {
        b.shapeColor = "White";
       a.shapeColor = "white";
        
    }
    
    else {
        b.shapeColor = "blue";
        a.shapeColor = "blue";
        
    }

}

function bounceOff(a,b)
{
    if (a.x - b.x <= b.width / 2 + b.width / 2 &&
        b.x - a.x <= a.width / 2 + b.width / 2) {
        b.velocityX = b.velocityX * (-1);
        a.velocityX = a.velocityX * (-1);

    }
    if (a.y - fixedRect.y <= a.height / 2 + b.height / 2 &&
        b.y - a.y <= a.height / 2 + b.height / 2) {
        b.velocityY = b.velocityY * (-1);
        a.velocityY = a.velocityY * (-1);
    }
}