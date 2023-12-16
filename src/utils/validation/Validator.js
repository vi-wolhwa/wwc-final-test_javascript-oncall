import MonthValidation from './MonthValidation.js';
import DowValidation from './DowValidation.js';
import WorkPlanValidation from './WorkPlanValidation.js';

const Validator = {
  monthValidation: (value) => MonthValidation.validate(value),
  dowValidation: (value) => DowValidation.validate(value),
  workPlanValidation: (value) => WorkPlanValidation.validate(value)
};

export default Validator;
