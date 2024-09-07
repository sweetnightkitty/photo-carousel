//The first photo, by default is index 1
export let photosIndex = 1;

const photos = document.querySelectorAll(".carousel-photo");
export const dots = document.querySelectorAll(".dot");

export function autoScrollPhotos() {
    photosIndex++;
    resetIndex();
    hidePhotos();
    resetDots();
    showCurrentPhoto();
};

export function updateIndex(direction) {
    //Scrolls left or right depending on the button clicked
    if (direction == "previous") {
      photosIndex -= 1;
    } else if (direction == "next") {
      photosIndex += 1;
    }

    resetIndex();
  
    //If a dot is clicked instead of an arrow, assigns that value instead
    if (isNumber(direction)) {
      photosIndex = direction;
    }
  }


export function hidePhotos() {
  for (let i = 0; i < photos.length; i++) {
    photos[i].style.display = "none";
  }
}

export function resetDots() {
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
}

export function showCurrentPhoto() {
  photos[photosIndex-1].style.display = "block";
  dots[photosIndex-1].classList.add("active");
}

//Resets index value if user scrolls past the first or last image
export function resetIndex() {
  if (photosIndex < 1) {
    console.log("hi");
    photosIndex = photos.length;
  } else if (photosIndex > photos.length) {
    photosIndex = 1;
  };
};

function isNumber(value) {
    return typeof value === "number";
  }