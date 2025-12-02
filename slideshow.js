// slideshow.js

// 1) Put your photo filenames in this array.
//    They must exist under the /photos folder.
const imageSources = [
  "photos/A Hinderance No More.png",
  "photos/Breakfast of Beer Pong Champoions.png",
  "photos/The Perfect Fathers Xoco.png",
  "photos/The Light at the End of the Night.png",
  "photos/The Shmee.png",
  "photos/Coconut Bartender.png",
"photos/Funcledaze.png",
  "photos/Funclescrumptious.png",
  "photos/Holy Ratrimony.png",
  "photos/IPAssum & Friends.png",
  "photos/Neanderthalitan Stout.png",
  "photos/Purpaul Drank_1.png",
  "photos/Resonance in the Funcleverse.png",
  "photos/Road to Funclerado.png",
  "photos/Scream It.png",
  "photos/Slave to the Check-ins.png",
  "photos/Smooth Criminals.png",
  "photos/The Beer of Beers.png",
  "photos/Three Hos.png",
  // Add more here as needed
];

// How long each photo is displayed (milliseconds)
const DISPLAY_TIME = 1200; // 1.2 seconds

// How long between fade-out and the new image showing (ms)
const FADE_BUFFER = 250;

let imgEl = null;
let currentIndex = -1; // -1 means "none shown yet"

// Pick a random index, but don't repeat the one we just showed
function getRandomNextIndex() {
  if (imageSources.length <= 1) return 0;

  let nextIndex;
  do {
    nextIndex = Math.floor(Math.random() * imageSources.length);
  } while (nextIndex === currentIndex);

  return nextIndex;
}

function showImage(index) {
  if (!imgEl || !imageSources.length) return;

  imgEl.classList.remove("show");

  setTimeout(() => {
    const src = imageSources[index];
    imgEl.src = src;

    imgEl.onload = () => {
      requestAnimationFrame(() => {
        imgEl.classList.add("show");
      });
    };
  }, FADE_BUFFER);
}

function startSlideshow() {
  imgEl = document.getElementById("photo-slide");
  if (!imgEl || !imageSources.length) return;

  // First image
  currentIndex = getRandomNextIndex();
  showImage(currentIndex);

  // Every DISPLAY_TIME, pick a new random image (not the same as last)
  setInterval(() => {
    currentIndex = getRandomNextIndex();
    showImage(currentIndex);
  }, DISPLAY_TIME);
}

document.addEventListener("DOMContentLoaded", startSlideshow);
