import { callsAnalytics } from '@/utils/consts';
import Image from 'next/image';
import { CallsAnalytics } from '../CallsAnalytics/CallsAnalytics';
import style from './Header.module.scss';
    
interface HeaderProps {
}
    
export const Header = ({ }: HeaderProps) => {
    return (
        <header className={style.header}>
            <p>Среда, 13 окт</p>
            <div className={style.callsAnalytics}>
                {callsAnalytics.map(item => (
                    <CallsAnalytics key={item.title} item={item}/>
                ))}
            </div>

            <Image className={style.search} src='./icons/search.svg' width={16} height={16} alt="search"/>

            <div className={style.username}>
                <p>ИП Сидорова Александра Михайловна</p>
                <Image className={style.arrow} src='./icons/arrow.svg' width={24} height={24} alt="open"/>
            </div>

            <div className={style.avatar}>
                <Image className={style.avatarImg} src='/images/avatar.jpg' width={40} height={40} alt="avatar"/>
                <Image className={style.arrow} src='./icons/arrow.svg' width={24} height={24} alt="open"/>
            </div>
           
        </header>
    );
};