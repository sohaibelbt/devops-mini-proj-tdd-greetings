function greet(name) {
  if (name === undefined || name === null || name.length === 0) { return 'Hello, my friend.'; }
  if (name === name.toUpperCase()) return `HELLO, ${name}!`;
  return `Hello, ${name}.`;
}

module.exports = greet;
