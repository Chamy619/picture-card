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

$container.addEventListener('mouseout', (e) => {
  $overlay.style = 'filter: opacity(0)';
  $container.style =
    'transform: perspective(350px) rotateX(0deg) rotateY(0deg)';
});
