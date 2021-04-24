const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("Next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;
next.addEventListener("click", function () {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  Update();
});
prev.addEventListener("click", function () {
  currentActive--;
  console.log(currentActive);
  if (currentActive < 1) {
    currentActive = 1;
  }
  Update();
});

function Update() {
  circles.forEach((circle, idx) => {
    console.log(currentActive, idx);
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
