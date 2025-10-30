let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");  

  rockett = new rocket(1,1,1);
  ufo = new Ufo();
  loop();
})

function loop(){
  rockett.fly();
  
  window.requestAnimationFrame( loop );
}
