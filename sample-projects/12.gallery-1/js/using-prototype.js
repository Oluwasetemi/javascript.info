function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No Gallery passed');
  }
  this.gallery = gallery;
  // select all the element we need
  this.images = Array.from(gallery.querySelectorAll('img'));
  this.modal = document.querySelector('.modal');
  this.nextButton = this.modal.querySelector('.next');
  this.prevButton = this.modal.querySelector('.prev');

  // bind our methods to the instance when we need them
  this.showNextImage = this.showNextImage.bind(this);
  this.showPrevImage = this.showPrevImage.bind(this);
  this.handleKeyUp = this.handleKeyUp.bind(this);
  this.handleClicksFromOutside = this.handleClicksFromOutside.bind(this);

  // event listener
  this.images.forEach(image => {
    image.addEventListener('click', e => this.showImage(e.currentTarget));
  });

  this.images.forEach(image => {
    image.addEventListener('keyup', e => {
      if (e.key === 'Enter') {
        this.showImage(e.currentTarget);
      }
    });
  });

  this.modal.addEventListener('click', this.handleClicksFromOutside);
}

Gallery.prototype.showNextImage = function() {
  this.showImage(
    this.currentImage.nextElementSibling || this.gallery.firstElementChild
  );
};

Gallery.prototype.showPrevImage = function() {
  this.showImage(
    this.currentImage.previousElementSibling || this.gallery.lastElementChild
  );
};

Gallery.prototype.openModal = function() {
  // console.log('opening modal');

  if (this.modal.matches('.open')) {
    console.log('modal already opened');
    return;
  }
  this.modal.classList.add('open');

  window.addEventListener('keyup', this.handleKeyUp);
  this.nextButton.addEventListener('click', this.showNextImage);
  this.prevButton.addEventListener('click', this.showPrevImage);
};

Gallery.prototype.closeModal = function() {
  this.modal.classList.remove('open');

  // add event listener for clicks and keyboard events
  window.removeEventListener('keyup', this.handleKeyUp);
  this.nextButton.removeEventListener('click', this.showNextImage);
  this.prevButton.removeEventListener('click', this.showPrevImage);
};

Gallery.prototype.handleClicksFromOutside = function(e) {
  if (e.target === e.currentTarget) {
    this.closeModal();
  }
};

Gallery.prototype.handleKeyUp = function(event) {
  if (event.key === 'Escape') return this.closeModal();
  if (event.key === 'ArrowRight') return this.showNextImage();
  if (event.key === 'ArrowLeft') return this.showPrevImage();
};

Gallery.prototype.showImage = function(el) {
  if (!el) {
    console.info('no image element found');
    return;
  }

  this.modal.querySelector('img').src = el.src;
  this.modal.querySelector('h2').textContent = el.title;
  this.modal.querySelector('figure p').textContent = el.dataset.description;
  this.currentImage = el;

  this.openModal();
};

const gallery1 = new Gallery(document.querySelector('.gallery1'));
console.log(gallery1);
const gallery2 = new Gallery(document.querySelector('.gallery2'));
console.log(gallery2);
