const videoSection = document.querySelector('.videoSec');

videoSection.addEventListener('mouseenter', ()=>{
    gsap.to('.videoSec span', {
        scale: 1,
        opacity: 1,
        duration: 0.5,
    })
})
videoSection.addEventListener('mouseleave', ()=>{
    gsap.to('.videoSec span', {
        scale: 0.4,
        opacity: 0,
        duration: 0.5,
    })
})

videoSection.addEventListener('mousemove', (e)=>{
    gsap.to('.videoSec span', {
        left: e.x - 50,
        top: e.y - 50,
        duration: 0.5,
    })
})