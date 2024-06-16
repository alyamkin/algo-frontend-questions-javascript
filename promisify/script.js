function promisify(callback) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      function handleErrorAndValue(error, value) {
        if (error == null) {
          resolve(value);
        } else {
          reject(error);
        }
      }

      callback.call(this, ...args, handleErrorAndValue);
    });
  };
}

// Test
function adder(x, y, handleErrorAndValue) {
  const value = x + y;
  if (typeof value !== 'number') {
    const error = new Error('Not a number');
    handleErrorAndValue(error, null);
  } else {
    handleErrorAndValue(null, value);
  }
}

const promisifiedAdder = promisify(adder);

promisifiedAdder(1, 2)
  .then(console.log) // 3
  .catch(console.error);

promisifiedAdder(1, 'foo').then(console.log).catch(console.error); // Not a number
