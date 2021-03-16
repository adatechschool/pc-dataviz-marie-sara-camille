// Made with Zdog

const TAU = Zdog.TAU;
const offWhite = '#FED';
const gold = '#EA0';
const garnet = '#C25';
const eggplant = '#636';

//Bonhomme à gauche

const illo = new Zdog.Illustration({
  element: '#zdog-canvas',
  zoom: 15,
}); 

// ----- model ----- //

var head = new Zdog.Shape({
  addTo: illo,
  //On a mis stroke: 22 et ça a fait un carré
  stroke: 12,
  color: gold,
  translate:{x:-15, y:10}
}); 

var eye = new Zdog.Ellipse({
  addTo: head,
  diameter: 2,
  quarters: 2,
  //position x et y de l'oeil gauche
  translate: { x: -2, y: 1, z: 4.5 },
  //sens de rotation de l'oeil gauche
  rotate: { z: -TAU/4 },
  color: eggplant,
  //épaisseur sourcils
  stroke: 0.5,
}); 
//oeil droit
eye.copy({
  translate: { x: 2, y: 1, z: 4.5 },
}); 
// smile
new Zdog.Ellipse({
  addTo: head,
  diameter: 3,
  //Les 2/4 d'un rond:
  quarters: 2,
  translate: { y: 2.5, z: 4.5 },
  rotate: { z: TAU/4 },
  //forme de la bouche:
  closed: true,
  color: '#FED',
  stroke: 0.5,
  fill: true,
});
 
//Bonhomme à droite
// ----- model ----- //

var head2 = new Zdog.Shape({
  addTo: illo,
  //On a mis stroke: 22 et ça a fait un carré
  stroke: 12,
  color: gold,
  translate: { x:15, y:10},
}); 

var eye2 = new Zdog.Ellipse({
  addTo: head2,
  diameter: 2,
  quarters: 2,
  //position x et y de l'oeil gauche
  translate: { x: -2, y: 1, z: 4.5 },
  //sens de rotation de l'oeil gauche
  rotate: { z: -TAU/4 },
  color: eggplant,
  //épaisseur sourcils
  stroke: 0.5,
}); 
//oeil droit
eye2.copy({
  translate: { x: 2, y: 1, z: 4.5 },
}); 
// smile
new Zdog.Ellipse({
  addTo: head2,
  diameter: 3,
  //Les 2/4 d'un rond:
  quarters: 2,
  translate: { y: 2.5, z: 4.5 },
  rotate: { z: TAU/4 },
  //forme de la bouche:
  closed: true,
  color: '#FED',
  stroke: 0.5,
  fill: true,
});

//fonction d'affichage
function animate() {
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}

animate();   