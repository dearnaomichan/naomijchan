let num = 0;
let scalar;
let scalar2;


function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('sketch-holder');
  scalar = height/6
  // scalar2 = 400
}
function draw() {

  let ang1 = radians(num);
  let x1 = width / 2 + scalar * cos(ang1);
  let y1 = height / 2 + scalar * sin(ang1);

// reverse
  let x1r = width / 2 + scalar * sin(ang1);
  let y1r = height / 2 + scalar * cos(ang1);

  // let y2 = height / 2 + scalar2 * sin(ang1);

  // var x = mouseX;
  // var y = mouseY;
  // var ix = width - mouseX;  // Inverse X
  // var iy = height - mouseY; // Inverse Y

  fill('black')
  stroke('white')
  ellipse(x1, y1, mouseY/5);
  // ellipse(x1r, y1r, mouseY/6);
  // ellipse(x1, y2, width/100);

  num += 2;

  // console.log(x1 , y1)

  // background('#F8F8F8');
  // strokeWeight(2)
  // fill('rgba(0,0, 255, .5)');
  // fill('rgba(255, 0, 255, .5)');

  // rect(windowWidth-100,windowHeight-200,100,100)
  //
  // fill('black')
  // rect(windowWidth-100,windowHeight-100,100,100)
  // floor(ellipseSize+=2);
  // if (ellipseSize>=100){
  //   ellipseSize=20
  // }
  // console.log(ellipseSize)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function mousePressed() {
background('#F8F8F8')
}
