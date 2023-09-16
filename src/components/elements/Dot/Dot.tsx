import style from './Dot.module.scss';

export enum DotColor {
    RED = 'red',
    GREEN = 'green',
    YELLOW = 'yellow',
    GRAY = 'gray'
}
    
interface DotProps {
    quantity?: number,
    color: DotColor
}
    
export const Dot = ({quantity=1, color}: DotProps) => {
    return (
        <div className={`${style.dots} ${style[color]}`}>
            {[...Array(quantity)].map((_, i) => (
                <svg key={i} width="8" height="8" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4" cy="4" r="4" />
                </svg>

            ))}
        </div>
    );
};