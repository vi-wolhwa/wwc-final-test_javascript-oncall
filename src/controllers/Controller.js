import OPT from '../constants/Options.js';
import WorkPlanner from '../domains/WorkPlanner.js';
import Prep from '../utils/Preprocessor.js';
import Validator from '../utils/validation/Validator.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class Controller {
  async inputDate() {
    const dateInput = await InputView.inputDate();
    const [month, dow] = Prep.process(dateInput, [
      Prep.deleteSpacesInString,
      [Prep.splitStringByDelimiter, OPT.INPUT.delemiter]
    ]);

    Validator.monthValidation(month);
    Validator.dowValidation(dow);

    return [Number(month), dow];
  }

  async inputWorkPlan() {
    const workPlanInput = await InputView.inputWorkPlan();
    const workPlan = Prep.process(workPlanInput, [
      Prep.deleteSpacesInString,
      [Prep.splitStringByDelimiter, OPT.INPUT.delemiter]
    ]);

    Validator.workPlanValidation(workPlan);

    return workPlan;
  }

  makeWorkPlanner(month, dow, weekdayPlan, weekendPlan) {
    const planner = new WorkPlanner(month, dow);
    planner.makePlan(weekdayPlan, weekendPlan);
    return planner;
  }

  printWorkPlan(workPlanner) {
    OutputView.printWorkPlan(workPlanner.getWorkPlan());
  }
}

export default Controller;
