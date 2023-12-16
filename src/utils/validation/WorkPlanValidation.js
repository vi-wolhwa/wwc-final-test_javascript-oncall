import Validation from './Validation.js';
import { ERROR, NAME } from '../../constants/Strings.js';
import ExceptionHandler from '../error/ExceptionHandler.js';
import OPT from '../../constants/Options.js';

const { throwErrorIfInvalid } = ExceptionHandler;

const WorkPlanValidation = {
  validate(workPlan) {
    this.checkWorkplanLength(workPlan, OPT.WORKPLAN.minLength, OPT.WORKPLAN.maxLength);
    this.checkNicknameLength(workPlan, OPT.NICKNAME.maxLength);
    this.checkNicknameDuplication(workPlan);
  },

  checkWorkplanLength(workPlan, min, max) {
    throwErrorIfInvalid(
      Validation.isInRange(workPlan.length, min, max),
      ERROR.isNotInRange(NAME.workPlanPersonel, min, max)
    );
  },

  checkNicknameLength(workplan, max) {
    throwErrorIfInvalid(
      workplan.every((nickname) => Validation.isAtMost(nickname.length, max)),
      ERROR.isNotAtMost(NAME.nicknameLength, max)
    );
  },

  checkNicknameDuplication(workplan) {
    throwErrorIfInvalid(Validation.isUnique(workplan), ERROR.isNotUnique(NAME.workPlanPersonel));
  }
};

export default WorkPlanValidation;
