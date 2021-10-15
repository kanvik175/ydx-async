module.exports = function ({ equal, add }) {

    const promisify = (func, ...args) => 
      new Promise((resolve) => func.apply(func, [...args, resolve]));

    return (array, fn, initialValue, cb) => {
      let accum = initialValue;
      let length;

      (async function recursiveReduce(index = 0) {
        if (!length) {
          length = await promisify(array.length);
        }

        if (await promisify(equal, index, length)) {
          return cb(accum);
        }

        const value = await promisify(array.get, index);
        accum = await promisify(fn, accum, value, index, null);
        index = await promisify(add, index, 1);
        await recursiveReduce(index);
      })();
    }
}