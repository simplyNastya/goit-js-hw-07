import { galleryItems } from './gallery-items.js';

// Change code below this line

const imagesContainerEl = document.querySelector('.gallery')
function createImagesMarkup (images) {
    return images.map(({ description, original, preview }) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href=${original}>
        <img
          class="gallery__image"
          src=${preview}
          data-source=${original}
          alt=${description}
        />
      </a>
      </div>`
    }).join('')
}
const imagesMarkup = createImagesMarkup(galleryItems)
imagesContainerEl.insertAdjacentHTML('beforeend', imagesMarkup)

const linkEl = document.querySelectorAll('.gallery__link')
console.log(linkEl)
const listLinkEl = [...linkEl]
listLinkEl.map(e => e.setAttribute("rel", "noopener noreferrer nofollow"))

function onImagesContainerClick (event) {
    event.preventDefault()

    const imageEl = event.target
    const isGalleryImageEl = event.target.classList.contains('gallery__image')

    if (!isGalleryImageEl) {
        return
    } else {
        const originalImg = event.target.dataset.source
        basicLightbox.create(`<img src="${imageEl.src}" alt="${imageEl.description}"></img>`).show()
    }
}
imagesContainerEl.addEventListener('click', onImagesContainerClick)