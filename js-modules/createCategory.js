import createProduct from "./createProduct.js";

const categorySection = document.querySelector('[data-category]');

export default function createShortCategory(category, products) {
   const categoryDiv = document.createElement('div');
   categoryDiv.classList.add('category');
   categoryDiv.innerHTML = `<h2 class="category__title">${category}</h2> <div class="category__list">`;
   categorySection.appendChild(categoryDiv);
   const categoryList = categoryDiv.querySelector('.category__list');

   products.forEach(product => {
      if (category == 'all products' || product.category == category) {
         createProduct(product, categoryList);
      }
   })

}