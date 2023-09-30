const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

//TOGGLE

const toggle = document.querySelector(".toggle");
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title, .arrow,.navbar-container,.sidebar,.movie-list-item-title,.toggle,.movie-list-item-desc,.left-menu-icon,.toggle-col,.side,.profile-text"
);

function toggleItems() {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
}

toggle.addEventListener("click", toggleItems);
ball.addEventListener("click", toggleItems);
