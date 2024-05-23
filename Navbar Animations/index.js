var tl = gsap.timeline();
const close = document.querySelector('#full i');
const menu = document.querySelector('#nav i');

tl.to('#full', {
    right: 0,
    duration: 0.5,
    // ease: "back.out"
})


tl.from('#full h4', {
    x: 150,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3,
    ease: "back.out"
})


tl.from("#full i ", {
    y: -100,
    opacity: 0,
    duration: 0.3,
})

tl.pause();

close.addEventListener('click', () => {
    tl.reverse(0.9);
})
menu.addEventListener('click', () => {
    tl.play();
})