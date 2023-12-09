document.addEventListener('DOMContentLoaded', () => {

  const imageContainer = document.querySelectorAll('.image-container');

  if (imageContainer) {
    imageContainer.forEach(container => {
      container.addEventListener('click', () => {
        container.querySelector('.fullscreen-image').classList.toggle('fullscreen');
      });
    });
  }
});
