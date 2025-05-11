const scroll = new LocomotiveScroll({
  el: document.querySelector('.main'),
  smooth: true
});

const playCursr = () => {
  const videoSection = document.querySelector(".videoSec");

  gsap.from(videoSection,{
    y: 100,
    opacity: 0,
    scale: 0.5,
    duration: 1.5,
    ease: "power3.out",
  })

  videoSection.addEventListener("mouseenter", () => {
    gsap.to(".videoSec span", {
      scale: 1,
      opacity: 1,
      duration: 0.5,
    });
  });
  videoSection.addEventListener("mouseleave", () => {
    gsap.to(".videoSec span", {
      scale: 0.4,
      opacity: 0,
      duration: 0.5,
    });
  });

  videoSection.addEventListener("mousemove", (e) => {
    const rect = videoSection.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    gsap.to(".videoSec span", {
      left: x,
      top: y,
      duration: 0.5,
    });
  });
};
const headerText = ()=>{
    gsap.from('.headerM span',{
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power3.out",
    })
}
const btnanimation = () =>{
    const btN = document.querySelector('.btnAnime');
    const tl = gsap.timeline()
    btN.addEventListener('mouseenter', ()=>{
        console.log('he');
        

        tl.to('.btnAnime .one',{
            left: 300,
            opacity:0,
            duration: 0.5,
        })
        tl.from('.btnAnime .two',{
            opacity:1,
            right: 300,
            duration: 0.5,
        })
    })
    
}



headerText();
playCursr();
btnanimation();