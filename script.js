let slideIndex = 0;
let slideIndexg= 0;
const slides = document.querySelectorAll(".slide");
const slidesg = document.querySelectorAll(".slideshowg img");

function showSlide(n) {
  slideIndex = (n + slides.length) % slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  slides[slideIndex].classList.add("active");
}



function changeSlide(n) {
  
  showSlide(slideIndex + n);
 
}




// Automatic slideshow
intervalID = setInterval(() => {
  changeSlide(1);
}, 5000);



// Stop the slideshow when the user hovers over the slideshow container
const slideshowContainer = document.querySelector(".slideshow-container");
slideshowContainer.addEventListener("mouseover", () => {
  clearInterval(intervalID);
});

// Resume the slideshow when the user moves the cursor out of the slideshow container
slideshowContainer.addEventListener("mouseout", () => {
  intervalID = setInterval(() => {
    changeSlide(1);
  }, 5000);
});

// Show the initial slide
showSlide(slideIndex);
showSlideg(slideIndexg);

function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};






