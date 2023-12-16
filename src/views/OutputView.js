import { Console } from '@woowacourse/mission-utils';
import { MESSAGE, SIGN } from '../constants/Strings.js';

const OutputView = {
  printNewLine() {
    Console.print('');
  },

  printWorkPlan(workPlan) {
    const getHolidayMarker = (holidayMark) => {
      if (holidayMark) return MESSAGE.holidayMark;
      return SIGN.empty;
    };

    const message = workPlan
      .map((dayPlan) => {
        return MESSAGE.workPlanOneDay({
          month: dayPlan.month,
          day: dayPlan.day,
          dow: dayPlan.dow,
          holidayMark: getHolidayMarker(dayPlan.holidayMark),
          name: dayPlan.name
        });
      })
      .join(SIGN.enter);

    Console.print(message);
  }
};

export default OutputView;
