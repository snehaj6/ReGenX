document.addEventListener("DOMContentLoaded", () => {
    const logos = document.querySelectorAll(".logo img"); // All logos
    const leftButton = document.querySelector(".btn.left");
    const rightButton = document.querySelector(".btn.right");

    let currentIndex = 0; // Start with the first logo
  
    // Function to update the active logo
    function updateActiveLogo() {
      logos.forEach((logo, index) => {
        if (index === currentIndex) {
          logo.classList.add("active"); // Highlight the active logo
        } else {
          logo.classList.remove("active"); // Remove highlight from others
        }
      });

      paragraphs.forEach((paragraph, index) => {
        if (index === currentIndex) {
          paragraph.style.display = "block"; // Show the paragraph for the active logo
        } else {
          paragraph.style.display = "none"; // Hide other paragraphs
        }
      });
    }
    
    // Navigate to the previous logo
    leftButton.addEventListener("click", () => {
      currentIndex -= 1;
      if (currentIndex < 0) {
        currentIndex = logos.length - 1; // Wrap to the last logo
      }
      updateActiveLogo();
    });
  
    // Navigate to the next logo
    rightButton.addEventListener("click", () => {
      currentIndex += 1;
      if (currentIndex >= logos.length) {
        currentIndex = 0; // Wrap to the first logo
      }
      updateActiveLogo();
    });
  
    // Initialize the first logo as active
    updateActiveLogo();
});


  
  
  
  
  