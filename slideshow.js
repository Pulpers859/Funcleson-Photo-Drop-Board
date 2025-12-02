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
const DISPLAY_TIME = 12000; // 12 seconds

// How long between fade-out and the new image showing (ms)
const FADE_BUFFER = 250;

let currentIndex = 0;
let imgEl = null;

function showImage(index) {
  if (!imgEl || !imageSources.length) return;

  // Fade out current image
  imgEl.classList.remove("show");

  setTimeout(() => {
    imgEl.src = imageSources[index];

    imgEl.onload = () => {
      // Ensure style changes apply after src swap
      requestAnimationFrame(() => {
        imgEl.classList.add("show");
      });
    };
  }, FADE_BUFFER);
}

function startSlideshow() {
  imgEl = document.getElementById("photo-slide");
  if (!imgEl || !imageSources.length) return;

  // Start with the first image
  currentIndex = 0;
  showImage(currentIndex);

  // Cycle through the rest
  setInterval(() => {
    currentIndex = (currentIndex + 1) % imageSources.length;
    showImage(currentIndex);
  }, DISPLAY_TIME);
}

document.addEventListener("DOMContentLoaded", startSlideshow);
