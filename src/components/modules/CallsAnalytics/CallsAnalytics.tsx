import { Bar, BarColor } from '../../elements/Bar/Bar';
import style from './CallsAnalytics.module.scss';
    
interface CallsAnalyticsProps {
    item: {
        title: string;
        stats: string;
        color: BarColor;
    }
}
    
export const CallsAnalytics = ({ item}: CallsAnalyticsProps) => {
    return (
        <div className={style.callsAnalytics}>
            <p>{item.title} <span className={style[`stats-${item.color}`]}>{item.stats}</span></p>
            <Bar color={item.color}/>
        </div>
    );
};