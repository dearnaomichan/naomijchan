// $( document ).on( "mousemove", function( event ) {
//     $('.cursor').css({
//       left: event.pageX,
//       top: event.pageY
//     });
//   });


  $(document)
  .mousemove(function(e) {
    $('.cursor')
      .eq(0)
        .css({
          left: e.pageX,
          top: e.pageY
        });
    });
  $(document).on("mousemove", function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
  });

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
