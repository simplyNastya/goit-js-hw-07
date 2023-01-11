import { galleryItems } from './gallery-items.js';
// Change code below this line

const imagesContainerEl = document.querySelector('.gallery')

function createImagesMarkup (images) {
    return images.map(({ description, original, preview }) => {
        return `<a class="gallery__item" href=${original}>
        <img class="gallery__image" src=${preview} alt=${description} />
      </a>`
    }).join('')
}

const imagesMarkup = createImagesMarkup(galleryItems)

imagesContainerEl.insertAdjacentHTML('beforeend', imagesMarkup)


const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', 
captionDelay: 250 });





