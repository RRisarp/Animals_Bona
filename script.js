
const bilder = [
  "Alpaca.jpg", "Bee.jpg", "Blue Whale.jpg", "Beaver.jpg", "Elephant.jpg", "Butterfly.jpg", "Bat.jpg",
  "Hippopotamus.jpg", "Flying_fish.jpg", "Giraffe.jpg", "Gorilla.jpg", "Badger.jpg", "Pike.jpg", "Wasp.jpg",
  "Dog.jpg", "Hyena.jpg", "Horse.jpg", "Hedgehog.jpg", "Polar_bear.jpg", "Jaguar.jpg", "Camel.jpg",
  "Chameleon.jpg", "Cat.jpg", "Kiwi.jpg", "Koala.jpg", "Hummingbird.jpg", "Raven.jpg", "Crab.jpg",
  "Crocodile.jpg", "Crow.jpg", "Kangaroo.jpg", "Lion.jpg", "Leopard.jpg", "Lynx.jpg", "Moth.jpg",
  "Groundhog.jpg", "Human.jpg", "Seagull.jpg", "Rhinoceros.jpg", "Ladybug.jpg", "Snake.jpg", "Oyster.jpg",
  "Peacock.jpg", "Reindeer.jpg", "Chimpanzee.jpg", "Sloth.jpg", "Beetle.jpg", "Magpie.jpg", "Scorpion.jpg",
  "Skunk.jpg", "Turtle.jpg", "Spider.jpg", "Stork.jpg", "Ostrich.jpg", "Meerkat.jpg", "Swan.jpg", "Seal.jpg",
  "Tapir.jpg", "Dragonfly.jpg", "Toucan.jpg", "Raccoon.jpg", "Owl.jpg", "Walrus.jpg", "Walking_stick.jpg",
  "Wolf.jpg", "Donkey.jpg", "Moose.jpg", "Wild_boar.jpg", "Roe deer.jpg", "Fox.jpg", "Wolverine.jpg",
  "Arctic_fox.jpg", "Ermine.jpg", "Mink.jpg", "Toad.jpg", "Frog.jpg", "Salmon.jpg", "Perch.jpg", "Puffin.jpg",
  "Dolphin.jpg", "Shark.jpg", "Starfish.jpg", "Jellyfish.jpg", "Octopus.jpg", "Squid.jpg", "Clownfish.jpg",
  "Angelfish.jpg", "Polar bear.jpg", "Penguin.jpg", "Killer whale.jpg", "Mammoth.jpg", "Tyrannosaurus_rex.jpg",
  "Centaur.jpg", "Phoenix.jpg", "Mermaid.jpg", "Unicorn.jpg", "Sphinx.jpg", "Griffin.jpg", "Dragon.jpg"
];

function draKort() {
  const slumpIndex = Math.floor(Math.random() * bilder.length);
  const bildFil = bilder[slumpIndex];
  const djurnamn = bildFil.substring(0, bildFil.lastIndexOf('.')).replace(/_/g, ' ');

  const bildElement = document.getElementById("kortbild");
  bildElement.src = "kort/" + bildFil;
  bildElement.style.display = "block";

  document.getElementById("djurnamn").textContent = djurnamn.charAt(0).toUpperCase() + djurnamn.slice(1);
}
