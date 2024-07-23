//object
const inputNum = document.querySelector(".inputNum");
const guessNum = document.querySelector(".guessNum");
const button = document.querySelector(".playBtn");
const chosenNumberDisplay = document.getElementById("chosenNumber");
const winLose = document.getElementById("winLose");
let array = [];
let randomNumber = null;

//0 이상 입력값 이하 범위 지정
inputNum.addEventListener("change", (event) => {
  const numberInput = inputNum.value;
  const parseNum = parseInt(numberInput);
  if (isNaN(parseNum) || parseNum < 0) {
    return;
  }
  array = Array.from({ length: parseNum + 1 }, (_, i) => i);
});

//버튼 누르면 내가 입력한 수 출력하고 누를 때 마다 기계 랜덤 숫자 출력
button.addEventListener("click", () => {
  const numberGuess = guessNum.value;
  const parseGuessNum = parseInt(numberGuess);

  randomNumber = array[Math.ceil(Math.random() * array.length) - 1];
  chosenNumberDisplay.innerText = `You chose: ${parseGuessNum}, the machine chose: ${randomNumber}.`;

  if (parseGuessNum === randomNumber) {
    winLose.innerText = "You Won!";
  } else {
    winLose.innerText = "You Lost!";
  }
});

//play 버튼 누르면 랜덤 숫자 출격
