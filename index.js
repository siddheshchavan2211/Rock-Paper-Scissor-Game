//let btnqty = 0;
//document.querySelector("#h1h").innerText = `Items in cart is : ${btnqty}`;
let scorestr = localStorage.getItem("score");
let score;
resetscore(scorestr);

function resetscore(scorestr) {
  if (scorestr === null || scorestr === undefined) {
    score = {
      You: 0,
      Computer: 0,
      draw: 0,
    };
  } else {
    score = JSON.parse(scorestr);
  }

  if (scorestr !== null && scorestr !== undefined) {
    score = JSON.parse(scorestr);
  }

  score.displayscore = function () {
    return `Your score:${this.You} Computers score:${this.Computer} draws:${this.draw}`;
  };
  showresult();
}
function random() {
  let randomnum = Math.random() * 3;
  if (randomnum > 0 && randomnum <= 1) {
    return "Rock";
  } else if (randomnum > 1 && randomnum <= 2) {
    return "Paper";
  } else {
    return "Scissor";
  }
}

function random2(UserChoice, compchoice) {
  if (UserChoice === "Rock") {
    if (compchoice === "Paper") {
      score.Computer++;
      return "Comp wins";
    } else if (compchoice === "Scissor") {
      score.You++;
      return "You win";
    } else {
      score.draw++;
      return "Draw";
    }
  } else if (UserChoice === "Paper") {
    if (compchoice === "Paper") {
      score.draw++;
      return "Draw";
    } else if (compchoice === "Scissor") {
      score.Computer++;
      return "Comp Wins";
    } else {
      score.You++;
      return "You Win";
    }
  } else {
    if (compchoice === "Paper") {
      score.You++;
      return "You Win";
    } else if (compchoice === "Scissor") {
      score.draw++;
      return "Draw";
    } else {
      score.Computer++;
      return "Comp Wins";
    }
  }
}

function showresult(UserChoice, compchoice, resultmsg) {
  localStorage.setItem("score", JSON.stringify(score));
  document.querySelector("#scoreuser").innerText =
    UserChoice !== undefined ? `You have chosen ${UserChoice}` : "";
  document.querySelector("#scorecomp").innerText =
    compchoice !== undefined ? `Computer have chosen ${compchoice}` : "";
  document.querySelector("#scoreresult").innerText =
    resultmsg !== undefined ? ` ${resultmsg}` : "";
  document.querySelector("#scorenn").innerText =
    score !== undefined ? `Score: ${score.displayscore()}` : "";
}
