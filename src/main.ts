import './style.css'

const addToCartButtons = document.querySelectorAll<HTMLButtonElement>('.add-to-cart');

const removeFromCartButtons = document.querySelectorAll<HTMLButtonElement>('.remove-from-cart');

const cartCountElement = document.querySelector<HTMLSpanElement>('#cart-count');

let cartCount = Number(localStorage.getItem('cartCount')) || 0;


if (cartCountElement) {
  cartCountElement.textContent = cartCount.toString();
}

// Добавление товара
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    cartCount++;

    if (cartCountElement) {
  cartCountElement.textContent = cartCount.toString();
}
    localStorage.setItem('cartCount', cartCount.toString());
  });
});

// Удаление товара
removeFromCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (cartCount > 0) {   // чтобы не уходило в минус
      cartCount--;
      updateCartCount();
    }
  });
});

// Функция обновления счётчика
function updateCartCount() {
  if (cartCountElement) {
  cartCountElement.textContent = cartCount.toString();
  }
  localStorage.setItem('cartCount', cartCount.toString());
}
