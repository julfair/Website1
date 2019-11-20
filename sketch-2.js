let angle = 0;
let resolution = 60;
let heightColumn = 800;
angle2 = 0;
let r = 200;
let xAngle = 0;


let twodarray = [
                  [3,2,5]
                  [3,4,5,6]
                  [2,3]
  
                  ];

function setup() {
 
createCanvas(1200,720, WEBGL); 

}

function draw() {
  background(55);
  
  orbitControl();
  
pointLight(255, 255, 255, 255, 255);
  
 for(let j = 0; j < resolution-10; j++){

  for(let i = 0; i < resolution; i++){
  
  let x = r* sin(angle)*cos(angle2);
     let y = r* sin(angle)*sin(angle2);
    let z = r* cos(angle);
    

    
  
    push()
    translate(x,y, z);
    sphere(10);
    pop()

    angle+=TWO_PI/resolution; 
  } 
  angle2+=PI/resolution;
 }
}