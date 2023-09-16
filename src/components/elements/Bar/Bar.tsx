import style from './Bar.module.scss';

export enum BarColor {
    RED = 'red',
    GREEN = 'green',
    YELLOW = 'yellow',
}
    
interface BarProps {
    color: BarColor
}
    
export const Bar = ({ color}: BarProps) => {
    return (
        <div className={style.bar}>
            <div className={`${style.progress} ${style[`progress-${color}`]} ${color}`}></div>
        </div>
    );
};