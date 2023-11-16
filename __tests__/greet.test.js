const greet = require('../utils/greet');

test('checkgreet', () => {
  expect(greet('Bob')).toBe('Hello, Bob.');

  expect(greet('')).toBe('Hello, my friend.');
});

