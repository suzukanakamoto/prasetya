// Slider //
let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("slide");

  if (n >= slides.length) { 
    slideIndex = 0; 
  }
  if (n < 0) { 
    slideIndex = slides.length - 1; 
  }

  // Remove "active" class from all slides and hide them
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    slides[i].style.display = "none";
  }

  // Show the current slide and add the "active" class
  slides[slideIndex].style.display = "block";
  setTimeout(() => {
    slides[slideIndex].classList.add("active");
  }, 10); // Adding slight delay to ensure transition effect kicks in
}

// Optional: Auto slide
setInterval(() => { plusSlides(1) }, 5000); // Change slide every 5 seconds
