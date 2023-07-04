import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line

import { galleryItems } from './gallery-items';

// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector('.gallery');

function galleryMarkup(items) {
  return items
    .map(
      item => `
      <li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
       </a>
      </li>
    `
    )
    .join('');
}

gallery.insertAdjacentHTML('beforeend', galleryMarkup(galleryItems));

document.addEventListener('DOMContentLoaded', evt => {
  evt.preventDefault();
  if (evt.target.tagName !== 'IMG') {
    return;
  }
});

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
  captionPosition: 'bottom',
});
