function greet(name) {
  if (name === undefined || name === null || name.length === 0) { return 'Hello, my friend.'; }
  return `Hello, ${name}.`;
}

module.exports = greet;
