let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, Ascend = [], Crashing = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");  
  let x, y, z;
  for(let i = 0; i<100; i++){
      x = rnd(-50, 50);
      y = rnd(-150, -50);
      z = rnd(-50, 50);

      akol = new rocket(x, y, z);
      Ascend.push(akol);

  }

   for(let i =0; i<100; i++){
      x = rnd(-100, 100);
      y = rnd(50, 250);
      z = rnd(-100, 100);

      kola = new Ufo(x, y, z);
      Crashing.push(kola);

   }

  loop();
})

function loop(){
  for(let i = 0; i < Ascend.length; i++){
    Ascend[i].fly();
  }
  for(let i = 0; i < Crashing.length; i++){
    Crashing[i].fly();
  }
  window.requestAnimationFrame( loop );
}
