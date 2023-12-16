const Preprocessor = {
  /**
   * 입력값에 함수 리스트를 순차적으로 적용하는 함수.
   * @param {string|Array<string>} input - 처리할 입력값.
   * @param {Array<function>} funcs - 순차적으로 적용할 함수들의 리스트.
   * @returns {string|Array<string>} 함수들이 순차적으로 적용된 결과.
   */
  process(input, funcs) {
    return funcs.reduce((value, func) => {
      if (Array.isArray(func)) {
        const [f, ...args] = func;
        return f.apply(this, [value, ...args]);
      } else {
        return func.call(this, value);
      }
    }, input);
  },

  /**
   * 입력값에 주어진 함수를 적용하는 함수.
   * 입력값이 배열인 경우, 각 원소에 함수를 적용한다.
   * @param {string|Array<string>} input - 처리할 입력값.
   * @param {function} func - 적용할 함수.
   * @returns {string|Array<string>} 처리된 입력값.
   */
  applyFunctionToInput(input, func) {
    return Array.isArray(input) ? input.map(func) : func(input);
  },

  /**
   * 배열에서 빈 문자열('')을 제거하는 함수.
   * @param {Array<string>} input - 처리할 배열.
   * @returns {Array<string>} 빈 문자열이 제거된 배열.
   */
  filterOutEmptyStrings(input) {
    return input.filter((str) => str !== '');
  },

  /**
   * 문자열 또는 배열의 모든 문자열에서 공백을 제거하는 함수.
   * @param {string|Array<string>} input - 처리할 입력값.
   * @returns {string|Array<string>} 공백이 제거된 입력값.
   */
  deleteSpacesInString(input) {
    return this.applyFunctionToInput(input, (str) => str.replace(/\s/g, ''));
  },

  /**
   * 문자열 또는 배열의 모든 문자열에서 앞뒤 공백을 제거하는 함수.
   * @param {string|Array<string>} input - 처리할 입력값.
   * @returns {string|Array<string>} 앞뒤 공백이 제거된 입력값.
   */
  trimEdgeWhitespaces(input) {
    return this.applyFunctionToInput(input, (str) => str.trim());
  },

  /**
   * 주어진 구분자로 문자열 또는 배열의 모든 문자열을 분할하는 함수.
   * @param {string|Array<string>} input - 처리할 입력값.
   * @param {string} delimiter - 분할에 사용할 구분자.
   * @returns {string|Array<string>} 분할된 입력값.
   */
  splitStringByDelimiter(input, delimiter) {
    return this.applyFunctionToInput(input, (str) => str.split(delimiter));
  },

  /**
   * 문자열 또는 배열의 모든 문자열을 숫자로 변환하는 함수.
   * @param {string|Array<string>} input - 처리할 입력값.
   * @returns {string|Array<string>} 숫자로 변환된 입력값.
   */
  convertStringToNumber(input) {
    return this.applyFunctionToInput(input, (str) => Number(str));
  },  

  /**
   * 문자열 또는 배열의 모든 문자를 대문자로 변환하는 함수.
   * @param {string|Array<string>} input - 처리할 입력값.
   * @returns {string|Array<string>} 대문자로 변환된 입력값.
   */
  convertStringToUpperCase: function (input) {
    return this.applyFunctionToInput(input, (str) => str.toUpperCase());
  },

  /**
   * 문자열 또는 배열의 모든 문자를 대문자로 변환하는 함수.
   * @param {string|Array<string>} input - 처리할 입력값.
   * @returns {string|Array<string>} 대문자로 변환된 입력값.
   */
  convertStringToLowerCase: function (input) {
    return this.applyFunctionToInput(input, (str) => str.toLowerCase());
  }
};

export default Preprocessor;
