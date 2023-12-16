import PlanFactory from '../../../src/domains/plan/PlanFactory.js';

describe('[단위 테스트] PlanFactory', () => {
  test('Plan 객체를 생성하는지 확인', () => {
    const plan = new PlanFactory('월').createPlan(5, 5);
    expect(plan.month).toEqual(5);
    expect(plan.day).toEqual(5);
    expect(plan.dow).toEqual('금');
    expect(plan.holidayMark).toEqual(true);
    expect(plan.name).toEqual('');
  });
});
