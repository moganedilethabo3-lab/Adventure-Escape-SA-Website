const galleryImages = document.querySelectorAll(".img-align, dog-name");


const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeButton = document.getElementById("closeLightbox");

if (galleryImages.length > 0 && lightbox && lightboxImage && closeButton) {
    galleryImages.forEach(function(image) {
     image.style.cursor ="pointer";

    image.addEventListener("click", function() {

        lightboxImage.src = image.src;
        lightboxImage.alt =image.alt;

        lightbox.style.display ="flex";
    });

});


  
    closeButton.addEventListener("click",function(){
        lightbox.style.display ="none";
    });
  

  lightbox.addEventListener("click", function(event){
    if (event.target ===lightbox) {
        lightbox.style.display ="none";
    }
  });

  document.addEventListener("keydown",function(event){
    if (event.key === "Escape"){
        lightbox.style.display= "none";
    }
  })
}