var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imgdiv = document.querySelector("#image");

main.addEventListener("mousemove", (dets) => {
  //   console.log("event", dets);
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    // duration:1
    ease: "back.out",
    
  });
});

imgdiv.addEventListener("mouseenter", (dets) => {
  cursor.innerHTML = "View more";
  gsap.to(cursor, {
    scale: 5,
    backgroundColor:"#fffff8a"
  });
  gsap.to("#image img",{
    // scale:1.2,
    filter:"grayscale(100%)",
    duration:1
  })
});
imgdiv.addEventListener("mouseleave", (dets) => {
    cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
    backgroundColor:"#fff"
  });
  gsap.to("#image img",{
    // scale:1,
    filter:"none",
    // duration:2
  })
});
