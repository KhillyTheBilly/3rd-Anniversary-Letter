const text = `My love,

Three years.

Even writing that feels unreal to me, because somehow it feels like both a lifetime of memories and just the beginning of everything I want with my dushi pushi.

If I’m honest, I don’t think I fully understood what it meant to truly love someone until you came into my life. You didn’t just become part of my world. You changed it completely. The way I think, the way I feel, the way I see the future… all of it somehow became brighter, softer, and more meaningful because you’re in it.
I still think about the little things. The way you laugh at something small. The way you look at me when you’re happy. The comfort I feel just being next to you, even in silence (or when you are snoring). Those moments might seem ordinary to anyone else, but to me, they are everything.

Over these three years, we’ve created something that I’m so proud of. Not just memories, but something real. Something strong. Something that has grown through every moment we’ve shared, both the easy ones and the difficult ones. And I wouldn’t trade any of it, because every part of it led us to where we are now.

You’ve seen me in ways no one else has. You’ve understood me, supported me, and stayed with me in moments when it would’ve been easier not to. That’s something I will never take for granted. I hope you know how much that means to me, even if I don’t always say it perfectly.

And the truth is, I still fall for you. Not just once, but over and over again. In new ways, at unexpected moments. Sometimes it’s when you smile. Sometimes it’s when you’re being completely yourself. Sometimes it’s when you don’t even realize it. But it keeps happening, and I don’t think it will ever stop.

You are not just my girlfriend. You are my safe place, my favorite person, my nuggy pie, my chocu singh, my best friend, and the one I want to keep choosing every single day.
Three years with you isn’t enough. It will never feel like enough. Because everything in me still looks forward to more memories, more laughter, more moments where it’s just us against the world.

No matter what comes next, I want you to know this:
I choose you.
I choose us.
And I will keep choosing you, again and again, without hesitation.

Happy 3rd anniversary, my Jaan.

Forever yours ❤️`;

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
