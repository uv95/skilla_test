import Image from 'next/image';
import style from './Search.module.scss';
    
interface SearchProps {
}
    
export const Search = ({ }: SearchProps) => {
    return (
        <div className={style.search}>
            <Image src={'./icons/search.svg'} width="16" height="16" alt='search'/>
            <p>Поиск по звонкам</p>       
        </div>
    );
};