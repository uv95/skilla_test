import { Filters } from './Filters/Filters';
import style from './FiltersAndSearch.module.scss';
import { Search } from './Search/Search';
    
interface FiltersAndSearchProps {
}
    
export const FiltersAndSearch = ({ }: FiltersAndSearchProps) => {
    return (
        <div className={style.filtersAndSearch}>
            <Search/>
            <Filters/>
        </div>
    );
};