// Simple carousel functionality
const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentSlide = 0;
const totalSlides = 3;

function updateCarousel() {
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
});

// Знаходимо елементи
const shareButton = document.querySelector('.share-mobile');
const hidePanel = document.querySelector('.hide-mobile');

// Додаємо обробник кліку
shareButton.addEventListener('click', (e) => {
  e.stopPropagation(); // Запобігаємо спливанню події
  hidePanel.classList.toggle('show');
});

// Закриваємо панель при кліку поза нею
document.addEventListener('click', (e) => {
  if (!shareButton.contains(e.target) && !hidePanel.contains(e.target)) {
    hidePanel.classList.remove('show');
  }
});