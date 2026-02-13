// Wait for DOM
document.addEventListener("DOMContentLoaded", () => {

  // -------------------------------
  // 1. Floating Hearts
  // -------------------------------
  const heartsContainer = document.getElementById("hearts-container");

  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";
    heart.style.opacity = Math.random();
    heartsContainer.appendChild(heart);

    // Remove after animation
    setTimeout(() => heart.remove(), 10000);
  }

  setInterval(createHeart, 300); // continuously create hearts

  // -------------------------------
  // 2. Surprise Button
  // -------------------------------
  const surpriseBtn = document.getElementById("surprise-btn");

  setTimeout(() => {
    surpriseBtn.style.display = "block";
  }, 7000);

  surpriseBtn.addEventListener("click", () => {
    alert("I love you so much, Isha! 💖 From Morsi ❤️");
  });

  // -------------------------------
  // 3. Lottie Cat Animations
  // -------------------------------
  lottie.loadAnimation({
    container: document.getElementById("cat-running"),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/cat-running.json'
  });

  lottie.loadAnimation({
    container: document.getElementById("cats-kissing"),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/cats-kissing.json'
  });

  // -------------------------------
  // 4. Background Music
  // -------------------------------
  const music = document.getElementById("bg-music");

  // play music on first click anywhere (required by browsers)
  document.body.addEventListener("click", () => {
    if (music.paused) music.play();
  }, { once: true });

  // -------------------------------
  // 5. Mouse Interactive Hearts
  // -------------------------------
  document.addEventListener("mousemove", (e) => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    heart.style.animationDuration = "3s";
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
  });

});
