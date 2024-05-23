const main = document.querySelector(".main");
const cursor = document.querySelector("#cursor");
var img = document.querySelector("#img");

main.addEventListener("mousemove", function (e) {
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
    duration: 1,
    ease: "back.out",
  });
});

img.addEventListener("mouseenter", () => {
  cursor.innerHTML = "view more";
  gsap.to(cursor, {
    scale: 3,
    duration: 1,
    ease: "elastic.out",
    opacity: 0.8,
  });
});

img.addEventListener("mouseleave", () => {
  console.log("mouseleave");
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
    duration: 1,
    opacity: 1,
    ease: "elastic.out",
  });
});
