const text = `My love,

From the moment you came into my life, everything changed.
You make my world brighter, my days lighter, and my heart fuller.

Every memory with you is my favorite,
and every second with you is a gift I never take for granted.

I love you more than words can ever truly express ❤️`;

let index = 0;
const speed = 40;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("letter").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

document.getElementById("revealBtn").addEventListener("click", () => {
  document.getElementById("revealBtn").style.display = "none";
  typeWriter();
  startHearts();
  playMusic();
});

function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 10) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }, 300);
}

function playMusic() {
  const music = document.getElementById("music");
  music.play().catch(() => {});
}
