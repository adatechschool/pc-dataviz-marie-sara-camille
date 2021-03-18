// Made with Zdog

const TAU = Zdog.TAU;
const offWhite = "#FED";
const gold = "#EA0";
const garnet = "#C25";
const eggplant = "#636";

//Femme gauche

const illustration = new Zdog.Illustration({
  element: "#zdog-canvas",
  zoom: 15,
});

// ----- model ----- //
var womanHead = new Zdog.Shape({
  addTo: illustration,
  //On a mis stroke: 22 et ça a fait un carré
  stroke: 12,
  color: gold,
  translate: { x: -25, y: 10 },
});

var womanHair = new Zdog.Ellipse({
  addTo: womanHead,
  diameter: 14,
  quarters: 2,
  //position x et y de l'oeil gauche
  translate: { y: -0.5, z: 4.5 },
  //sens de rotation de l'oeil gauche
  rotate: { z: -TAU / 4 },
  color: eggplant,
  stroke: 3,
});

var womanFringe = new Zdog.Ellipse({
  addTo: womanHead,
  diameter: 10,
  quarters: 2,
  translate: { y: -3, z: 3 },
  rotate: { z: -TAU / 4 },
  closed: true,
  color: eggplant,
  stroke: 0.5,
  fill: true,
});

var womanBun = new Zdog.Ellipse({
  addTo: womanHead,
  diameter: 6,
  quarters: 2,
  translate: { y: -8 },
  rotate: { z: -TAU / 4 },
  //forme de la bouche:
  closed: true,
  color: eggplant,
  stroke: 0.5,
  fill: true,
});

var womanLeftEye = new Zdog.Ellipse({
  addTo: womanHead,
  diameter: 2,
  quarters: 2,
  translate: { x: -2, y: 1, z: 4.5 },
  rotate: { z: -TAU / 4 },
  color: eggplant,
  //épaisseur sourcils
  stroke: 0.5,
});

var womanRightEye = womanLeftEye.copy({
  translate: { x: 2, y: 1, z: 4.5 },
});

var womanSmile = new Zdog.Ellipse({
  addTo: womanHead,
  diameter: 3,
  quarters: 2,
  translate: { y: 2.5, z: 4.5 },
  rotate: { z: TAU / 4 },
  //forme de la bouche:
  closed: true,
  color: "#FED",
  stroke: 0.5,
  fill: true,
});

//Speech

// var womanBigBubble = new Zdog.RoundedRect({
//   addTo: illustration,
//   width: 20,
//   height: 10,
//   cornerRadius: 3,
//   translate: { x: -20, y: -13, z: 10 },
//   stroke: 0.5,
//   color: "#EA0",
//   dragRotate: true,
// });

var womanSmallBubble1 = new Zdog.Ellipse({
  addTo: illustration,
  diameter: 2,
  translate: { x: -18, y: -5, z: 10 },
  stroke: 0.5,
  color: "#EA0",
});

var womanSmallBubble2 = womanSmallBubble1.copy({
  translate: { x: -19, y: -1, z: 10 },
});

//Bonhomme à droite
// ----- model ----- //

var manHead = womanHead.copy({
  translate: { x: 25, y: 10 },
});

var manLeftEye = womanLeftEye.copy({
  addTo: manHead,
  translate: { x: -2, y: 1, z: 4.5 },
});

var manRighteye = womanLeftEye.copy({
  addTo: manHead,
  translate: { x: 2, y: 1, z: 4.5 },
});

var manSmile = womanSmile.copy({
  addTo: manHead,
  translate: { y: 2.5, z: 4.5 },
});

//Speech:
// var manBigBubble = womanBigBubble.copy({
//   translate: { x: 15, y: -10, z: 10 },
// });

var manSmallBubble1 = womanSmallBubble1.copy({
  translate: { x: 18, y: -2, z: 10 },
});

var manSmallBubble2 = womanSmallBubble1.copy({
  translate: { x: 20, y: 2, z: 10 },
});

//fonction d'affichage

function animate() {
<<<<<<< HEAD
=======
  var width = womanBigBubble.width;
  function updateWomanBigBubble() {
    //width = width + '%'
    width += 10
    if (width < 100) {
      
      requestAnimationFrame(animate);
    }
  }
>>>>>>> afb49259a55b5b33bb6ac7f53d22adea9ad77910
  illustration.updateRenderGraph();
  requestAnimationFrame(animate);
}
requestAnimationFrame(updateWomanBigBubble);
animate();

<<<<<<< HEAD
=======


>>>>>>> afb49259a55b5b33bb6ac7f53d22adea9ad77910
//récupérer données du json:
fetch("data.json", {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    //appeler ici la fonction du calcul du temps de parole des hommes
    console.log(json);
  });

//test animation bulles faitezs en css
document.getElementById("bulle").animate(
  [
    // keyframes
    { transform: "scale(2,2)" },
  ],
  {
    // timing options
    duration: 1000,
    iterations: Infinity,
  }
);

//compteur des années des data:

function printYear(year) {
  setInterval(function () {
    year = year + 1;
    document.write(year);
    document.write(" ");
    //document.body.innerHTML = " ";
  }, 2000);
}
// var annee = document.getElementById("annee");
// annee.innerHTML = printYear(1995);
printYear(1995);
