import updateShoppingCart from "./updateShoppingCart.js";
import updateProductsCount from "./updateProductsCount.js";

import { shoppingCartArray } from "./shoppingCartArray.js";


export default function createProduct(product, categoryList) {
   const productArticle = document.createElement('article');
   productArticle.classList.add('product');
   productArticle.innerHTML = `<a href="#" class="product__image"></a>
   <h3 class="product__name">${product.name}</h3>
   <p class="product__price">$${product.price}</p>  <div class="product__quantity"> <p class="product__quantity__text">Quantity:</p><i class="product__quantity__button button" data-product-decrease tabindex="0">-</i> <span class="product__quantity__number" data-product-quantity>1</span> <i class="product__quantity__button button" data-product-increase tabindex="0">+</i> </div> <p class="product__description"></p>
   <input type="button" value="Add To Cart" class="product__button button">`;
   const productImage = productArticle.querySelector('.product__image');
   productImage.style.backgroundImage = `url(./assets/products/${product.image}.jpg)`;
   const productButton = productArticle.querySelector('.product__button');

   const productQuantity = productArticle.querySelector('[data-product-quantity]');
   const increase = productArticle.querySelector('[data-product-increase]');
   const decrease = productArticle.querySelector('[data-product-decrease]');
   let quantity = 1;

   // Click Event Listeners
   productButton.addEventListener('click', ()=> { 
      let hasProduct = false;
      shoppingCartArray.forEach(item => {
         if (item.name == product.name) {
            item.quantity += quantity;
            hasProduct = true;
            updateShoppingCart();  
            updateProductsCount();
            return;
         }
      })
      if (!hasProduct) {
         product.quantity = quantity;
         shoppingCartArray.push(product);
         updateShoppingCart();  
         updateProductsCount();
      }

      quantity = 1;
      productQuantity.innerText = 1;
   });

   increase.addEventListener('click', ()=> {
      if (quantity < 50) {
         quantity += 1;
         productQuantity.innerText = quantity;
      }
   });

   decrease.addEventListener('click', ()=> {
      if (quantity > 1) {
         quantity -= 1;
         productQuantity.innerText = quantity;
      }
   });

   // Enter Event Listeners
   increase.addEventListener('keydown', (e)=> {
      if (e.key == 'Enter' && quantity < 50) {
         quantity += 1;
         productQuantity.innerText = quantity;
      }
   });

   decrease.addEventListener('keydown', (e)=> {
      if (e.key == 'Enter' && quantity > 1) {
         quantity -= 1;
         productQuantity.innerText = quantity;
      }
   });

   
   categoryList.appendChild(productArticle);
}