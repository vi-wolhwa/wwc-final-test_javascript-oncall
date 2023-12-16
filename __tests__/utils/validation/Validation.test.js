import Validation from '../../../src/utils/validation/Validation.js';

describe('[단위 테스트] Validation', () => {
  test('[함수] isIncluded', () => {
    expect(Validation.isIncluded(5, [1, 2, 3, 4, 5])).toBe(true);
    expect(Validation.isIncluded(6, [1, 2, 3, 4, 5])).toBe(false);
  });
  test('[함수] isAtMost', () => {
    expect(Validation.isAtMost(5, 5)).toBe(true);
    expect(Validation.isAtMost(6, 5)).toBe(false);
  });
  test('[함수] isInRange', () => {
    expect(Validation.isInRange(5, 1, 10)).toBe(true);
    expect(Validation.isInRange(5, 6, 10)).toBe(false);
  });
  test('[함수] isUnique', () => {
    expect(Validation.isUnique([1, 2, 3])).toBe(true);
    expect(Validation.isUnique([1, 2, 2])).toBe(false);
  });
});
