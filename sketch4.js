let r = 30;
let time= 0;


function setup() {
  createCanvas(1200,720);
  
  
}

function draw() {
  background(135, 179, 250, 10);
  
  for(let j= 0; j < height/r; j++){
    
  
  for(let i = 0; i < width/r; i++){
    
     
    let bigX = i * r;
    let bigY = j * r;
    
    const xAngle = map(0, 0, width, -4*PI, 4*PI, true);
    const yAngle = map(0, 0, width, -4*PI, 4*PI, true);
    
    const angle = (xAngle * (i/width)*7) + (yAngle *  (j/height)*8);

  
  
    
    
  noFill();
    // stroke(120);
    noStroke();
    ellipse(bigX, bigY, r*2);
    
    let x = bigX + r * cos(PI * time + angle);
    let y = bigY + r * sin(PI * time + angle);
    
    fill(255, 195, 135);
     stroke(250, 205, 247);
    ellipse(x,y,r/4);
    
    }
  }
  
  
  
  time+=0.015
  
  
  
}