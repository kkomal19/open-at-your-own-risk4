yesBtn.addEventListener('click', () => {
  questionPage.classList.add('hidden');
  yesPage.classList.remove('hidden');
  startSparkles();
});

// 3. Generate sparkling hearts
function startSparkles() {
  const container = document.getElementById('sparkles');
  setInterval(() => {
    const heart = document.createElement('div');
    heart.innerHTML = '💖';
    heart.className = 'heart-sparkle';
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 2 + 2) + "s";
    container.appendChild(heart);
    
    // Remove heart after animation to keep performance high
    setTimeout(() => heart.remove(), 4000);
  }, 150);
}