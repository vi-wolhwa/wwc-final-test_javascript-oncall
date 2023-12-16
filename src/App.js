import { NAME } from './constants/Strings.js';
import Controller from './controllers/Controller.js';
import ExceptionHandler from './utils/error/ExceptionHandler.js';

const { retryAsyncWithErrorLogging } = ExceptionHandler;

class App {
  #controller = new Controller();

  async run() {
    const [month, dow] = await retryAsyncWithErrorLogging(() => this.#controller.inputDate());

    const [weekdayPlan, weekendPlan] = await retryAsyncWithErrorLogging(async () => {
      const weekdayPlan = await this.#controller.inputWorkPlan(NAME.weekday);
      const weekendPlan = await this.#controller.inputWorkPlan(NAME.weekend);
      return [weekdayPlan, weekendPlan];
    });

    const workPlanner = this.#controller.makeWorkPlanner(month, dow, weekdayPlan, weekendPlan);

    this.#controller.printWorkPlan(workPlanner);
  }
}

export default App;
