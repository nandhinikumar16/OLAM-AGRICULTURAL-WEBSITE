import {searchBarText} from './clickAndEnterController.js';

export default function searchBarIsVisible() {
   let hasInvisible = false;
   const searchBarClasses = [...searchBarText.classList];
   if (searchBarClasses.includes('invisible')) {
      hasInvisible = true;
   }
   return hasInvisible;
}