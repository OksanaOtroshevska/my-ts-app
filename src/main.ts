import './style.css'

const addToCartButtons = document.querySelectorAll<HTMLButtonElement>('.add-to-cart');

const cartCountElement = document.getElementById('cart-count') as HTMLSpanElement;

let cartCount = Number(localStorage.getItem('cartCount')) || 0;

cartCountElement.textContent = cartCount.toString();

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    cartCount++;
    cartCountElement.textContent = cartCount.toString();

    localStorage.setItem('cartCount', cartCount.toString());
  });
});
