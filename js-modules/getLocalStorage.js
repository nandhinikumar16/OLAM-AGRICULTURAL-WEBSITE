import updateProductsCount from "./updateProductsCount.js";
import updateShoppingCart from "./updateShoppingCart.js"
import { shoppingCartArray } from "./shoppingCartArray.js"

export default function getLocalStorage() {
   const localStorageList = JSON.parse(localStorage.getItem('shoppingCart'));
   if (localStorageList != null) {
      shoppingCartArray.push(...localStorageList);
      updateProductsCount();
      updateShoppingCart();
   };
} 