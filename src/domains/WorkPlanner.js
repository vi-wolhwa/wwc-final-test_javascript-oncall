import OPT from '../constants/Options.js';

class WorkPlanner {
  #plan;

  constructor(month, firstDow) {
    this.initializePlan(month, firstDow);
  }

  initializePlan(month, firstDow) {
    const daysInMonth = OPT.DATE.daysInMonth[month];
    const daysOfWeek = OPT.DATE.daysOfWeek;

    this.#plan = Array.from({ length: daysInMonth }, (_, day) => {
      const dow = daysOfWeek[(daysOfWeek.indexOf(firstDow) + day) % 7];
      return {
        month: month,
        day: day + 1,
        dow: dow,
        holidayMark: !this.#isWeekend(dow) && this.#isHoliday(month, day + 1),
        name: ''
      };
    });
  }

  makePlan(weekdayPlan, weekendPlan) {
    let weekdayIndex = 0,
      weekendIndex = 0,
      lastAssigned = '';

    this.#plan = this.#plan.map((plan) => {
      let name = '';
      if (this.#isWeekend(plan.dow) || this.#isHoliday(plan.month, plan.day)) {
        name = weekendPlan[weekendIndex];
        if (name === lastAssigned) {
          weekendPlan = this.moveNext(weekendPlan, weekendIndex);
          name = weekendPlan[weekendIndex];
        }
        weekendIndex = (weekendIndex + 1) % weekendPlan.length;
      } else {
        name = weekdayPlan[weekdayIndex];
        if (name === lastAssigned) {
          weekdayPlan = this.moveNext(weekdayPlan, weekdayIndex);
          name = weekdayPlan[weekdayIndex];
        }
        weekdayIndex = (weekdayIndex + 1) % weekdayPlan.length;
      }
      lastAssigned = name;
      return { ...plan, name };
    });
  }

  moveNext(arr, index) {
    let temp = arr[index];
    arr[index] = arr[(index + 1) % arr.length];
    arr[(index + 1) % arr.length] = temp;
    return arr;
  }

  #isWeekend(dow) {
    const weekend = OPT.DATE.weekend;
    if (weekend.includes(dow)) return true;
    return false;
  }

  #isHoliday(month, day) {
    const holidays = OPT.DATE.holiday[month];
    if (holidays && holidays.includes(day)) return true;
    return false;
  }

  getWorkPlan() {
    return this.#plan;
  }
}

export default WorkPlanner;
