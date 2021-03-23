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
  translate: { y: -0.5 },
  //sens de rotation de l'oeil gauche
  rotate: { z: -TAU / 4 },
  color: eggplant,
  stroke: 3,
});

var womanFringe = new Zdog.Ellipse({
  addTo: womanHead,
  diameter: 10,
  quarters: 2,
  translate: { y: -3 },
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
  translate: { x: -2, y: 1 },
  rotate: { z: -TAU / 4 },
  color: eggplant,
  //épaisseur sourcils
  stroke: 0.5,
});

var womanRightEye = womanLeftEye.copy({
  translate: { x: 2, y: 1 },
});

var womanSmile = new Zdog.Ellipse({
  addTo: womanHead,
  diameter: 3,
  quarters: 2,
  translate: { y: 2.5 },
  rotate: { z: TAU / 4 },
  //forme de la bouche:
  closed: true,
  color: "#FED",
  stroke: 0.5,
  fill: true,
});

var womanSmallBubble1 = new Zdog.Ellipse({
  addTo: illustration,
  diameter: 2,
  translate: { x: -18, y: -5 },
  stroke: 0.5,
  color: "#EA0",
});

var womanSmallBubble2 = womanSmallBubble1.copy({
  translate: { x: -19, y: -1 },
});

//Bonhomme à droite
// ----- model ----- //

var manHead = womanHead.copy({
  translate: { x: 25, y: 10 },
});

var manLeftEye = womanLeftEye.copy({
  addTo: manHead,
  translate: { x: -2, y: 1 },
});

var manRighteye = womanLeftEye.copy({
  addTo: manHead,
  translate: { x: 2, y: 1},
});

var manSmile = womanSmile.copy({
  addTo: manHead,
  translate: { y: 2.5 },
});

var manSmallBubble1 = womanSmallBubble1.copy({
  translate: { x: 22, y: -2 },
});

var manSmallBubble2 = womanSmallBubble1.copy({
  translate: { x: 24, y: 2 },
});

//fonction d'affichage

function animate() {
  requestAnimationFrame(animate);
  illustration.updateRenderGraph();
}
animate();

//récupérer données du json

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

    var compteur = 0;
    function next() {
      if (compteur < json.length) {
        console.log(json[compteur]);
        displayWoman(
          json[compteur].Médiane / 40,
          json[compteur].Médiane / 40,
          json[compteur].year,
          json[compteur].Médiane
        );
        displayMan(
          (100 - json[compteur].Médiane) / 40,
          (100 - json[compteur].Médiane) / 40,
          json[compteur].year,
          100 - json[compteur].Médiane
        );

        compteur++;
      }
    }

    setInterval(next, 1500);
  });

function displayWoman(x, y, year, data) {
  var node = document.getElementById("annee");
  node.innerHTML = year;

  let bulle = document.getElementById("bulle");
  bulle.animate(
    [
      // keyframes
      { transform: `scale(${x},${y})` },
    ],
    {
      // timing options
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );

  var pourcentage = document.getElementById("pourcentageF");
  pourcentage.innerHTML = data.toFixed(2) + "%";
}

function displayMan(x, y, year, data) {
  let bulleH = document.getElementById("bulleH");
  bulleH.animate(
    [
      // keyframes
      { transform: `scale(${x},${y})` },
    ],
    {
      // timing options
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );

  var pourcentageH = document.getElementById("pourcentageH");
  pourcentageH.innerHTML = data.toFixed(2) + "%";
}
