let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById("guessBtn").addEventListener("click", function () {
  const userGuess = Number(document.getElementById("guessInput").value);
  const result = document.getElementById("result");
  attempts++;

  if (userGuess === randomNumber) {
    result.textContent = `🎉 ถูกต้อง! เลขคือ ${randomNumber}`;
    result.style.color = "green";
  } else if (userGuess < randomNumber) {
    result.textContent = "🔼 มากกว่านี้";
    result.style.color = "blue";
  } else {
    result.textContent = "🔽 น้อยกว่านี้";
    result.style.color = "orange";
  }

  document.getElementById("attempts").textContent = `จำนวนครั้งที่ทาย: ${attempts}`;
});
