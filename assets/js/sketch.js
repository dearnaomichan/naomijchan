function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('sketch-holder');
  // frameRate(15)
}
function draw() {
  // background('#F8F8F8')
  fill('#F8F8F8')
  ellipse(mouseX,mouseY,50);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function mousePressed() {
background('#F8F8F8')
}
