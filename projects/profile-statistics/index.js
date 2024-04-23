const countersEl = document.querySelectorAll(".counter");
//Iterate over each elements in the counter
countersEl.forEach((counterEl) => {
  //Initial value of the counter to zero
  counterEl.innerText = "0";
  incrementCounter();
  function incrementCounter() {
    let currentNum = +counterEl.innerText;
    const dataCeil = counterEl.getAttribute("data-ceil");
    const increment = dataCeil / 15;
    //Math.ceil()= round to the nearest integer
    currentNum = Math.ceil(currentNum + increment);

    if (currentNum < dataCeil) {
      counterEl.innerText = currentNum;
      setTimeout(incrementCounter, 50);
    } else {
      counterEl.innerText = dataCeil;
    }
  }
});
