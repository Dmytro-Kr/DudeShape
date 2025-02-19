const icons = document.querySelectorAll('.furniture-content__links');

icons.forEach(icon => {
  const img = icon.querySelector('img');
  const greySrc = img.src;
  const whiteSrc = greySrc.replace('-grey', '-white');

  icon.addEventListener('mouseenter', () => {
    img.src = whiteSrc;
  });

  icon.addEventListener('mouseleave', () => {
    img.src = greySrc;
  });
});