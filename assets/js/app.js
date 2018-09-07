$(document).ready(function () {
    var hhf = $(".hhf")
    var hhfImg = $(".hhf-img")
    var gpay = $(".gpay")
    var gpayImg = $(".gpay-img")
    var mono = $(".mono")
    var monoImg = $(".mono-img")
    var monodash = $(".monodash")
    var monodashImg = $(".monodash-img")
    var borrowedinterest = $(".borrowedinterest")
    var borrowedinterestImg = $(".borrowedinterest-img")
    var krylon = $(".krylon")
    var krylonImg = $(".krylon-img")

  function revealImage(project, imgClass){
    imgClass.hide();
    project.hover(function() {
      imgClass.toggle();
      return false;
    });
  }
    revealImage(hhf, hhfImg);
    revealImage(gpay, gpayImg);
    revealImage(mono, monoImg);
    revealImage(monodash, monodashImg);
    revealImage(borrowedinterest, borrowedinterestImg);
    revealImage(krylon, krylonImg);
});
