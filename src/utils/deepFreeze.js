/**
 * 객체를 재귀적으로 동결하는 함수.
 * @param {object} obj - 적용할 객체.
 * @returns {object} 동결된 객체.
 */
export default function deepFreeze(obj) {
  Object.keys(obj).forEach(function (prop) {
    if (typeof obj[prop] === 'object' && !Object.isFrozen(obj[prop])) {
      deepFreeze(obj[prop]);
    }
  });

  return Object.freeze(obj);
}
