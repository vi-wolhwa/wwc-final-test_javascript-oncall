import deepFreeze from '../utils/deepFreeze.js';

const OPTIONS = {
  INPUT: {
    delemiter: ','
  },
  OUTPUT: {},
  DATE: {
    dow: ['월', '화', '수', '목', '금', '토', '일']
  },
  WORKPLAN: {
    minLength: 5,
    maxLength: 35
  },
  NICKNAME: {
    maxLength: 5
  },
  DAYS_OF_MONTH: {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
  }
};

deepFreeze(OPTIONS);

export default OPTIONS;
