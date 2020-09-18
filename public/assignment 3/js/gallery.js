const images = document.getElementById("images");
const lgImage = document.getElementById("lg-image");
const altText = document.getElementById("alt-text");
// create new array to store img properties
var arr = new Array();
images.querySelectorAll("*").forEach((img) => { // get img properties
  arr.push([img.src, img.alt]);
});

appendImg = (num) => { // display to large image with fading animation
  lgImage.style.opacity = 0;
  setTimeout(() => {
    lgImage.src = arr[num][0];
    lgImage.alt = arr[num][1];
    altText.textContent = arr[num][1];
    lgImage.style.opacity = 1;
  }, 200);
};

// remove large image on mouse out
removeImg = () => {
  lgImage.style.opacity = 0;
  setTimeout(() => {
    lgImage.src = "img/welcome.png";
    lgImage.alt = "Gallery";
    altText.textContent = "Gallery";
    lgImage.style.opacity = 1;
  }, 200);
};
