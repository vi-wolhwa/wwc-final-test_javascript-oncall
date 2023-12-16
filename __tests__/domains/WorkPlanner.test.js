import WorkPlanner from '../../src/domains/WorkPlanner.js';

describe('[단위 테스트] WorkPlanner', () => {
  let workPlanner;

  beforeEach(() => {
    workPlanner = new WorkPlanner(4, '월');
  });

  describe('[함수] assignPlan', () => {
    test('계획을 올바르게 할당하는지 확인', () => {
      const planArray = ['A', 'B', 'C'];
      const currentIndex = 0;
      const lastAssigned = 'A';
      const plan = { name: '', index: 0 };
      const result = workPlanner.assignPlan(planArray, currentIndex, lastAssigned, plan);
      expect(result).toEqual({ name: 'B', index: 1 });
    });
  });

  describe('[함수] makePlan', () => {
    test('주간 및 주말 계획을 올바르게 생성하는지 확인', () => {
      const weekdayPlan = ['A', 'B', 'C'];
      const weekendPlan = ['D', 'E', 'F'];
      workPlanner.makePlan(weekdayPlan, weekendPlan);
      const resultPlan = workPlanner.getWorkPlan();
      expect(resultPlan[0].name).toBe('A');
      expect(resultPlan[4].name).toBe('B');
      expect(resultPlan[6].name).toBe('E');
    });
  });

  describe('[함수] getWorkPlan', () => {
    test('작업 계획을 올바르게 가져오는지 확인', () => {
      const resultPlan = workPlanner.getWorkPlan();
      expect(resultPlan).toBeInstanceOf(Array);
      expect(resultPlan.length).toBe(30);
    });
  });
});
