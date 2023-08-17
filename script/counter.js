const countingAnimation = () => {
  const numberContainers = document.querySelectorAll(".number-div");
  const durations = [2000, 2000, 2000]; // Animation durations for each number
  const frames = 60; // Number of frames in the animation

  const observerOptions = {
    threshold: 0.5, // Adjust the threshold as needed
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const container = entry.target;
        const index = Array.from(numberContainers).indexOf(container);
        const targetNumber = parseInt(container.textContent.replace(",", ""));
        const duration = durations[index];
        const increment = targetNumber / (duration / frames);
        let currentNumber = 0;

        const updateNumber = () => {
          currentNumber += increment;
          if (currentNumber >= targetNumber) {
            currentNumber = targetNumber;
            clearInterval(animationInterval);
          }
          container.textContent = Math.round(currentNumber).toLocaleString();
        };

        const animationInterval = setInterval(updateNumber, duration / frames);
        observer.unobserve(container);
      }
    });
  }, observerOptions);

  numberContainers.forEach((container) => {
    observer.observe(container);
  });
};

countingAnimation();
