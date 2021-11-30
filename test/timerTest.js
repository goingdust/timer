const assert = require('chai').assert;
const timer = require('../timer1');

describe ('#timer', () => {
  const secs1 = [];
  const secs2 = [-2];
  const secs3 = ['string'];

  it ('should not beep at all if no numbers are provided', () => {
    assert.deepEqual(timer(secs1), undefined);
  });
  it ('should ignore/skip any numbers that are negative', () => {
    assert.deepEqual(timer(secs2), undefined);
  });
  it ('should ignore any input that is not a number', () => {
    assert.deepEqual(timer(secs3), undefined);
  });
});