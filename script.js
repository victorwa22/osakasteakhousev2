let slideIndex = 0;
let slideIndexg= 0;
let intervalID;
const slides = document.querySelectorAll(".slide");
const slideshowContainer = document.querySelector(".slideshow-container");
let slideshowRunning = false;

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


/*slideshowContainer.addEventListener("mouseover", () => {
  clearInterval(intervalID);
});

slideshowContainer.addEventListener("mouseout", () => {
  intervalID = setInterval(() => {
    changeSlide(1);
  }, 5000);
});*/

function mouseoutss() {
  intervalID = setInterval(() => {
    changeSlide(1);
  }, 5000);
}
function mouseoverss() {
  clearInterval(intervalID);
}




function startSlideshow() {
  if (!slideshowRunning) { 
  intervalID = setInterval(() => {
    changeSlide(1);
  }, 5000);
  slideshowRunning = true;
 
 
}

}

function stopSlideshow() {
  if (slideshowRunning){
    clearInterval(intervalID);
    slideshowRunning = false;
    
  } 

}


function checkScreenSize() {
  if (window.innerWidth < 990) {
    stopSlideshow();
    slideshowContainer.removeEventListener("mouseover", mouseoverss
    );
    
    slideshowContainer.removeEventListener("mouseout", mouseoutss
    );
   
    
    } 
  else {
    startSlideshow();
    slideshowContainer.addEventListener("mouseover", mouseoverss
    );
    
    slideshowContainer.addEventListener("mouseout", mouseoutss
    );
   
  }
}


// Automatic slideshow
checkScreenSize();
window.addEventListener("resize", checkScreenSize);
showSlide(slideIndex);












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






