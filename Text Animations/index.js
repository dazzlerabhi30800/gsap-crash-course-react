const heading = document.querySelector('h1');
const h1Text = heading.textContent;

const splitTxt = h1Text.split('');


let clutter = '';

var halfValue = Math.floor(splitTxt.length / 2);

splitTxt.forEach((char, idx) => {
    if (idx < halfValue) {
        clutter += `<span class="a" style="${char === " " ? "margin: 0 10px" : ""}">${char}</span>`;
    }
    else {
        clutter += `<span class="b" style="${char === " " ? "margin: 0 10px" : ""}">${char}</span>`;
    }
})

heading.innerHTML = clutter;

gsap.from("h1 .a", {
    y: 80,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    stagger: 0.2,
    ease: "back.out"
})


gsap.from("h1 .b", {
    y: 80,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    stagger: -0.2,
    ease: "back.out"
})