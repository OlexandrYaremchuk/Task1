// `https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita`

import _ from 'lodash';

const searchInput = document.querySelector('.searchInput');
let cocktailData = [];

searchInput.addEventListener('input', _.throttle(onSearch, 5000));

function onSearch(e) {
  const searchCocktail = e.target.value;
  console.log(searchCocktail);
  fetchCocktail(searchCocktail);
}

function fetchCocktail(cocktailName) {
  return new Promise((resolve, reject) => {
    fetch(
      `https://thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`,
    )
      .then(response => response.json())
      .then(addDataArr)
      .catch(console.log('Error data import'));
  });
}

function addDataArr(cocktail) {
  cocktailData = cocktail;
  console.log(cocktailData);
}
