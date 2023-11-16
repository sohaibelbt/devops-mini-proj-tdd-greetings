const greet = require("../utils/greet");

test("checkgreet", () => {
  expect(greet("Bob")).toBe("Hello, Bob.");
});
