const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button === "next" ? 0 : -1;
    console.log("value: " + value);
    const slides = button.closest("[data-carousel]").querySelector("[datae-w]");

    const activeSlide = slides.querySelector("[data-act]");

    let newIndex = [...slides.children].indexOf(activeSlide) + value;
    let length = slides.children.length;
    
    if (newIndex < 0) {
      newIndex = length - 1;
    }

    if (newIndex >= length) {
      newIndex = 0;
    }
    console.log("newIndex: " + newIndex);

    slides.children[newIndex].dataset.act = true;
    delete activeSlide.dataset.act;
  });
});
