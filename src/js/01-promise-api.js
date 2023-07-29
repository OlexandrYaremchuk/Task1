/*
 * Створення проміса
 *  - Класс Promise
 *  - resolve
 *  - reject
 *  - Promise.prototype.then(onResolve, onReject)
 */

const promise = new Promise((resolve, reject) => {
  const canFulfill = Math.random() > 0.5;
  console.log(canFulfill);
  setTimeout(() => {
    if (canFulfill) {
      resolve('Проміс виконується успішно з результатом (виконаний fulfilled)');
    }
    reject('Проміс виконується  з помилкою (відхилений, rejected)');
  });
}, 1000);

// console.log(promise);

promise.then(onFulfilled, onRejected);

function onFulfilled(result) {
  console.log('onFulfilled -> onFulfilled');
  console.log(`✅ ${result}`);
}

function onRejected(error) {
  console.log('onRejected -> onRejected');
  console.log(`❌ ${error}`);
}

/*
 * Ланцюги промісів  (chaining)
 * Promise.prototype.catch(error)
 * Promise.prototype.finally()
 */

promise
  .then(result => {
    console.log(result);
    return result;
  })
  .then(y => {
    console.log(y);
    return y;
  })
  .then(p => {
    console.log(p);
  })
  .catch(error => console.log(error))
  .finally(() => console.log('Я буду виконаний в будь-якому випадку'));
