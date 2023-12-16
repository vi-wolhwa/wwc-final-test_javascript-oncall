import OPT from '../constants/Options.js';
import PlanFactory from './plan/PlanFactory.js';
import PlanUtility from './plan/PlanUtility.js';

const { isHoliday, isWeekend, getNextIndex } = PlanUtility;

class WorkPlanner {
  #plan;

  constructor(month, firstDow) {
    const factory = new PlanFactory(firstDow);
    const daysInMonth = OPT.DATE.daysInMonth[month];
    this.#plan = Array.from({ length: daysInMonth }, (_, index) =>
      factory.createPlan(month, index + 1)
    );
  }

  assignPlan(planArray, currentIndex, lastAssigned, plan) {
    let index = getNextIndex(planArray, currentIndex, lastAssigned);
    lastAssigned = planArray[index];
    return { ...plan, name: lastAssigned, index };
  }

  makePlan(weekdayPlan, weekendPlan) {
    let weekdayIndex = -1;
    let weekendIndex = -1;
    let lastAssigned = '';

    this.#plan = this.#plan.map((plan) => {
      let result;
      if (isWeekend(plan.dow) || isHoliday(plan.month, plan.day)) {
        result = this.assignPlan(weekendPlan, weekendIndex, lastAssigned, plan);
        weekendIndex = result.index;
      } else {
        result = this.assignPlan(weekdayPlan, weekdayIndex, lastAssigned, plan);
        weekdayIndex = result.index;
      }
      lastAssigned = result.name;
      return result;
    });
  }

  getWorkPlan() {
    return this.#plan;
  }
}

export default WorkPlanner;
