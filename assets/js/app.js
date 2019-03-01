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
  duration: 10000,
  //gap in pixels between the tickers
  // gap: 100,
  //time in milliseconds before the marquee will start animating
  delayBeforeStart: 0,
  //'left' or 'right'
  direction: 'left',
  //true or false - should the marquee be duplicated to show an effect of continues flow
  // duplicated: true
});


// ✨ HOVER AND IMG APPEARS - HOME

function previewImg(num) {
	var out = $('.prevImg-wrapper #prevImg-' + num)
	return out
}

function projectLink(num) {
	var out = $(".work-grid .preview #project-link-"+ num )
	return out
}

function hoverShowImage(num){
  projectLink(num).mousemove(function(){
    previewImg(num, this).css({
      'display': 'inherit',
      'z-index': '1000',
    });
  }).mouseleave( function(){
    previewImg(num).css('display', 'none')
  });
}

hoverShowImage(1)
hoverShowImage(2)
hoverShowImage(3)
hoverShowImage(4)
hoverShowImage(5)
hoverShowImage(6)
