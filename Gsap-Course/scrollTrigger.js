gsap.from("#page1 .box", {
  scale: 0,
  delay: 1,
  duration: 2,
  scrollTrigger: "#page1 .box",
});

gsap.from("#page2 .box", {
  scale: 0,
  delay: 1,
  duration: 1,
  //   scrollTrigger: "#page2 .box",
  scrollTrigger: {
    trigger: "#page2 .box",
    scrollers: "body",
    start: "top 60%",
  },
});

gsap.from("#page2 .box", {
  scale: 0,
  opacity: 0,
  duration: 0.5,
  delay: 0.2,
  scrollTrigger: {
    trigger: "#page2 .box",
    scroller: "body",
    markers: true,
    start: "top 50%",
    end: "top 30%",
    scrub: 2,
  },
});

gsap.to("#page2 h1", {
  transform: "translateX(-70%)",
  duration: 1,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    start: "top 0%",
    end: "top -150%",
    scrub: 2,
    pin: true,
  },
});

gsap.from("#page3 h1", {
  opacity: 0,
  y: -50,
  duration: 0.5,
  delay: 0.3,
  scrollTrigger: {
    trigger: "#page3 h1",
    scroller: "body",
    marker: true,
    start: "top 70%",
    end: "top 80%",
    scrub: 2,
  },
});

gsap.from("#page3 h2", {
  opacity: 0,
  x: -50,
  duration: 0.5,
  delay: 0.3,
  scrollTrigger: {
    trigger: "#page3 h2",
    scroller: "body",
    marker: true,
    start: "top 70%",
    end: "top 80%",
    scrub: 2,
  },
});
