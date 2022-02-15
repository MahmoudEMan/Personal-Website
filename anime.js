
function repeat(){
  anime({
    targets: '.function-based-values-demo .el',
    translateX:{
      value: function(el) {
        return el.getAttribute('data-x');
      },
      duration: 600,
      easing: 'easeInOutSine'
    },
    translateY: function(el, i) {
      return anime.random(-40,-100);
    },
    scale: function(el, i, l) {
      // console.log(l);
      // return (l - i) + .25;
      return anime.random(1.25,2.5)
    },
    rotate: {
      value: anime.random(180,360),
      duration: 1200,
      easing: 'easeInOutSine'
    },
    borderRadius: function() { return ['50%', anime.random(10, 35) + '%']; },
    duration: function() { return anime.random(800, 1200); },
    delay: function() { return 500 },
    direction: 'alternate',
    complete:function(){
      repeat()
    }
  });
}

repeat();

const overlayLayers = document.querySelectorAll(".overlay-layers");
const duration = 1800
const delayBetween = 150;
anime({
  targets: overlayLayers,
  translateY: '-100%',
  duration: duration,
  delay: function(el , i){
    return 500 + (i * delayBetween)
  },
  easing:"easeInBounce",
  complete: function() {
    document.querySelector('.overlay').style.display = 'none';
  }

});
