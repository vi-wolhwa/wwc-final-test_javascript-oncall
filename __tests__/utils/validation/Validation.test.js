import Validation from '../../../src/utils/validation/Validation.js';

describe('[단위 테스트] Validation', () => {
  test('[함수] isNumeric', () => {
    expect(Validation.isNumeric(123)).toBe(true);
    expect(Validation.isNumeric('123')).toBe(true);
    expect(Validation.isNumeric('123abc')).toBe(false);
    expect(Validation.isNumeric('abc')).toBe(false);
  });

  test('[함수] isInteger', () => {
    expect(Validation.isInteger(5)).toBe(true);
    expect(Validation.isInteger(5.5)).toBe(false);
  });

  test('[함수] isIncluded', () => {
    expect(Validation.isIncluded(5, [1, 2, 3, 4, 5])).toBe(true);
    expect(Validation.isIncluded(6, [1, 2, 3, 4, 5])).toBe(false);
  });

  test('[함수] isEqual', () => {
    expect(Validation.isEqual(5, 5)).toBe(true);
    expect(Validation.isEqual(5, 4)).toBe(false);
  });

  test('[함수] isGreaterThan', () => {
    expect(Validation.isGreaterThan(5, 4)).toBe(true);
    expect(Validation.isGreaterThan(4, 5)).toBe(false);
  });

  test('[함수] isAtLeast', () => {
    expect(Validation.isAtLeast(5, 5)).toBe(true);
    expect(Validation.isAtLeast(4, 5)).toBe(false);
  });

  test('[함수] isAtMost', () => {
    expect(Validation.isAtMost(5, 5)).toBe(true);
    expect(Validation.isAtMost(6, 5)).toBe(false);
  });

  test('[함수] isLessThan', () => {
    expect(Validation.isLessThan(4, 5)).toBe(true);
    expect(Validation.isLessThan(5, 4)).toBe(false);
  });

  test('[함수] isPositive', () => {
    expect(Validation.isPositive(5)).toBe(true);
    expect(Validation.isPositive(-5)).toBe(false);
  });

  test('[함수] isNegative', () => {
    expect(Validation.isNegative(-5)).toBe(true);
    expect(Validation.isNegative(5)).toBe(false);
  });

  test('[함수] isInRange', () => {
    expect(Validation.isInRange(5, 1, 10)).toBe(true);
    expect(Validation.isInRange(5, 6, 10)).toBe(false);
  });
});
