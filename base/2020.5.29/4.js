Promise.prototype.finally = function (callback) {
  const P = this.constructor;
  return this.then(
    (value) => {
      console.log(value, 111111);
      return P.resolve(callback()).then(() => value);
    },
    (err) => {
      console.log(err, 111111);
      return P.resolve(callback()).then(() => {
        throw new Error(err);
      });
    }
  );
};

const test1 = function () {
  return new Promise((resolve, reject) => {
    console.info("starting...");

    setTimeout(() => {
      Math.random() > 0.5 ? resolve("success") : reject("fail");
    }, 1000);
  });
};

const test2 = function () {
  return new Promise((reslove, reject) => {
    return setTimeout(() => reslove(2), 2000);
  });
};

test1()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log(666);
    return test2();
  })
  .then((res) => {
    console.log(res);
  });
