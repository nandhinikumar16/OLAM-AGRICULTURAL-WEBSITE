import getLocalStorage from "../js-modules/getLocalStorage.js";
import createCategoryHome from "../js-modules/createCategoryHome.js";
import clickAndEnterController from "../js-modules/clickAndEnterController.js";

// Controls click and enter events on menu, search and shopping cart buttons
clickAndEnterController();

// Get data from local storage to build shopping cart
getLocalStorage();

// Fetches data from server and creates categories with products
(async function() {
   const response = await fetch('https://gabrielbezerrag.github.io/Grocery-Store/json/db.json');
   const jsonData = await response.json();
   
   const products = jsonData.products
   const categoriesObject = jsonData.categories;

   const categories = [];

   categoriesObject.forEach(categoryObject=> {
      categories.push(categoryObject.category);  
   });

   categories.forEach(category => {
      createCategoryHome(category, products);
   })

})();



