const music = document.getElementById("music");
const finalHearts = document.getElementById("final-hearts");
const text = document.getElementById("text");
const yesBtn = document.getElementById("yes");

let yesCount = 0;

function yesClick() {
  yesCount++;

  if (yesCount === 1) {
    text.innerText = "კიდევ ერთხელ დაფიქრდი 💭💜";
  }

  if (yesCount === 2) {
    text.innerText =
      "კარგი მაშინ გაემზადე 💍\nრომ მთელი ცხოვრება ჩემი იყო 💜\nკუსს 😘";

    playMusic();
    finalAnimation();
  }
}

function noClick() {
  let w = yesBtn.offsetWidth;
  yesBtn.style.width = w + 25 + "px";
  yesBtn.style.height = "70px";
}

function playMusic() {
  music.volume = 0.6;
  music.currentTime = 40; // sax moment
  music.play().catch(() => {});
}

function finalAnimation() {
  for (let i = 0; i < 60; i++) {
    const heart = document.createElement("span");
    heart.innerText = "💜";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = 18 + Math.random() * 28 + "px";
    heart.style.animationDuration = 3 + Math.random() * 3 + "s";
    finalHearts.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }
}
