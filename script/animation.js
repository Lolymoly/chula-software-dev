const descriptionDivs = document.querySelectorAll(".number-and-desc");

const observerOptions = {
  threshold: 0.5, // Adjust the threshold as needed
};

const animateDivsWithDelay = (divs) => {
  divs.forEach((div, index) => {
    setTimeout(() => {
      div.classList.add("animate-slide");
      observer.unobserve(div);
    }, index * 200); // Apply a delay per div
  });
};

const observer = new IntersectionObserver((entries) => {
  const intersectingDivs = entries.filter((entry) => entry.isIntersecting);
  animateDivsWithDelay(intersectingDivs.map((entry) => entry.target));
}, observerOptions);

descriptionDivs.forEach((div) => {
  observer.observe(div);
});
