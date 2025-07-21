// Generate random stars
const starCount = 80;
const starsContainer = document.querySelector('.stars');
for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    star.style.top = top + 'vh';
    star.style.left = left + 'vw';
    star.style.opacity = 0.5 + Math.random() * 0.5;
    const size = 1 + Math.random() * 2;
    star.style.width = star.style.height = size + 'px';
    const duration = 3 + Math.random() * 5;
    star.style.animationDuration = `2s, ${duration}s`;
    star.style.animationDelay = `0s, ${Math.random() * duration}s`;
    starsContainer.appendChild(star);}