import {shoppingCartArray} from './shoppingCartArray.js'

export default function updateLocalStorage() {
   localStorage.setItem('shoppingCart', JSON.stringify(shoppingCartArray));
}