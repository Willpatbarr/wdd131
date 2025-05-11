const heroImages = [
    "images/hero1.png",
    "images/hero2.png",
    "images/hero3.png"
  ];
  
  let currentImageIndex = 0;
  const heroImgEl = document.getElementById("hero-image");
  
  setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % heroImages.length;
    heroImgEl.src = heroImages[currentImageIndex];
  }, 1500); // rotates every 4 seconds
  