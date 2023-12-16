import deepFreeze from '../utils/deepFreeze.js';

export const SIGN = {
  empty: '',
  space: ' '
};

export const NAME = {
  weekday: '평일',
  weekend: '주말',
  month: '월',
  dow: '요일',
  workPlanPersonel: '근무 배정 인원',
  nicknameLength: '닉네임 길이'
};

export const MESSAGE = {
  introduce: ''
};

export const PROMPT = {
  date: '비상 근무를 배정할 월과 시작 요일을 입력하세요> ',
  workPlan: (option) => `${option} 비상 근무 순번대로 사원 닉네임을 입력하세요> `
};

export const ERROR = {
  prefix: '[ERROR]',
  isNotNumeric: (name) => `${name}(은)는 실수 값이어야 합니다.`,
  isNotInteger: (name) => `${name}(은)는 정수 값이어야 합니다.`,
  isNotIncluded: (name, array) => `${name}(은)는 [${array}]에 포함된 값이어야 합니다.`,
  isNotEqual: (name, target) => `${name}(은)는 ${target}와 동일한 값이어야 합니다.`,
  isNotGreaterThan: (name, threshold) => `${name}(은)는 ${threshold} 보다 큰 값이어야 합니다.`,
  isNotAtLeast: (name, threshold) => `${name}(은)는 ${threshold} 보다 크거나 같은 값이어야 합니다.`,
  isNotAtMost: (name, threshold) => `${name}(은)는 ${threshold} 보다 작거나 같은 값이어야 합니다.`,
  isNotLessThan: (name, threshold) => `${name}(은)는 ${threshold} 보다 작은 값이어야 합니다.`,
  isNotPositive: (name) => `${name}(은)는 양수 값이어야 합니다.`,
  isNotNegative: (name) => `${name}(은)는 음수 값이어야 합니다.`,
  isNotInRange: (name, min, max) => `${name}(은)는 [${min} ~ ${max}] 이내의 값이어야 합니다.`,
  isNotUnique: (name) => `${name}(은)는 중복된 값이 없어야 합니다.`
};

[SIGN, NAME, MESSAGE, PROMPT, ERROR].forEach((item) => deepFreeze(item));
