import { searchBarText } from "./clickAndEnterController.js";

export default function redirectToSearchResult() {
   const searchValue = searchBarText.value;
   const search = searchValue.replace(/\s/g, '-');
   window.location.href = `./search-result.html?s=${search}`;
}
