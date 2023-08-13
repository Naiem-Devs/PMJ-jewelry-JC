
// https://codepen.io/sumon6638-sm/pen/YzeEEow

const range = document.querySelectorAll(".range-slider span input");
progress = document.querySelector(".range-slider .progress");
let gap = 0.1;
const inputValue = document.querySelectorAll(".numberVal input");

range.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minRange = parseInt(range[0].value);
    let maxRange = parseInt(range[1].value);

    if (maxRange - minRange < gap) {
      if (e.target.className === "range-min") {
        range[0].value = maxRange - gap;
      } else {
        range[1].value = minRange + gap;
      }
    } else {
      progress.style.left = (minRange / range[0].max) * 100 + "%";
      progress.style.right = 100 - (maxRange / range[1].max) * 100 + "%";
      inputValue[0].value = minRange;
      inputValue[1].value = maxRange;
    }
  });
});




const rangeOne = document.querySelectorAll(".range-sliderOne span input");
progressOne = document.querySelector(".range-sliderOne .progress");
let gapOne = 0.1;
const inputValueOne = document.querySelectorAll(".numberValOne input");

rangeOne.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minRange = parseInt(rangeOne[0].value);
    let maxRange = parseInt(rangeOne[1].value);

    if (maxRange - minRange < gapOne) {
      if (e.target.className === "range-min") {
        rangeOne[0].value = maxRange - gapOne;
      } else {
        rangeOne[1].value = minRange + gapOne;
      }
    } else {
      progressOne.style.left = (minRange / rangeOne[0].max) * 100 + "%";
      progressOne.style.right = 100 - (maxRange / rangeOne[1].max) * 100 + "%";
      inputValueOne[0].value = minRange;
      inputValueOne[1].value = maxRange;
    }
  });
});




const rangeTwo = document.querySelectorAll(".range-sliderTwo span input");
progressTwo = document.querySelector(".range-sliderTwo .progress");
let gapTwo = 0.1;
const inputValueTwo = document.querySelectorAll(".numberValTwo input");

rangeTwo.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minRange = parseInt(rangeTwo[0].value);
    let maxRange = parseInt(rangeTwo[1].value);

    if (maxRange - minRange < gapTwo) {
      if (e.target.className === "range-min") {
        rangeTwo[0].value = maxRange - gapTwo;
      } else {
        rangeTwo[1].value = minRange + gapTwo;
      }
    } else {
      progressTwo.style.left = (minRange / rangeTwo[0].max) * 100 + "%";
      progressTwo.style.right = 100 - (maxRange / rangeTwo[1].max) * 100 + "%";
      inputValueTwo[0].value = minRange;
      inputValueTwo[1].value = maxRange;
    }
  });
});




const rangeThree = document.querySelectorAll(".range-sliderThree span input");
progressThree = document.querySelector(".range-sliderThree .progress");
let gapThree = 0.1;
const inputValueThree = document.querySelectorAll(".numberValThree input");

rangeThree.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minRange = parseInt(rangeThree[0].value);
    let maxRange = parseInt(rangeThree[1].value);

    if (maxRange - minRange < gapThree) {
      if (e.target.className === "range-min") {
        rangeThree[0].value = maxRange - gapThree;
      } else {
        rangeThree[1].value = minRange + gapThree;
      }
    } else {
      progressThree.style.left = (minRange / rangeThree[0].max) * 100 + "%";
      progressThree.style.right = 100 - (maxRange / rangeThree[1].max) * 100 + "%";
      inputValueThree[0].value = minRange;
      inputValueThree[1].value = maxRange;
    }
  });
});




const rangeFour = document.querySelectorAll(".range-sliderFour span input");
progressFour = document.querySelector(".range-sliderFour .progress");
let gapFour = 0.1;
const inputValueFour = document.querySelectorAll(".numberValFour input");

rangeFour.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minRange = parseInt(rangeFour[0].value);
    let maxRange = parseInt(rangeFour[1].value);

    if (maxRange - minRange < gapFour) {
      if (e.target.className === "range-min") {
        rangeFour[0].value = maxRange - gapFour;
      } else {
        rangeFour[1].value = minRange + gapFour;
      }
    } else {
      progressFour.style.left = (minRange / rangeFour[0].max) * 100 + "%";
      progressFour.style.right = 100 - (maxRange / rangeFour[1].max) * 100 + "%";
      inputValueFour[0].value = minRange;
      inputValueFour[1].value = maxRange;
    }
  });
});


