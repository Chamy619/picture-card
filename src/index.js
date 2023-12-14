const $container = document.querySelector('.container');
const $overlay = document.querySelector('.overlay');

$container.addEventListener('mousemove', (e) => {
  const x = e.offsetX;
  const y = e.offsetY;
  const rotateX = (4 / 30) * y + 20;
  const rotateY = (-1 / 5) * x + 20;
  $container.style = `transform: perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  $overlay.style = `background-position: ${x / 5 + y / 5}%`;
});

$container.addEventListener('mouseout', () => {
  $overlay.style = 'filter: opacity(0)';
  $container.style =
    'transform: perspective(350px) rotateX(0deg) rotateY(0deg)';
});

$container.addEventListener('touchmove', (e) => {
  e.preventDefault();
  const touch = e.touches[0];
  const x = touch.clientX - $container.getBoundingClientRect().left;
  const y = touch.clientY - $container.getBoundingClientRect().top;
  const rotateX = (4 / 30) * y + 20;
  const rotateY = (-1 / 5) * x + 20;
  $container.style.transform = `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  $overlay.style.backgroundPosition = `${x / 5 + y / 5}%`;
});

$container.addEventListener('touchend', () => {
  $overlay.style = 'filter: opacity(0)';
  $container.style =
    'transform: perspective(350px) rotateX(0deg) rotateY(0deg)';
});
