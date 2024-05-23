var tl = gsap.timeline();
function pageOneAnimation() {
  tl.from("nav h1, nav h4, .part2 button", {
    y: -50,
    delay: 0.5,
    opacity: 0,
    duration: 0.4,
    stagger: 0.15,
  });

  tl.from(
    ".center-part1 h1, .center-part1 p",
    {
      x: -300,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
    },
    "anim",
  );

  tl.from(
    " .center-part1 button",
    {
      opacity: 0,
      duration: 0.5,
    },
    "anim",
  );
  tl.from(
    ".center-part2 img",
    {
      x: 300,
      opacity: 0,
      duration: 0.5,
    },
    // "-=1",
    "anim", // this is to start all together with same name
  );

  tl.from(
    ".section1bottom img",
    {
      opacity: 0,
      y: 40,
      duration: 0.5,
      stagger: 0.2,
    },
    "anim",
  );
}

function pageTwoAnimation() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      start: "top 50%",
      end: "top 0%",
      scrub: 1,
    },
  });

  tl2.from(".services", {
    x: -100,
    opacity: 0,
    duration: 0.8,
  });

  tl2.from(".container .elem", {
    y: -100,
    opacity: 0,
    duration: 1.2,
    stagger: 0.4,
  });
}

pageOneAnimation();
pageTwoAnimation();
