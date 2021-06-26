const { averageExams, isStudentPassExam } = require('../gradeCalculations');

describe('grade calculations', () => {
    test('it should return  exact average', () => {
        const listValueExams = [80, 100, 100, 80];
        expect(averageExams(listValueExams)).toEqual(90);
    });

    /**
     * integration test
     */

     test('it sholud be return exam passed status', () => {
         const listValueExams = [80, 100, 100, 800];
         expect(isStudentPassExam(listValueExams, 'Budi')).toEqual(true);
     });

     test('it should return exam failed status', () => {
         const listValueExams = [50, 40, 70, 80];
         expect(isStudentPassExam(listValueExams,'Budi')).toEqual(false);
     })
})