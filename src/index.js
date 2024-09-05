import "./styles.css";
//The first photo, by default is index 1
let photosIndex = 1;

const photos = document.querySelectorAll(".carousel-photo");
const previous = document.querySelector(".btn-previous");
const next = document.querySelector(".btn-next");

//Updates index when the user scrolls pass the first, or last photo respectively in the carousel
if(photosIndex < 1) {
    photosIndex = photos.length;
} else if(photosIndex > photos.length) {
    photosIndex = 1;
}

previous.addEventListener("click", () => {
    console.log("previous");
})

next.addEventListener("click", () => {
    console.log("next");
})












