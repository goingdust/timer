const secs = (process.argv).slice(2);

const timer = function(numArray) {
  for (let num of numArray) {
    num = Number(num);
    if (num < 0 || num === NaN) {
      return;
    } else {
      timeoutId(num);
    }
  }
};

const timeoutId = function(num) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, num * 1000);
};

module.exports = timer;