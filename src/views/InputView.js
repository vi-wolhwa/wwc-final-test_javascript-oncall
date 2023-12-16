import { Console } from '@woowacourse/mission-utils';
import { PROMPT } from '../constants/Strings.js';

let idx = -1;
const input = [
  '준팍, 도밥, 고니, 수아, 루루, 글로, 솔로스타, 우코, 슬링키, 참새, 도리',
  '수아,루루,글로,솔로스타,우코,슬링키,참새,도리,준팍,도밥,고니'
];

const InputView = {
  async inputDate() {
    // return ' 5, 월'; //TEST
    return await Console.readLineAsync(PROMPT.date);
  },

  async inputWorkPlan(option) {
    // idx += 1;
    // return input[idx]; //TEST
    return await Console.readLineAsync(PROMPT.workPlan(option));
  }
};

export default InputView;
