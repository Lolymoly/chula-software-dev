const descriptionDivs = document.querySelectorAll(".description-div");

const observerOptions = {
  threshold: 0.5, // Adjust the threshold as needed
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "none"; // Reset animation
      void entry.target.offsetWidth; // Trigger reflow
      entry.target.style.animation = "slideIn 1s forwards";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

descriptionDivs.forEach((div) => {
  observer.observe(div);
});
