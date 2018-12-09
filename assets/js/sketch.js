
var portrait;
function preload(){
  portrait = loadImage('assets/img/portrait.jpg')
}
function setup() {
  var cnv = createCanvas(windowWidth/2,windowHeight, WEBGL)
  cnv.parent('p5-container');
}

function draw() {
  background(0)
  strokeWeight(0)
  fill('green')

  var mY = -mouseY * .001;
  var mX = mouseX * .001;
  // console.log(mY)
  // rotateZ(frameCount * 0.001);
  rotateX(mX);
  rotateY(mY);
  texture(portrait);
  // sphere(200)
  box(150, 150, 1)
}
