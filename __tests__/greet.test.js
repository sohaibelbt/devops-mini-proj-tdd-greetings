const greet = require("../utils/greet");

// eslint-disable-next-line no-undef
test("checkgreet", () => {
  // eslint-disable-next-line no-undef
  expect(greet("Bob")).toBe("Hello, Bob.");

  // eslint-disable-next-line no-undef
  expect(greet("")).toBe("Hello, my friend.");

  // eslint-disable-next-line no-undef
  expect(greet(undefined)).toBe("Hello, my friend.");

  // eslint-disable-next-line no-undef
  expect(greet(null)).toBe("Hello, my friend.");

  // eslint-disable-next-line no-undef
  expect(greet("BOB")).toBe("HELLO, BOB!");

  // eslint-disable-next-line no-undef
  expect(greet(["Ibrahim", "Sohaib"])).toBe("Hello, Ibrahim and Sohaib.");

  // eslint-disable-next-line no-undef
  expect(greet(["Sohaib", "Ibrahim", "Mohamed"])).toBe(
    "Hello, Sohaib, Ibrahim and Mohamed"
  );

  // eslint-disable-next-line no-undef, max-len
  expect(greet(["Sohaib", "MOHAMED", "Ibrahim"])).toBe(
    "Hello, Sohaib and Ibrahim. AND HELLO MOHAMED !"
  );

  // eslint-disable-next-line no-undef
  expect(greet(["Sohaib", "Ibrahim", "fr"])).toBe(
    "Bonjour Sohaib et Ibrahim."
  );

  // eslint-disable-next-line no-undef
  expect(greet(["Sohaib", "Ibrahim", "nl"])).toBe("Hallo Sohaib en Ibrahim.");

  // eslint-disable-next-line no-undef
  expect(greet(["Sohaib", "Ibrahim", "an"])).toBe("Hello Sohaib and Ibrahim.");
});
