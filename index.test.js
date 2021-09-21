import { addString, toNumber, filterOrange } from "./index";

//question01
describe("addString", () => {
  test('adds a + b to equal ab', () => {
    expect(addString('a', 'b')).toBe('ab');
  });

  test('adds a + 1 to equal a1', () => {
    expect(addString('a', '1')).toBe('a1');
  });

  test('adds 1 + 1 to equal -1', () => {
    expect(addString(1, 1)).toBe(-1);
  });
})


//question02
describe("toNumber", () => {
  test('Convert the string to an integer to equal 1234', () => {
    expect(toNumber('1234')).toBe(1234);
  });

  test('Convert the string to an integer to equal 1234', () => {
    expect(toNumber('  1234TEST')).toBe(1234);
  });

  test('Convert the string to an integer to equal NaN', () => {
    expect(toNumber('TEST1234')).toBe(NaN);
  });
})


//question03
describe("filterOrange", () => {
  test('the fruit list has orange on it', () => {
    const fruit = ["orange", "apple", "peach"];
    expect(filterOrange(fruit)).toContain('orange');
  });

  test('the fruit list has orange on it', () => {
    const fruit = ["orange", "apple", "peach"];
    expect(filterOrange(fruit)).toEqual(['orange']);
  });

  test('There are no oranges on the fruit list.', () => {
    const fruit = ["apple", "peach"];
    expect(filterOrange(fruit)).toEqual([]);
  });

})
