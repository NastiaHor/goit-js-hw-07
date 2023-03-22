import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery'); 
 
function createGallery(galleryItems) { 
  return galleryItems 
    .map(({ preview, original, description }) => ` 
      <li class="gallery__item"> 
        <a class="gallery__link" href="${original}"> 
          <img 
            class="gallery__image" 
            src="${preview}" 
            data-full-image-url="${original}" 
            alt="${description}" 
          /> 
        </a> 
      </li> 
    `) 
    .join(''); 
} 
 
function openFullSizeImage(event) { 
  event.preventDefault(); 
 
  const target = event.target; 
 
  if (target.tagName !== 'IMG') return; 
 
  const fullSizeImageUrl = target.dataset.fullImageUrl; 
 
  const instance = basicLightbox.create(`<img src="${fullSizeImageUrl}">`); 
  instance.show(); 
 
  document.addEventListener('keydown', closeOnEscapePress); 
 
  function closeOnEscapePress(event) { 
    if (event.code !== 'Escape') return; 
 
    instance.close(); 
    document.removeEventListener('keydown', closeOnEscapePress); 
  } 
} 
 
function initializeGallery(gallery, galleryItems) { 
  gallery.insertAdjacentHTML( 
    'beforeend', 
    createGallery(galleryItems) 
  ); 
 
  gallery.addEventListener('click', openFullSizeImage); 
} 
 
initializeGallery(gallery, galleryItems);