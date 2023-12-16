import Validation from './Validation.js';
import { ERROR, NAME } from '../../constants/Strings.js';
import ExceptionHandler from '../error/ExceptionHandler.js';

const { throwErrorIfInvalid } = ExceptionHandler;

const MonthValidation = {
  validate(month) {
    this.checkIsInRange(month);
  },

  checkIsInRange(month) {
    throwErrorIfInvalid(Validation.isInRange(month, 1, 12), ERROR.isNotInRange(NAME.month, 1, 12));
  }
};

export default MonthValidation;
