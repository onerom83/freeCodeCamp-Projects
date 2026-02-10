const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const toClose = document.querySelector("#close-btn");
const pictureMain = document.querySelector("#lightbox-image");

galleryItems.forEach(function(item) {
  item.addEventListener("click", () => {
    lightbox.style.display = "flex";
    const newSrc = item.src.slice(0,-14)+ ".jpg";
    pictureMain.setAttribute("src", newSrc);
  });
});

lightbox.addEventListener("click", () => lightbox.style.display = "none");

toClose.addEventListener("click", () => lightbox.style.display = "none");

