import OPT from '../../constants/Options.js';
import Plan from './Plan.js';
import PlanUtility from './PlanUtility.js';

class PlanFactory {
  constructor(firstDow) {
    this.firstDow = firstDow;
  }

  createPlan(month, index) {
    const daysOfWeek = OPT.DATE.daysOfWeek;
    const dow = daysOfWeek[(daysOfWeek.indexOf(this.firstDow) + index - 1) % 7];
    const holidayMark = !PlanUtility.isWeekend(dow) && PlanUtility.isHoliday(month, index);

    return new Plan(month, index, dow, holidayMark, '');
  }
}

export default PlanFactory;
