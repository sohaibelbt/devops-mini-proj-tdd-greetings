function greet(name) {
  if (Array.isArray(name) && name.length === 2) return `Hello, ${name[0]} and ${name[1]}.`;
  if (name === undefined || name === null || name.length === 0) { return 'Hello, my friend.'; }
  if (name === name.toUpperCase()) return `HELLO, ${name}!`;
  return `Hello, ${name}.`;
}

module.exports = greet;
