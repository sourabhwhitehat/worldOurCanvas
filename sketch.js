var drawing = [];
var currentPath = [];

function setup(){
    var canvas = createCanvas(500,500);
    canvas.mousePressed(startPath);
    
}

function startPath(){
    currentPath = [];
    drawing.push(currentPath);
}

function draw(){
    background(20);
    
    if(mouseIsPressed){
        var point ={
            x: mouseX,
            y: mouseY
        };
        currentPath.push(point);
    }
   
    stroke(250);
    strokeWeight(5);
    noFill();
    for(var i= 0; i<drawing.length; i++){
        var path = drawing[i];
        beginShape();
        for(var a= 0; a<path.length; a++){
         vertex(path[a].x, path[a].y);
        }
        endShape();
    }
   
  drawSprites();
}


     
