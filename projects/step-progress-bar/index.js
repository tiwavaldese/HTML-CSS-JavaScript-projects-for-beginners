const nextEl = document.getElementById("next");
const prevEl = document.getElementById("prev");

const progressEl = document.querySelector(".progress-bar-front");
// select all the steps
const stepsEl = document.querySelectorAll(".step");
//Current step the user is on
let currentChecked = 0;

nextEl.addEventListener("click", () => {
  currentChecked++;
  if (currentChecked > stepsEl.length) {
    currentChecked = stepsEl.length;
  }
  updateStepProgress();
});

prevEl.addEventListener("click", () => {
  currentChecked--;
  if (currentChecked < 1) {
    currentChecked = 1;
  }
  updateStepProgress();
});

function updateStepProgress() {
  //if the index of the step is less than currentChecked 
  //add a check and some labels to mark complete
  stepsEl.forEach((stepEl, idx) => {
    if (idx < currentChecked) {
      stepEl.classList.add("checked");
      stepEl.innerHTML = `
      <i class="fas fa-check"></i>
      <small>${
        idx === 0
          ? "Start"
          : idx === stepsEl.length - 1
          ? "Final"
          : "Step " + idx // step 1, step 2, step 3
      }</small>
      `;
     
    } 
    //if the index of the step is greater than currentChecked 
  //remove the check and include a times icon.
    else {
      stepEl.classList.remove("checked");
      stepEl.innerHTML = `
      <i class="fas fa-times"></i>
      `;
    }
  });

  const checkedNumber = document.querySelectorAll(".checked");
//calculate the width base on the ratio of the 
//completed steps(checkedNumber) to total steps(stepEl)
// multiple by 100 to convert the value to %
  progressEl.style.width =
    ((checkedNumber.length - 1) / (stepsEl.length - 1)) * 100 + "%";

  if (currentChecked === 1) {
    prevEl.disabled = true;
  } else if (currentChecked === stepsEl.length) {
    nextEl.disabled = true;
  } else {
    prevEl.disabled = false;
    nextEl.disabled = false;
  }
}
