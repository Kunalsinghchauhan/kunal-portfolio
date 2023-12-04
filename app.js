function filterProjects(category) {
  var projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach(function (card) {
    if (category === "all" || card.classList.contains(category)) {
      card.style.display = "inline-block";
    } else {
      card.style.display = "none";
    }
  });
}

let Android = document.querySelector(`.typing-animation2`);
let WEB = document.querySelector(`.typing-animation1`);
let newTitle = "Web Developer <br> Android Developer";
let i = 1;

const typingAnination = () => {
  let newAnimation = newTitle.slice(0, i);
  WEB.innerHTML = newAnimation;
  i > newTitle.length ? (i = 1) : i++;
  setTimeout(() => {
    typingAnination();
  }, 90);
};
typingAnination();

// let WEB = document.querySelector('.typing-animation1');
// let ANDROID = document.querySelector('.typing-animation2');
// let titles = ["Web Developer", "Android Developer"];
// let titleIndex = 0;
// let charIndex = 0;

// const typingAnimation = (element, title) => {
//   if (charIndex < title.length) {
//     element.innerHTML += title.charAt(charIndex);
//     charIndex++;
//     setTimeout(() => typingAnimation(element, title), 90);
//   } else {
//     charIndex = 0;
//     titleIndex = (titleIndex + 1) % titles.length;
//     setTimeout(() => typingAnimation(element, titles[titleIndex]), 1000);
//   }
// };

// typingAnimation(WEB, titles[titleIndex]);
// typingAnimation(ANDROID, titles[titleIndex]);
