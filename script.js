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


