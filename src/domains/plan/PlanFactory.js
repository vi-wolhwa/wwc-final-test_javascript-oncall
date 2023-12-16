import OPT from '../../constants/Options.js';
import Plan from './Plan.js';
import PlanUtility from './PlanUtility.js';

class PlanFactory {
  constructor(firstDow) {
    this.firstDow = firstDow;
  }

  createPlan(month, day) {
    const daysOfWeek = OPT.DATE.daysOfWeek;
    const dow = daysOfWeek[(daysOfWeek.indexOf(this.firstDow) + day) % 7];
    const holidayMark = !PlanUtility.isWeekend(dow) && PlanUtility.isHoliday(month, day + 1);

    return new Plan(month, day + 1, dow, holidayMark, '');
  }
}

export default PlanFactory;
