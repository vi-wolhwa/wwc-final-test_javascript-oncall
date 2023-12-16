import { ERROR } from "../../../src/constants/Strings.js";
import ExceptionHandler from "../../../src/utils/error/ExceptionHandler.js";

describe('[단위 테스트] ExceptionHandler', () => {
  describe('[함수] throwError', () => {
    test('주어진 에러 메시지로 Error를 던지는지 확인', () => {
      const errorMessage = 'Test error message';
      expect(() => ExceptionHandler.throwError(errorMessage)).toThrowError(
        `${ERROR.prefix} ${errorMessage}`
      );
    });
  });

  describe('[함수] throwErrorIfInvalid', () => {
    test('조건이 유효하지 않을 경우 에러를 던지는지, 유효할 경우 에러를 던지지 않는지 확인', () => {
      const errorMessage = 'Test error message';
      expect(() => ExceptionHandler.throwErrorIfInvalid(false, errorMessage)).toThrowError(
        `${ERROR.prefix} ${errorMessage}`
      );
      expect(() => ExceptionHandler.throwErrorIfInvalid(true, errorMessage)).not.toThrow();
    });
  });

  describe('[함수] retrySyncWithErrorLogging', () => {
    test('동기 함수가 실패할 경우 주어진 횟수만큼 재시도하는지, 성공하는 경우 바로 반환하는지 확인', () => {
      const errorMessage = 'Test error message';
      const errorFunc = jest.fn(() => {
        throw new Error(errorMessage);
      });
      const successFunc = jest.fn(() => 'success');

      expect(() => ExceptionHandler.retrySyncWithErrorLogging(errorFunc, 3)).toThrowError(
        `${ERROR.prefix} ${errorMessage}`
      );
      expect(errorFunc).toHaveBeenCalledTimes(4);

      expect(ExceptionHandler.retrySyncWithErrorLogging(successFunc, 3)).toBe('success');
      expect(successFunc).toHaveBeenCalledTimes(1);
    });
  });

  describe('[함수] retryAsyncWithErrorLogging', () => {
    test('비동기 함수가 실패할 경우 주어진 횟수만큼 재시도하는지, 성공하는 경우 바로 반환하는지 확인', async () => {
      const errorMessage = 'Test error message';
      const errorFunc = jest.fn(async () => {
        throw new Error(errorMessage);
      });
      const successFunc = jest.fn(async () => 'success');

      await expect(ExceptionHandler.retryAsyncWithErrorLogging(errorFunc, 3)).rejects.toThrowError(
        `${ERROR.prefix} ${errorMessage}`
      );
      expect(errorFunc).toHaveBeenCalledTimes(4);

      await expect(ExceptionHandler.retryAsyncWithErrorLogging(successFunc, 3)).resolves.toBe(
        'success'
      );
      expect(successFunc).toHaveBeenCalledTimes(1);
    });
  });
});
