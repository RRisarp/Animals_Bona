
const bilder = [
  "giraffe.jpg",
  "elephant.jpg",
  "lion.jpg"
];

function draKort() {
  const slumpIndex = Math.floor(Math.random() * bilder.length);
  const bildFil = bilder[slumpIndex];
  const djurnamn = bildFil.substring(0, bildFil.lastIndexOf('.')).replace(/_/g, ' ');

  document.getElementById("kortbild").src = "kort/" + bildFil;
  document.getElementById("djurnamn").textContent = djurnamn.charAt(0).toUpperCase() + djurnamn.slice(1);
}
