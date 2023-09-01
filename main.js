let x ;
let y ;
let z ;
document.getElementById("startBtn").onclick = function(){
  //random number
  x = Math.floor(Math.random() *6) + 1;
  y = Math.floor(Math.random() *6) + 1;
  z = Math.floor(Math.random() *6) + 1;
  document.getElementById("xlabel").textContent = x;
  document.getElementById("ylabel").textContent = y;
  document.getElementById("zlabel").textContent = z;

  // Array of image URLs
  const imageUrls = [
    "img/image-1.png",
    "img/image-2.png",
    "img/image-3.png",
    "img/image-4.png",
    "img/image-5.png",
    "img/image-6.png",
  ];

  // Select the corresponding image based on the random numbers
  const xImageSrc = imageUrls[x - 1];
  const yImageSrc = imageUrls[y - 1];
  const zImageSrc = imageUrls[z - 1];

  // Update the image sources
  document.getElementById("xImg").src = xImageSrc;
  document.getElementById("yImg").src = yImageSrc;
  document.getElementById("zImg").src = zImageSrc;
};



