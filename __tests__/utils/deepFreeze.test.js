import deepFreeze from '../../src/utils/deepFreeze.js';

describe('[단위 테스트 | 함수] deepFreeze', () => {
  test('객체를 재귀적으로 동결하는지 확인', () => {
    const obj = {
      a: 1,
      b: [2, 3],
      c: {
        d: 4,
        e: [5, 6],
        f: {
          g: 7
        }
      }
    };

    deepFreeze(obj);

    expect(Object.isFrozen(obj)).toBe(true);
    expect(Object.isFrozen(obj.b)).toBe(true);
    expect(Object.isFrozen(obj.c)).toBe(true);
    expect(Object.isFrozen(obj.c.e)).toBe(true);
    expect(Object.isFrozen(obj.c.f)).toBe(true);
  });

  test('동결 후 수정으로부터 보호되는지 확인', () => {
    const obj = {
      a: 1,
      b: [2, 3],
      c: {
        d: 4,
        e: [5, 6],
        f: {
          g: 7
        }
      }
    };

    deepFreeze(obj);

    expect(() => {
      obj.a = 10;
    }).toThrowError();
    expect(() => {
      obj.b.push(4);
    }).toThrowError();
    expect(() => {
      obj.c.d = 40;
    }).toThrowError();
    expect(() => {
      obj.c.e.push(7);
    }).toThrowError();
    expect(() => {
      obj.c.f.g = 70;
    }).toThrowError();
  });
});
