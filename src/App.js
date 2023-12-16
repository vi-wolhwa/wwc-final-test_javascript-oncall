import { NAME } from './constants/Strings.js';
import Controller from './controllers/Controller.js';

class App {
  #controller = new Controller();

  async run() {
    console.log('hello'); //TEST

    const [month, dow] = await this.#controller.inputDate();
    const weekdayPlan = await this.#controller.inputWorkPlan(NAME.weekday);
    const weekendPlan = await this.#controller.inputWorkPlan(NAME.weekend);

    const workPlanner = this.#controller.makeWorkPlanner(month, dow, weekdayPlan, weekendPlan);
  }
}

export default App;
