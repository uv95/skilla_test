import { Dot, DotColor } from '../Dot/Dot';
import style from './Grade.module.scss';

export enum Grades {
    EXCELLENT = 'Отлично', 
    GOOD = 'Хорошо', 
    BAD = 'Плохо', 
    FIND_OUT = 'Распознать', 
}
    
interface GradeProps {
    grade: Grades
}
    
export const Grade = ({ grade}: GradeProps) => {
    const getDotsNumber = (grade: Grades) => {
        if(grade===Grades.EXCELLENT) return 3;
        if(grade===Grades.GOOD) return 2;
        if(grade===Grades.BAD) return 1;
    }
    const getDotsColor = (grade: Grades) => {
        if(grade===Grades.EXCELLENT) return DotColor.GREEN;
        if(grade===Grades.GOOD) return DotColor.GRAY;
        return DotColor.RED;
    }
    const getClassname = (grade: Grades) => {
        if(grade===Grades.EXCELLENT) return 'excellent';
        if(grade===Grades.GOOD) return 'good';
        if(grade===Grades.BAD) return 'bad';
        return 'findOut'
    }
    return (
        <div className={style.grade}>
            {grade && grade!=Grades.FIND_OUT && <Dot quantity={getDotsNumber(grade)} color={getDotsColor(grade)}/> }
            <div className={`${style[`grade-${getClassname(grade)}`]}`}>{grade}</div>
        </div>
    );
};