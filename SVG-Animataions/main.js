var path = `M 10 100 Q 500 100 990 100`;
var finalPath = `M 10 100 Q 500 10 990 100`;

var string = document.querySelector(".string");

string.addEventListener("mousemove", function (dets) {
  path = `M 10 250 Q ${dets.x} ${dets.y} 1490 250`;
  console.log(dets.y);
  gsap.to("svg path", {
    attr: {
      d: path,
    },
    duration: 0.5,
    ease: "power3.out",
  });
});

string.addEventListener("mouseleave", function () {
  path = `M 10 250 Q 750 250 1480 250`;
  gsap.to("svg path", {
    attr: {
      d: path,
    },
    duration: 0.7,
    ease: "elastic.out(1, 0.2)",
  });
});
