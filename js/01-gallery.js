import { galleryItems } from './gallery-items.js';
// Change code below this line

const imagesContainerEl = document.querySelector('.gallery')

imagesContainerEl.classList.add('gallery__item')

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

function createImagesMarkup (images) {
    return images.map(({ description, original, preview }) => {
        return `<a class="gallery__link" href="large-image.jpg">
        <img
          class="gallery__image"
          src=${preview}
          data-source=${original}
          alt=${description}
        />
      </a>`
    }).join('')
}

const imagesMarkup = createImagesMarkup(galleryItems)

imagesContainerEl.insertAdjacentHTML('beforeend', imagesMarkup)


