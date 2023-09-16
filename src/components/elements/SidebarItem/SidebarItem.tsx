import Image from 'next/image';
import { Dot, DotColor } from '../Dot/Dot';
import style from './SidebarItem.module.scss';
    
interface SidebarItemProps {
    item: {icon: string, text: string},
    active?: boolean
}
    
export const SidebarItem = ({item, active }: SidebarItemProps) => {
    return (
        <div className={`${style.sidebarItem} ${active ? style.active : ''}`}>
            <Image src={item.icon} width='24' height='24' alt={item.text}/>
            <p>{item.text}</p>
            {active && <div className={style.dot}>
                <Dot color={DotColor.YELLOW}/>
            </div>}
        </div>
    );
};