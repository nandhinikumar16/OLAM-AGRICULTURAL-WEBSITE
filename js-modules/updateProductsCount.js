import updateTotal from "./updateTotal.js";
import updateLocalStorage from "./updateLocalStorage.js"

import { shoppingCartArray } from "./shoppingCartArray.js";

const shoppingCartCountIcon = document.querySelector('[data-cart-count]'); 


let productsCount = 0;
export default function updateProductsCount() {
   productsCount = 0;
   shoppingCartArray.forEach(item=> {
      productsCount += item.quantity;
   })

   shoppingCartCountIcon.innerText = productsCount;

   productsCount == 0 
   ? shoppingCartCountIcon.classList.add('invisible') 
   : shoppingCartCountIcon.classList.remove('invisible');

   updateTotal();
   updateLocalStorage();
}