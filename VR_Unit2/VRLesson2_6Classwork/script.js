let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  
  mech = document.getElementById("mech-1");
  mech1 = new mech1(1,1,1);
  
  loop();
})
function loop(){


  window.requestAnimationFrame( loop );
}
