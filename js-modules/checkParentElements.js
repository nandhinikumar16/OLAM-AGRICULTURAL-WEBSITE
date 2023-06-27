const header = document.querySelector('header');

export default function checkParentElements(pathArray, element) {
   let hasElement = false
   pathArray.forEach(node => {
      if (node == element || node == header) {
         hasElement = true;
      }
   })
   return hasElement;
}