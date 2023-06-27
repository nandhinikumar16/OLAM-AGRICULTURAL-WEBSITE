import createProduct from "./createProduct.js";

const categoriesSection = document.querySelector('[data-categories-section]');

export default function createCategoryHome(category, products) {
   const categoryDiv = document.createElement('div');
   categoryDiv.classList.add('category');
   categoryDiv.innerHTML = `<h2 class="category__title">${category}</h2>
   <a href="./category.html?cat=${category}" class="category__link">View All</a>
   <div class="category__list">`;
   categoriesSection.appendChild(categoryDiv);
   const categoryList = categoryDiv.querySelector('.category__list');

   let count = 0;
   let i = 0;
   while(count < 6) {
      const product = products[i];
      if (product.category == category) {
         createProduct(product, categoryList);
         count++;
      }
      i++;
   }

}