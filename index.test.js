const {f} = require('./functions');

test('Function f should return value of an expression a * Math.sin(b) + b * Math.sin(a) + c * c', () => {
  expect(f(0, 0, 0)).toBe(0);
});
