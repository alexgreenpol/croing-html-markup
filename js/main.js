const image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
  orientation: 'top',
  delay: 0.6,
  transition: 'cubic-bezier(0,0,0,1)',
});

const acc = document.getElementsByClassName('accordion');
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active');

    const panel = this.nextElementSibling;
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}
