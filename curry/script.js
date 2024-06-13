const sum = (...numbers) =>
  numbers.reduce((total, number) => total + number, 0);

// First solution
// function curry(callback) {
//   const accumulatedArgs = [];
//   const curriedCallback = (...args) => {
//     accumulatedArgs.push(...args);
//     if (args.length === 0) {
//       const result = callback(...accumulatedArgs);
//       accumulatedArgs.length = 0;
//       return result;
//     }
//     return curriedCallback;
//   };

//   return curriedCallback;
// }

// Second solution
// const curry = (callback) => {
//   const curriedCallback =
//     (accumulatedArgs = []) =>
//     (...args) => {
//       if (args.length) {
//         return curriedCallback([...accumulatedArgs, ...args]);
//       }

//       return callback(...accumulatedArgs);
//     };

//   return curriedCallback();
// };

// Third solution
const curry = (callback) => {
  const curriedCallback = (...accArgs) => {
    if (accArgs.length === 0) {
      return callback();
    }

    return (...args) => {
      if (args.length === 0) {
        return callback(...accArgs);
      }

      return curriedCallback(...accArgs, ...args);
    };
  };

  return curriedCallback;
};

const curriedSum = curry(sum);

console.log(curriedSum());
console.log(curriedSum(1)());
console.log(curriedSum(1)(2)());
console.log(curriedSum(1, 2)(3)(4, 5, 6)());
console.log(curriedSum(1));
console.log(curriedSum(1, 2)(3));
