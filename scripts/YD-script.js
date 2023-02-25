let tu = [
  "/images/崩坏3六周年.png",
  "/images/a50f4bfbfbedab64dd1668b8f136afc379311e65.jpg",
  "/images/5ecce26be24fb.jpg",
  "/images/R-C (1).png",
  "/images/R-C (2).png",
  "/images/Hd086109cbe784d1b9156d335026b761f0.jpg",
];
let i0 = 0;
let img0 = document.getElementById("img0");
function S() {
  if (i0 < tu.length - 1) {
    i0 = i0 + 1;
    img0.src = tu[i0];
  } else {
    i0 = 0;
    img0.src = tu[i0];
  }
}
setInterval(S, 4000);
