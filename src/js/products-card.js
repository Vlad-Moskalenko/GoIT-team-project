const cardsBtn = document.querySelectorAll('.products__link')
const productsModal = document.querySelector('[data-modal=products]')
const modalImg = productsModal.querySelector('.modal__image')
const productsListItem = document.querySelectorAll('.modal-products-list__item')
const productsListIconsText = document.querySelectorAll('.modal-products-list__icons-text')

for (let item of cardsBtn) {
  item.addEventListener('click', (e) => {
    if(e.target.id === 'ice-coffee-btn') {
      productsModal.querySelector('.modal__title').textContent = 'Ice Coffee';
      modalImg.className = 'modal__image--coffee';

      for (let i = 0; i < productsListItem.length; i++) {
        productsListItem[i].style.borderColor = '#efd478';
        productsListIconsText[i].style.backgroundColor = '#efd478';
      }
    }

    if(e.target.id === 'milkshakes-btn') {
      productsModal.querySelector('.modal__title').textContent = 'Milkshakes';
      modalImg.className = 'modal__image--milkshakes';

      for (let i = 0; i < productsListItem.length; i++) {
        productsListItem[i].style.borderColor = '#d6936d';
        productsListIconsText[i].style.backgroundColor = '#d6936d';
      }
    }

    if(e.target.id === 'ice-cream-btn') {
      productsModal.querySelector('.modal__title').textContent = 'Chocolate icecream';
      modalImg.className = 'modal__image';

      for (let i = 0; i < productsListItem.length; i++) {
        productsListItem[i].style.borderColor = '#aec6a5';
        productsListIconsText[i].style.backgroundColor = '#aec6a5';
      }
    }
  })
}