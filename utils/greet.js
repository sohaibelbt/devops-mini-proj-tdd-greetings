function greet(name) {
    if (Array.isArray(name)) {
      if (name.length === 2) return `Hello, ${name[0]} and ${name[1]}.`;
      if (name.length > 2) {
        if (
          name[name.length - 1] === 'fr'
          || name[name.length - 1] === 'an'
          || name[name.length - 1] === 'nl'
        ) {
          if (name[name.length - 1] === 'fr') {
            let string = 'Bonjour ';
            const index = name.length - 1;
            // eslint-disable-next-line no-plusplus
            for (let i = 0; i < index; i++) {
              if (i === index - 2) {
                string += `${name[i]} et `;
              } else if (i === index - 1) {
                string += `${name[i]}.`;
              // eslint-disable-next-line no-unused-vars
              } else string += `${name[i]},`;
            }
            return string;
          }
          if (name[name.length - 1] === 'nl') {
            let string = 'Hallo ';
            const index = name.length - 1;
            // eslint-disable-next-line no-plusplus
            for (let i = 0; i < index; i++) {
              if (i === index - 2) {
                string += `${name[i]} en `;
              } else if (i === index - 1) {
                string += `${name[i]}.`;
              // eslint-disable-next-line no-unused-vars
              } else string += `${name[i]},`;
            }
            return string;
          }
        }
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
        }
        return `${array}. AND HELLO ${wordOnUpperCase.join(' ')} !`;
      }
    }
    if (name === undefined || name === null || name.length === 0) {
      return 'Hello, my friend.';
    }
    if (name === name.toUpperCase()) return `HELLO, ${name}!`;
    return `Hello, ${name}.`;
  }
  
  module.exports = greet;