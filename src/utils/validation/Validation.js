const Validation = {
  isNumeric: (value) => !isNaN(parseFloat(value)) && isFinite(value), // 값이 숫자인지 검증하는 함수
  isInteger: (value) => Number.isInteger(value), // 값이 정수인지 검증하는 함수
  isIncluded: (value, array) => array.includes(value), // 값이 배열에 포함되어 있는지 검증하는 함수
  isEqual: (value, target) => value === target, // 값이 대상과 동일한지 검증하는 함수
  isGreaterThan: (value, threshold) => value > threshold, // 값이 임계값보다 큰지 검증하는 함수
  isAtLeast: (value, threshold) => value >= threshold, // 값이 임계값 이상인지 검증하는 함수
  isAtMost: (value, threshold) => value <= threshold, // 값이 임계값 이하인지 검증하는 함수
  isLessThan: (value, threshold) => value < threshold, // 값이 임계값보다 작은지 검증하는 함수
  isPositive: (value) => value > 0, // 값이 양수인지 검증하는 함수
  isNegative: (value) => value < 0, // 값이 음수인지 검증하는 함수
  isInRange: (value, min, max) => value >= min && value <= max, // 값이 주어진 범위 내에 있는지 검증하는 함수
  isUnique: (array) => array.length === new Set(array).size // 배열의 원소가 고유한지 검증하는 함수
};

export default Validation;
