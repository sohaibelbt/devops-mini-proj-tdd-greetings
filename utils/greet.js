function greet(name) {
  if (name.length === 0) { return 'Hello, my friend.'; }
  return `Hello, ${name}.`;
}

module.exports = greet;
