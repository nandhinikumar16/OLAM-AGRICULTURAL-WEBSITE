import createProduct from "./createProduct.js";

const searchResultSection = document.querySelector('[data-search-result]');

export default function showSearchResult(search, products) {
   const searchResultDiv = document.createElement('div');
   searchResultDiv.classList.add('search-result');
   searchResultDiv.innerHTML = `<div data-search-result-text> <h2 class="search-result__title">Results for: </h2> <span class="search-result__subtitle">"${search}"</span> </div> <div class="search-result__list">`;
   searchResultSection.appendChild(searchResultDiv);
   const searchResultList = searchResultDiv.querySelector('.search-result__list');

   const regex = new RegExp(search, 'i');
   
   let hasProduct = false;

   products.forEach(product => {
      if (regex.test(product.name)) {
         createProduct(product, searchResultList);
         hasProduct = true;
      }
   })

   if (!hasProduct) {
      const searchResultDiv = document.querySelector('[data-search-result-text]')
      const searchResultText = document.createElement('p');
      searchResultText.classList.add('search-result__text');
      searchResultText.innerText = 'No results were found.';
      searchResultDiv.appendChild(searchResultText);
   }

}