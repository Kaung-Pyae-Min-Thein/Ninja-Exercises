let form = document.querySelector('.quiz-form');
let result = document.querySelector('.result');
let correctAns = ["B", "B", "B", "B"];

form.addEventListener("submit", e => {
  e.preventDefault();

  let score = 0;
  let userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  //check answer
  userAnswers.forEach((userans, index) => {
    if (userans === correctAns[index]) {
      score += 25;
    }
  });



  //show result div
  result.classList.remove('d-none');
  //scroll to top
  window.scrollTo(0, 0);

  //animate the percentage
  let output = 0;
  //call interval callback function every 100 millisecond
  let timer = setInterval(() => {
    //update the score
    result.querySelector("span").textContent = `${output}%`;
    //check to terminate setInterval function or continue
    if (output === score) {
      clearInterval(timer);
    }
    else {
      output++;
    }
  }, 10);


  console.log(score);
});