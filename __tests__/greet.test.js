import greet from '../utils/greet'

test('checkgreet', () => {
  expect(greet('Bob')).toBe('Hello, Bob.')

  expect(greet('')).toBe('Hello, my friend.')

  expect(greet(undefined)).toBe('Hello, my friend.')

  expect(greet(null)).toBe('Hello, my friend.')

  expect(greet('BOB')).toBe('HELLO, BOB!')

  expect(greet(['Ibrahim', 'Sohaib'])).toBe('Hello, Ibrahim and Sohaib.')

  expect(greet(['Sohaib', 'Ibrahim', 'Mohamed'])).toBe('Hello, Sohaib, Ibrahim and Mohamed')

  expect(greet(['Sohaib', 'MOHAMED', 'Ibrahim'])).toBe('Hello, Sohaib and Ibrahim. AND HELLO MOHAMED !')

  expect(greet(['Sohaib', 'Ibrahim', 'fr'])).toBe('Bonjour Sohaib et Ibrahim.')

  expect(greet(['Sohaib', 'Ibrahim', 'nl'])).toBe('Hallo Sohaib en Ibrahim.')

  expect(greet(['Sohaib', 'Ibrahim', 'an'])).toBe('Hello Sohaib and Ibrahim.')
})
