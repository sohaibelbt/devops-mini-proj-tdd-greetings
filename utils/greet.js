function greet(name) {
  if (Array.isArray(name)) {
    if (name.length === 2) return `Hello, ${name[0]} and ${name[1]}.`;
    if (name.length > 2) {
      const wordOnUpperCase = [];
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < name.length; i++) {
        if (name[i] === name[i].toUpperCase()) {
          wordOnUpperCase.push(name[i]);
          name.splice(i, 1);
        }
      }
      let array = 'Hello, ';
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < name.length; i++) {
        if (i === name.length - 2) {
          array += `${name[i]} and `;
        } else if (i === name.length - 1) {
          array += `${name[i]}`;
        } else array += `${name[i]}, `;
      }
      if (wordOnUpperCase.length === 0) {
        return array;
      } return `${array}. AND HELLO ${wordOnUpperCase.join(' ')} !`;
    }
  }
  if (name === undefined || name === null || name.length === 0) {
    return 'Hello, my friend.';
  }
  if (name === name.toUpperCase()) return `HELLO, ${name}!`;
  return `Hello, ${name}.`;
}

module.exports = greet;
