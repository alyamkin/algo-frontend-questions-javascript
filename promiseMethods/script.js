Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then(resolve).catch(reject);
    });
  });
};

Promise.myAny = function (promises) {
  return new Promise((resolve, reject) => {
    let rejectedCount = 0;
    promises.forEach((promise) => {
      promise.then(resolve).catch((_) => {
        rejectedCount++;
        if (promises.length === rejectedCount) {
          reject('all promises rejected');
        }
      });
    });
  });
};

Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    let resolvedCount = 0;
    const resolvedPromises = [];
    promises.forEach((promise, index) => {
      promise
        .then((value) => {
          resolvedCount++;
          resolvedPromises[index] = value;
          if (promises.length === resolvedCount) {
            resolve(resolvedPromises);
          }
        })
        .catch(reject);
    });
  });
};

Promise.myAllSettled = function (promises) {
  return new Promise((resolve) => {
    const settledPromises = [];
    let settledCount = 0;
    promises.forEach((promise, index) => {
      promise
        .then((value) => {
          settledPromises[index] = {
            status: 'fulfilled',
            value,
          };
        })
        .catch((error) => {
          settledPromises[index] = {
            status: 'rejected',
            error,
          };
        })
        .finally(() => {
          settledCount++;
          if (promises.length === settledCount) {
            resolve(settledPromises);
          }
        });
    });
  });
};
