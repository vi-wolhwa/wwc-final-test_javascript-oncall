import Preprocessor from '../../src/utils/Preprocessor.js';

describe('[단위 테스트] Preprocessor', () => {
  describe('[함수] filterOutEmptyStrings', () => {
    test('빈 문자열을 필터링하는지 확인', () => {
      const input = ['hello', '', 'world', ''];
      const output = ['hello', 'world'];
      expect(Preprocessor.filterOutEmptyStrings(input)).toEqual(output);
    });
  });

  describe('[함수] deleteSpacesInString', () => {
    test('문자열 내 공백을 삭제하는지 확인', () => {
      const input = ['hel lo', 'wor ld'];
      const output = ['hello', 'world'];
      expect(Preprocessor.deleteSpacesInString(input)).toEqual(output);
    });
  });

  describe('[함수] trimEdgeWhitespaces', () => {
    test('문자열 양 끝의 공백을 제거하는지 확인', () => {
      const input = [' hello ', ' world '];
      const output = ['hello', 'world'];
      expect(Preprocessor.trimEdgeWhitespaces(input)).toEqual(output);
    });
  });

  describe('[함수] splitStringByDelimiter', () => {
    test('주어진 구분자로 문자열을 분리하는지 확인', () => {
      const input = ['hello,world', 'foo,bar'];
      const output = [
        ['hello', 'world'],
        ['foo', 'bar']
      ];
      expect(Preprocessor.splitStringByDelimiter(input, ',')).toEqual(output);
    });
  });

  describe('[함수] convertStringToNumber', () => {
    test('문자열을 숫자로 변환하는지 확인', () => {
      const input = ['123', '456'];
      const output = [123, 456];
      expect(Preprocessor.convertStringToNumber(input)).toEqual(output);
    });
  });

  describe('[함수] convertStringToUpperCase', () => {
    test('입력을 대문자로 변환하는지 확인', () => {
      const input = 'hello';
      const output = 'HELLO';
      expect(Preprocessor.convertStringToUpperCase(input)).toEqual(output);
    });
  });

  describe('[함수] convertStringToLowerCase', () => {
    test('입력을 소문자로 변환하는지 확인', () => {
      const input = 'HELLO';
      const output = 'hello';
      expect(Preprocessor.convertStringToLowerCase(input)).toEqual(output);
    });
  });

  describe('[함수] process', () => {
    test('주어진 함수들을 순서대로 처리하는지 확인', () => {
      const input = ' ,  123, 456 ,,  ';
      const output = [123, 456];
      const funcs = [
        [Preprocessor.splitStringByDelimiter, ','],
        Preprocessor.deleteSpacesInString,
        Preprocessor.trimEdgeWhitespaces,
        Preprocessor.filterOutEmptyStrings,
        Preprocessor.convertStringToNumber
      ];

      expect(Preprocessor.process(input, funcs)).toEqual(output);
    });
  });
});
