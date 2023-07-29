/*
 * Промисифікація:
 * - Проблема доступу до результату проміса з колбеком
 * - Функція яка повертає проміс
 */

// const makeOrder = dish => {
//   const DELAY = 1000;
//   return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;

//     setTimeout(() => {
//       if (passed) {
//         resolve(`✅ Ось ваше замовлення: ${dish}`);
//       }
//       reject('❌ Упс, у нас закінчились продукти');
//     }, DELAY);
//   });
// };

// makeOrder('чебурек')
//   .then(onMakeOrderSuccess)
//   .catch(onMakeOrderError)
//   .finally(onMakeOrderFinally);

// function onMakeOrderSuccess(result) {
//   console.log('onMakeOrderSuccess');
//   console.log(result);
// }

// function onMakeOrderError(error) {
//   console.log('onMakeOrderError');
//   console.log(error);
// }

// function onMakeOrderFinally() {
//   console.log('Ми раді, що ви є нашим клієнтом');
// }

/*
 * Промісифікація синхроних функцій
 * - Promise.resolve()
 * - Promise.reject()
 */

/*
 * Покемони з https://pokeapi.co/
 */
const searchInput = document.querySelector('.searchInput');

searchInput.addEventListener('input', onSearchInputChange);

function onSearchInputChange(e) {
  const value = e.target.value;
  console.log(value);
  fetchPokemonById(value).then(onFetchSaccess).catch(onFetchError);
}

const fetchPokemonById = id => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(response =>
    response.json(),
  );
};

// fetchPokemonById(12).then(onFetchSaccess).catch(onFetchError);

function onFetchSaccess(pokemon) {
  console.log('onFetchSaccess -> onFetchSaccess');
  console.log(pokemon);
}

function onFetchError(error) {
  console.log('onFetchError -> onFetchError');
  console.log(error);
}
