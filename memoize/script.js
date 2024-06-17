function memoize(callback, resolver) {
  const cache = new Map();

  function getCacheKey(args) {
    return resolver != null ? resolver(...args) : JSON.stringify(args);
  }

  function memoized(...args) {
    const cacheKey = getCacheKey(args);

    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }

    const result = callback(...args);
    cache.set(cacheKey, result);
    return result;
  }

  memoized.clear = function () {
    cache.clear();
  };

  memoized.delete = function (...args) {
    cache.delete(getCacheKey(args));
  };

  memoized.has = function (...args) {
    return cache.has(getCacheKey(args));
  };

  return memoized;
}

const callback = (...args) => args;

// const memoized = memoize(callback);
// console.log(memoized(123));
// console.log(memoized(123));
// console.log(memoized(123, 'abc'));

const memoized = memoize(callback, (args) => args[0]);
console.log(memoized(123));
console.log(memoized(123));
console.log(memoized(123, 'abc'));
console.log(memoized('abc', 123));
console.log(memoized('abc'));
