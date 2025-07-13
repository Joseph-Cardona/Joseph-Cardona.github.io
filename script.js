// Copyright (c) 2025 Joseph Cardona
//
// Licensed under the MIT License - see LICENSE file for details.


document.addEventListener("DOMContentLoaded", function () {
  const scroller = document.querySelector('.scroller');
  const sections = Array.from(scroller.querySelectorAll('section'));

  document.addEventListener('keydown', function (event) {
    if (event.key === "ArrowDown") {
      const currentScroll = scroller.scrollTop;
      const nextSection = sections.find(
        section => section.offsetTop > currentScroll + 10
      );
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
        event.preventDefault();
      }
    }
    if (event.key === "ArrowUp") {
      const currentScroll = scroller.scrollTop;
      const prevSections = sections.filter(
        section => section.offsetTop < currentScroll - 10
      );
      if (prevSections.length > 0) {
        const prevSection = prevSections[prevSections.length - 1];
        prevSection.scrollIntoView({ behavior: "smooth" });
        event.preventDefault();
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const progressBar = document.getElementById("scroll-progress-bar");
  const scroller = document.querySelector('.scroller');
  const sections = Array.from(scroller.querySelectorAll('section'));
  const totalSections = sections.length;

  scroller.addEventListener("scroll", () => {
    let currentSectionIndex = 0;

    for (let i = 0; i < totalSections; i++) {
      const sectionTop = sections[i].offsetTop;
      if (scroller.scrollTop >= sectionTop - 10) {
        currentSectionIndex = i;
      } else {
        break;
      }
    }

    const stepProgress = (currentSectionIndex) / (totalSections - 1) * 100;
    progressBar.style.width = stepProgress + "%";
  });

  scroller.dispatchEvent(new Event("scroll"));
});

document.addEventListener('DOMContentLoaded', () => {
  // Select all elements with the class 'animated-text'
  const elements = document.querySelectorAll('.cool-effect');
  
  elements.forEach(textElement => {
    const text = textElement.textContent;
    textElement.innerHTML = text.split('').map(letter => {
      return letter === ' ' ? ' ' : `<span class="letter">${letter}</span>`;
    }).join('');
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const img = document.getElementById("website-banner");
  if (img) {
    img.addEventListener("click", function() {
      img.classList.remove("animated");
      void img.offsetWidth; // Force reflow to allow retrigger
      img.classList.add("animated");
    });
    img.addEventListener("animationend", function() {
      img.classList.remove("animated");
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.image-card').forEach(card => {
    card.addEventListener('click', function(e) {
      if (e.target.tagName.toLowerCase() === 'a') return;
      this.classList.toggle('active');
    });
  });
});

alert("you can scroll down btw")
