
function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('sketch-holder');
  // frameRate(15)

}
function draw() {
  var x = mouseX;
  var y = mouseY;
  var ix = width - mouseX;  // Inverse X
  var iy = height - mouseY; // Inverse Y
  // background('#F8F8F8');
  // stroke(0, 100)
  fill(255, 150);
  ellipse(x, height/2, y, y);
  fill(80, 150);
  ellipse(ix, height/2, iy, iy);
  //
  // fill('#F8F8F8')
  // ellipse(mouseX,mouseY,20);

  // rect(windowWidth-100,windowHeight-200,100,100)
  //
  // fill('black')
  // rect(windowWidth-100,windowHeight-100,100,100)
  //
  // floor(ellipseSize+=2);
  // if (ellipseSize>=100){
  //   ellipseSize=20
  // }
  // console.log(ellipseSize)
}

function mouseClicked(){
}
// function mousePressed() {
//   // Check if mouse is inside the circle
//   var d = dist(mouseX, mouseY, windowWidth-100,windowHeight-100);
//   if (d < 100) {
//     save('my-drawing-naomijchan-website.jpg');
//     return false
//   }
//   var c = dist(mouseX, mouseY, windowWidth-100,windowHeight-200);
//   if (c < 100) {
//     background('#F8F8F8')
//   }
//
// }
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function mousePressed() {
background('#F8F8F8')
}
