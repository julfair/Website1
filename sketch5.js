// harmonograph with two pendulums

var xt, yt;
var a1, a2, a3, a4;
var d1, d2, d3, d4, d5, d6;
var f1, f2, f3, f4, f5, f6;
var p1, p2, p3, p4;
var t = 0;


// var harmonograph2 = {
//     a1: 100,
//     a2: 50,
//     a3: 1,
//     a4: -200,
//     d1: 0.004,
//     d2: 2.0065,
//     d3: 7.008,
//     d4: 0.019,
//     f1: 5,
//     f2: 5,
//     f3: 2.98,
//     f4: 2.98,
//     p1: 0,
//     p2: 10,
//     p3: 15/2,
//     p4: 180/2*3,
// }

var harmonograph3 = {
    a1: 50,
    a2: 100,
    a3: 100,
    a4: 100,
    d1: 0.05,
    d2: 0.0165,
    d3: 0.008,
    d4: 0.019,
    f1: 5,
    f2: 5,
    f3: 2.98,
    f4: 0.98,
    p1: 0,
    p2: 0,
    p3: 10/4,
    p4: 360/2*3,
}
;

function setup() {
  createCanvas(1200,720);
  background(252, 232, 194);
  stroke(255);
  


}
//252, 194, 237

function draw(){  
  
  scale(1.5);
  
  drawGraph();
}

function drawGraph() {
  
  
// 	for (var i = 0; i < 24; i ++ ) {
// 	harmonograph2.xt = exp(-harmonograph2.d1*t)*sin(t*harmonograph2.f1+harmonograph2.p1)*harmonograph2.a1+exp(-harmonograph2.d2*t)*sin(t*harmonograph2.f2+harmonograph2.p2)*harmonograph2.a2,
// 	harmonograph2.yt = exp(-harmonograph2.d3*t)*sin(t*harmonograph2.f3+harmonograph2.p3)*harmonograph2.a3+exp(-harmonograph2.d4*t)*sin(t*harmonograph2.f4+harmonograph2.p4)*harmonograph2.a4
// 	point(width/2+harmonograph2.xt, height/2+harmonograph2.yt);
// 	t+=0.01;
// 	if (t > 520) {
// 	t = 0;
// 	}
// 	}
  
    translate(100,850);
rotate(250,0);


  
  stroke(255);
  translate(-50,150);
  rotate(100,50);
  	for (var i = 0; i < 24; i ++ ) {
    harmonograph3.xt = exp(-harmonograph3.d1*t)*sin(t*harmonograph3.f1+harmonograph3.p1)*harmonograph3.a1+exp(-harmonograph3.d2*t)*sin(t*harmonograph3.f2+harmonograph3.p2)*harmonograph3.a2,
  	harmonograph3.yt = exp(-harmonograph3.d3*t)*sin(t*harmonograph3.f3+harmonograph3.p3)*harmonograph3.a3+exp(-harmonograph3.d4*t)*sin(t*harmonograph3.f4+harmonograph3.p4)*harmonograph3.a4
    point(width/2+harmonograph3.xt, height/2+harmonograph3.yt);
    t+=0.01;
    if (t > 520) {
      t = 0;
    }
	}
  
}