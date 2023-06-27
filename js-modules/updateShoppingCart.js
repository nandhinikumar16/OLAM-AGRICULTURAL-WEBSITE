import updateProductsCount from "./updateProductsCount.js";
import { shoppingCartArray } from "./shoppingCartArray.js";

const shoppingCartList = document.querySelector('[data-shopping-cart-list]');

export default function updateShoppingCart() {

   shoppingCartList.replaceChildren();

   shoppingCartArray.forEach((item, index) => {
      
      const productArticle = document.createElement('article');
      productArticle.classList.add('shopping-cart__item');
      productArticle.innerHTML = `<span class="shopping-cart__item__image"></span>
      <div class="shopping-cart__item__info">
         <h3 class="shopping-cart__item__name">${item.name}</h3>
         <p class="shopping-cart__item__description">Lorem ipsum dolor sit amet.</p>
         <i class="shopping-cart__item__button button" data-item-decrease tabindex="0">-</i><span class="shopping-cart__item__quantity" data-item-quantity>${item.quantity}</span><i class="shopping-cart__item__button button" data-item-increase tabindex="0">+</i>
      </div>
      <p class="shopping-cart__item__price">$${item.price}</p>
      <i class="fa-solid fa-xmark shopping-cart__item__remove" data-item-remove tabindex="0"></i>`;
      const productImage = productArticle.querySelector('.shopping-cart__item__image');
      productImage.style.backgroundImage = `url(./assets/thumbnails/${item.image}.jpg)`;
      shoppingCartList.appendChild(productArticle);

      const decrease = productArticle.querySelector('[data-item-decrease]');
      const increase = productArticle.querySelector('[data-item-increase]');
      const itemQuantity = productArticle.querySelector('[data-item-quantity]');
      const itemRemoveButton = productArticle.querySelector('[data-item-remove]');

      decrease.addEventListener('click', ()=> {
         if (item.quantity > 1) {
            item.quantity -= 1;
            itemQuantity.innerText = item.quantity;
            updateProductsCount();
         } else if (item.quantity == 1) {
            shoppingCartArray.splice(index, 1);
            productArticle.remove();
            updateShoppingCart();
            updateProductsCount();
         }
      });

      increase.addEventListener('click', ()=> {
         item.quantity += 1;
         itemQuantity.innerText = item.quantity;
         updateProductsCount();
      });

      itemRemoveButton.addEventListener('click', ()=> {
         shoppingCartArray.splice(index, 1);
         productArticle.remove();
         updateShoppingCart();
         updateProductsCount();
      })

      decrease.addEventListener('keydown', (e)=> {
         if (e.key == 'Enter' && item.quantity > 1) {
            item.quantity -= 1;
            itemQuantity.innerText = item.quantity;
            updateProductsCount();
         } else if (e.key == 'Enter' && item.quantity == 1) {
            shoppingCartArray.splice(index, 1);
            productArticle.remove();
            updateShoppingCart();
            updateProductsCount();
         }
      });

      increase.addEventListener('keydown', (e)=> {
         if (e.key == 'Enter') {
            item.quantity += 1;
            itemQuantity.innerText = item.quantity;
            updateProductsCount();
         } 
      });

      itemRemoveButton.addEventListener('keydown', (e)=> {
         if (e.key == 'Enter') {
            shoppingCartArray.splice(index, 1);
            productArticle.remove();
            updateShoppingCart();
            updateProductsCount();
         }
      })
   })
}