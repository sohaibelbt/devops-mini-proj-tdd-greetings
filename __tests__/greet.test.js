const greet = require('../utils/greet');

test('checkgreet', () => {
  expect(greet('Bob')).toBe('Hello, Bob.');

  expect(greet('')).toBe('Hello, my friend.');

  expect(greet(undefined)).toBe('Hello, my friend.');

  expect(greet(null)).toBe('Hello, my friend.');
});

