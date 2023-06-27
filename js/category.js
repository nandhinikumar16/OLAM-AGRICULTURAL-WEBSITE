import clickAndEnterController from "../js-modules/clickAndEnterController.js";
import getLocalStorage from "../js-modules/getLocalStorage.js";
import createCategory from "../js-modules/createCategory.js";

// Controls click and enter events on menu, search and shopping cart buttons
clickAndEnterController();

// Get data from local storage to build shopping cart
getLocalStorage();

// Fetches data from server and creates categories with products
(async function() {
   const response = await fetch('https://gabrielbezerrag.github.io/Grocery-Store/json/db.json');
   const jsonData = await response.json();
   const products = jsonData.products;

   const url = window.location.href;
   const category = url.replace(/.+?cat=/, '').replace(/-/g, ' ');

   const categoryRegex = new RegExp(category, 'i');

   const menuLinkArray = document.querySelectorAll('.menu__item-link');
   menuLinkArray.forEach(menuItem => {
      if (categoryRegex.test(menuItem.innerText)) {
         menuItem.classList.add('menu__item-link--active');
      }
   })

   createCategory(category, products);

})();



