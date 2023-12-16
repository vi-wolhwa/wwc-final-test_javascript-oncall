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
}

export default PlanUtility;
