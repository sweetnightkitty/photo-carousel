import "./styles.css";
//The first photo, by default is index 1
let photosIndex = 1;

const photos = document.querySelectorAll(".carousel-photo");
const previous = document.querySelector(".btn-previous");
const next = document.querySelector(".btn-next");
const dots = document.querySelectorAll(".dot");

showCurrentPhoto(); //Shows the starting default image of the carousel

function updateIndex(direction) {
    //Scrolls left or right depending on the button clicked
    if(direction == "previous") {
        photosIndex -= 1;
    } else if(direction == "next") {
        photosIndex += 1;
    };

    //Resets index value if user scrolls past the first or last image
    if(photosIndex < 1) {
        photosIndex = photos.length;
    } else if(photosIndex > photos.length) {
        photosIndex = 1;
    } 

    //If a dot is clicked instead of an arrow, assigns that value
    if(isNumber(direction)) {
        photosIndex = direction;
    };
};


previous.addEventListener("click", () => {
    updateIndex("previous");
    hidePhotos();
    resetDots();
    showCurrentPhoto();

})

next.addEventListener("click", () => {
    updateIndex("next");
    hidePhotos();
    resetDots();
    showCurrentPhoto();
})


for(let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", () => {
        updateIndex((i + 1)); //Because Index by default begins at 1, whereas i starts at 0
        hidePhotos();
        resetDots();
        showCurrentPhoto();
    })
}



function hidePhotos() {
    for(let i = 0; i < photos.length; i++) {
        photos[i].style.display = "none";
    };
};

function resetDots() {
    for(let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    };
};

function showCurrentPhoto() {
    photos[photosIndex-1].style.display = "block";
    dots[photosIndex-1].classList.add("active");
};

function isNumber(value) {
    return typeof value === 'number';
};