let slideIndex = 0;
const slides = document.querySelectorAll(".slideshow img");

function showSlide(n) {
  slideIndex = (n + slides.length) % slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}

function changeSlide(n) {
    clearInterval(intervalID);
  showSlide(slideIndex + n);
  intervalID = setInterval(() => {
    changeSlide(1);
  }, 5000);
}

// Automatic slideshow
intervalID = setInterval(() => {
  changeSlide(1);
}, 5000);

// Show the initial slide
showSlide(slideIndex);




const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
       tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
        tab.classList.remove('active')
     })
        tab.classList.add('active')
        target.classList.add('active')
    })
})

const parentContainer = document.querySelector('.box');
parentContainer.addEventListener('click', event=>{
    const current = event.target;

    const isReadMoreBtn = current.className.includes('more');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.moreText');

    currentText.classList.toggle('moretext-show');

    current.textContent = current.textContent.includes('Read More')   ?
    "Read Less..." : "Read More..."
})


