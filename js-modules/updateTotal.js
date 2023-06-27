import { shoppingCartArray } from "./shoppingCartArray.js";

const shoppingCartTotal = document.querySelector('[data-shopping-cart-total]');

export default function updateTotal() {
   let total = 0;
   shoppingCartArray.forEach(item => {
      total += Number(item.price) * Number(item.quantity);
   })
   shoppingCartTotal.innerText = `$${total.toFixed(2)}`;
}