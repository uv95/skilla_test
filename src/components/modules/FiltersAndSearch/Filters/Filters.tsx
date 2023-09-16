import { filters } from '@/utils/consts';
import { Dropdown } from '../../Dropdown/Dropdown';
import style from './Filters.module.scss';
    
interface FiltersProps {
}
    
export const Filters = ({ }: FiltersProps) => {
    return (
        <div className={style.filters}>
            {
                filters.map((options, index) => (
                    <Dropdown key={options[0]} options={index!==0 ? options : undefined} hasOptions={options.length>1}/>
                ))
            }
        </div>
    );
};