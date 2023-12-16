const Validation = {
  isIncluded: (value, array) => array.includes(value), // 값이 배열에 포함되어 있는지 검증하는 함수
  isAtMost: (value, threshold) => value <= threshold, // 값이 임계값 이하인지 검증하는 함수
  isInRange: (value, min, max) => value >= min && value <= max, // 값이 주어진 범위 내에 있는지 검증하는 함수
  isUnique: (array) => array.length === new Set(array).size // 배열의 원소가 고유한지 검증하는 함수
};

export default Validation;
