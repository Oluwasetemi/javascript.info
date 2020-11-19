const terms = document.querySelector('.terms-and-conditions');
const button = document.querySelector('.accept');

function startUp() {
  const ob = new IntersectionObserver(callback, { threshold: [0, 0.5, 1], root: terms });

  function callback(payload) {
    if (payload[0].intersectionRatio === 1 && button) {
      button.disabled = false;
      // unobserve the last paragraph
      ob.unobserve(terms.lastElementChild);
    }
  }

  if (!terms) {
    return;
  }

  ob.observe(terms.lastElementChild)
}

startUp()