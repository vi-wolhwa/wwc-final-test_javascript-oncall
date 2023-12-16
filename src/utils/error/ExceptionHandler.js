import { Console } from '@woowacourse/mission-utils';
import { ERROR } from '../../constants/Strings.js';

const ExceptionHandler = {
  /**
   * 에러를 발생시키는 함수.
   * @param {string} errorMessage - 에러 메시지.
   */
  throwError(errorMessage) {
    throw new Error(`${ERROR.prefix} ${errorMessage}`);
  },

  /**
   * 주어진 조건이 유효하지 않을 경우, 에러를 발생시키는 함수.
   * @param {boolean} condition - 검사할 조건.
   * @param {string} errorMessage - 에러 발생 시 출력할 메시지.
   */
  throwErrorIfInvalid(condition, errorMessage) {
    if (!condition) ExceptionHandler.throwError(errorMessage);
  },

  /**
   * 동기 함수에 대하여 에러메시지를 출력하고 함수를 재실행하는 함수.
   * @param {Function} syncFunc - 예외를 처리할 동기 함수.
   * @param {number} [maxRetries=Infinity] - 최대 재시도 횟수.
   */
  retrySyncWithErrorLogging(syncFunc, maxRetries = Infinity) {
    let retries = 0;
    let errorMessage;
    while (retries <= maxRetries) {
      try {
        return syncFunc();
      } catch (error) {
        Console.print(error.message);
        errorMessage = error.message;
        retries += 1;
      }
    }
    this.throwError(errorMessage);
  },

  /**
   * 비동기 함수에 대하여 예외 발생 시 에러메시지를 출력하고 함수를 재실행하는 함수.
   * @param {Function} asyncFunc - 예외를 처리할 비동기 함수.
   * @param {number} [maxRetries=Infinity] - 최대 재시도 횟수.
   */
  async retryAsyncWithErrorLogging(asyncFunc, maxRetries = Infinity) {
    let retries = 0;
    let errorMessage;
    while (retries <= maxRetries) {
      try {
        return await asyncFunc();
      } catch (error) {
        Console.print(error.message);
        errorMessage = error.message;
        retries += 1;
      }
    }
    this.throwError(errorMessage);
  }
};

export default ExceptionHandler;
