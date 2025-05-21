let valueDisplays = document.querySelectorAll(".counter-content .num");
let interval = 2000; // 2 seconds for the counting animation

// Add hover event listener to the main counter-section
document.querySelector(".counter-section").addEventListener("mouseover", () => {
  valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);

    // Reset the counter to 000 before starting the animation
    valueDisplay.textContent = "000";

    let counter = setInterval(function () {
      startValue += 1;
      valueDisplay.textContent = startValue;

      if (startValue == endValue) {
        clearInterval(counter);
      }
    }, duration);
  });
});
