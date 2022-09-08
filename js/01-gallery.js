import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imageEl = document.querySelector(".gallery")

const listImages = galleryItems
  .map(function({  preview, original, description  }) 
  { return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>` })
  .join("");

imageEl.insertAdjacentHTML("beforeend", listImages);

imageEl.addEventListener("click", onContainerClick);

const onContainerClick = (e) => {
  e.preventDefault();

  if (e.target.classList.contains("gallery")) return;
    const source = e.target.dataset.source;
    
  const instance = basicLightbox.create(`
    <img src="${source}"width="800" height="600">`);

  instance.show();
};


