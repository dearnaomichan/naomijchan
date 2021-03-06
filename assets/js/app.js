// $( document ).on( "mousemove", function( event ) {
//     $('.cursor').css({
//       left: event.pageX,
//       top: event.pageY
//     });
//   });


function setup() {
  var canvas = createCanvas(80, 60, WEBGL);

  // Move the canvas so it’s inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder');
}

function draw() {
  // background('');
  orbitControl()
  normalMaterial();

  ambientLight(0, 0, 255);
  ambientMaterial(255);

  let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2;
  directionalLight(252,221,93, -dirX, -dirY, -1);

  sphere(25)
}


  // $(document)
  // .mousemove(function(e) {
  //   $('.cursor')
  //     .eq(0)
  //       .css({
  //         left: e.pageX,
  //         top: e.pageY
  //       });
  //   });
  // $(document).on("mousemove", function(e) {
  //   mouseX = e.pageX;
  //   mouseY = e.pageY;
  // });

// MARQUEE

$('.marquee-home').marquee({
  duration: 10000,
  //gap in pixels between the tickers
  // gap: 100,
  //time in milliseconds before the marquee will start animating
  delayBeforeStart: 0,
  //'left' or 'right'
  direction: 'left',
  //true or false - should the marquee be duplicated to show an effect of continues flow
  duplicated: true
});
$('.marquee').marquee({
  //speed in milliseconds of the marquee
  duration: 5000,
  //gap in pixels between the tickers
  gap: 300,
  //time in milliseconds before the marquee will start animating
  delayBeforeStart: 0,
  //'left' or 'right'
  direction: 'left',
  //true or false - should the marquee be duplicated to show an effect of continues flow
  duplicated: true
});


// ✨ HOVER AND IMG APPEARS - HOME

//
// $('.preview').mouseover(function(){
//   $('.project-title ', this).css('opacity', '100')
// }).mouseleave( function(){
//   $('.project-title ', this).css('opacity', '0')
// });
