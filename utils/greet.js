function greet(name) {
  if (Array.isArray(name)) {
    if (name.length === 2) return `Hello, ${name[0]} and ${name[1]}.`;
    if (name.length > 2) {
      let array = 'Hello,';
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < name.length; i++) {
        if (i === name.length - 2) {
          array += ` ${name[i]} and `;
        } else if (i === name.length - 1) {
          array += name[i];
        } else if (name[0] !== name[0].toUpperCase()) array += ` ${name[i]},`;
      }
      if (name[0] !== name[0].toUpperCase()) {
        return array;
      }
      return `${array}. AND HELLO ${name[0]} !`;
    }
  }
  if (name === undefined || name === null || name.length === 0) {
    return 'Hello, my friend.';
  }
  if (name === name.toUpperCase()) return `HELLO, ${name}!`;
  return `Hello, ${name}.`;
}

module.exports = greet;
