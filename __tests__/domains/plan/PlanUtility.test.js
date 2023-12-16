import PlanUtility from '../../../src/domains/plan/PlanUtility.js';

const { isHoliday, isWeekend } = PlanUtility;

describe('[단위 테스트] PlanUtility', () => {
  describe('[함수] isWeekend', () => {
    test('주말 여부를 정상적으로 판단하는지 확인', () => {
      expect(isWeekend('월')).toBe(false);
      expect(isWeekend('화')).toBe(false);
      expect(isWeekend('수')).toBe(false);
      expect(isWeekend('목')).toBe(false);
      expect(isWeekend('금')).toBe(false);
      expect(isWeekend('토')).toBe(true);
      expect(isWeekend('일')).toBe(true);
    });
  });

  describe('[함수] isHoliday', () => {
    test('공휴일 여부를 정상적으로 판단하는지 확인', () => {
      expect(isHoliday(5, 5)).toBe(true);
      expect(isHoliday(12, 25)).toBe(true);
      expect(isHoliday(12, 31)).toBe(false);
    });
  });
});
