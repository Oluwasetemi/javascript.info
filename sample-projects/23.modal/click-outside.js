const cardButtons = document.querySelectorAll('.card button');

const outer = document.querySelector('.modal-outer');
const inner = document.querySelector('.modal-inner');

function handleCardButtonClick(event) {
  const button = event.currentTarget;
  const card = button.closest('.card');
  const { description } = card.dataset;
  const imgSrc = card.querySelector('img').src;
  const user = card.querySelector('h2').textContent;

  inner.innerHTML = `
    <img width='600' height='600' src=${imgSrc.replace(
      '200',
      '600'
    )} alt=${user} />

    <p>${description}</p>
  `;
  outer.classList.add('open');
}


cardButtons.forEach(cardButton => {
  cardButton.addEventListener('click', handleCardButtonClick);
});

function closeModal() {
  outer.classList.remove('open');
}

// clickoutside technique
outer.addEventListener('click', event => {
  const isOutSide = !event.target.closest('.modal-inner');
  console.log(isOutSide)
  console.log(event.target.closest('.modal-inner'))
  if (isOutSide) closeModal();
});

window.addEventListener('keydown', event => {
  const isOutSide = event.key === 'Escape';
  if (isOutSide) closeModal();
});
