class MyPromise {
  constructor(executorFunc) {
    // pending, fulfilled, rejected
  }

  then(onFulfilled, onRejected) {
    // Write your code here.
  }

  catch(onRejected) {
    // Write your code here.
  }

  get state() {}

  get value() {
    // Write your code here.
  }
}

const promise = new MyPromise();

console.log(promise.state);
