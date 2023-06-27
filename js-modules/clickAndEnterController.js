import checkParentElements from "./checkParentElements.js";
import redirectToSearchResult from "./redirectToSearchResult.js";
import searchBarIsVisible from "./searchBarIsVisible.js";

export { searchBarText };

// HTML Elements
const body = document.querySelector('body');
const menu = document.querySelector('[data-menu]');
const menuButton = document.querySelector('[data-menu-button]');
const shoppingCartIcon = document.querySelector('[data-cart-icon]');
const categoriesMenu = document.querySelector('[data-menu-categories]');
const searchBarText = document.querySelector('[data-search-bar]');
const searchBarIcon = document.querySelector('[data-search-icon]');
const shoppingCartCountIcon = document.querySelector('[data-cart-count]');
const shoppingCartSection = document.querySelector('[data-shopping-cart]');


export default function clickAndEnterController() {
   
   // Click event listeners
   body.addEventListener('click', (e)=> {
      if (e.target == menuButton) {
         menu.classList.toggle('invisible');
         searchBarText.classList.add('invisible');
         shoppingCartSection.classList.add('invisible');
      } else if (e.target == searchBarIcon && searchBarText.value.length != 0 && !searchBarIsVisible()) {
         redirectToSearchResult();
      } else if (e.target == searchBarIcon || e.target == searchBarText) {
         searchBarText.classList.remove('invisible');
         menu.classList.add('invisible');
         shoppingCartSection.classList.add('invisible');
      } else if (e.target == shoppingCartCountIcon || e.target == shoppingCartIcon) {
         shoppingCartSection.classList.toggle('invisible');
         menu.classList.add('invisible');
         searchBarText.classList.add('invisible');
      } else if (checkParentElements(e.composedPath(), menu)) {
      } else if (checkParentElements(e.composedPath(), shoppingCartSection)) {
      } else {
         menu.classList.add('invisible');
         searchBarText.classList.add('invisible');
         shoppingCartSection.classList.add('invisible');
      }
   });
   
   // Enter event listeners
   menuButton.addEventListener('keydown', (e)=> {
      if(e.key == 'Enter') {
         menu.classList.toggle('invisible');   
         categoriesMenu.focus();
         searchBarText.classList.add('invisible');
         shoppingCartSection.classList.add('invisible');
      }
   });
   
   searchBarIcon.addEventListener('keydown', (e)=> {
      if(e.key == 'Enter') {
         searchBarText.classList.toggle('invisible');
         searchBarText.focus();
         menu.classList.add('invisible');
         shoppingCartSection.classList.add('invisible');
      }
   });

   searchBarText.addEventListener('keydown', (e)=> {
      if(e.key == 'Enter' && searchBarText.value.length != 0) {
         redirectToSearchResult();
      }
   });
   
   shoppingCartIcon.addEventListener('keydown', (e)=> {
      if(e.key == 'Enter') {
         shoppingCartSection.classList.toggle('invisible');
         shoppingCartSection.focus();
         menu.classList.add('invisible');
         searchBarText.classList.add('invisible');
      }
   });
}