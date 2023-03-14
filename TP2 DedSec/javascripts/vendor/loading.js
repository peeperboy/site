const loading = document.querySelector('.loading');

loading.addEventListener('animationend', () => {
  loading.classList.add('fade-out-end');
});