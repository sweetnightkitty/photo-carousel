import "./styles.css";
import { updateIndex } from "./carousel";
import { hidePhotos } from "./carousel";
import { resetDots } from "./carousel";
import { showCurrentPhoto } from "./carousel";
import { autoScrollPhotos } from "./carousel";
import { dots } from "./carousel";

const previous = document.querySelector(".btn-previous");
const next = document.querySelector(".btn-next");

showCurrentPhoto(); //Shows the starting default image of the carousel

setInterval(autoScrollPhotos, 5000); //Carousel moves automatically every 5 seconds

//Runs carousel one image to the left when left arrow is clicked
previous.addEventListener("click", () => {
  updateIndex("previous");
  hidePhotos();
  resetDots();
  showCurrentPhoto();
});

//Runs carousel one image to the right when right arrow is clicked
next.addEventListener("click", () => {
  updateIndex("next");
  hidePhotos();
  resetDots();
  showCurrentPhoto();
});

//Moves carousel to the image selected, when user clicks on a dot instead of an arrow
for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", () => {
    //Accounts for the fact photosIndex by default starts at 1 whereas dots[i] will start at 0.
    updateIndex(i + 1);
    hidePhotos();
    resetDots();
    showCurrentPhoto();
  });
}
