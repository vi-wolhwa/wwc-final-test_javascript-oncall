import Validation from './Validation.js';
import { ERROR, NAME } from '../../constants/Strings.js';
import ExceptionHandler from '../error/ExceptionHandler.js';
import OPT from '../../constants/Options.js';

const { throwErrorIfInvalid } = ExceptionHandler;

const DowValidation = {
  validate(dow) {
    this.checkIsIncluded(dow, OPT.DAYS_OF_WEEK);
  },

  checkIsIncluded(dow, array) {
    throwErrorIfInvalid(Validation.isIncluded(dow, array), ERROR.isNotIncluded(NAME.dow, array));
  }
};

export default DowValidation;
