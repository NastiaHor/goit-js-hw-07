import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery'); 
 
function generateMarkup() {  
  return galleryItems  
    .map(({ preview, original, description }) => `  
      <li class="gallery__item">  
        <a class="gallery__link" href="${original}">  
          <img  
            class="gallery__image"  
            src="${preview}"  
            alt="${description}"  
          />  
        </a>  
      </li>  
    `)  
    .join('');  
}  
 
function initializeGallery(galleryContainer) {  
  const lightbox = new SimpleLightbox('.gallery a', {  
    captions: true,  
    captionsData: 'alt',  
    captionDelay: 250,  
  });  
}  
 
galleryContainer.insertAdjacentHTML('beforeend', generateMarkup()); 
initializeGallery(galleryContainer);
