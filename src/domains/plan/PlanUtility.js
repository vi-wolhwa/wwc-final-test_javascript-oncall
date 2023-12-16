import OPT from '../../constants/Options.js';

class PlanUtility {
  static isWeekend(dow) {
    const weekend = OPT.DATE.weekend;
    return weekend.includes(dow);
  }

  static isHoliday(month, day) {
    const holidays = OPT.DATE.holiday[month];
    return holidays && holidays.includes(day);
  }

  static getNextIndex(planArray, currentIndex, lastAssigned) {
    let nextIndex = (currentIndex + 1) % planArray.length;
    if (planArray[nextIndex] === lastAssigned) {
      nextIndex = (nextIndex + 1) % planArray.length;
    }
    return nextIndex;
  }
}

export default PlanUtility;
