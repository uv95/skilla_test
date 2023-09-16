'use client'
import style from './Sidebar.module.scss';
import Image from 'next/image';
import { SidebarItem } from '../../elements/SidebarItem/SidebarItem';
import { menu } from '@/utils/consts';
import { useState } from 'react';
import Button, { ButtonSize, ButtonTheme } from '../../elements/Button/Button';
import { AddIcon, AddIconColor} from '../../elements/icons/AddIcon';

    
interface SidebarProps {
}
    
export const Sidebar = ({ }: SidebarProps) => {
    const [active] = useState('Звонки')

    return (
        <div className={style.sidebar}>
            <Image className={style.logo} src={'icons/logo.svg'} width="109" height="28" alt="logo"/>
            <nav>
                {menu.map(item => (
                    <SidebarItem key={item.text} item={item} active={active===item.text}/>)) }
            </nav>

            <div className={style.buttons}>
                <Button theme={ButtonTheme.PRIMARY} size={ButtonSize.L}>
                    <p>Добавить заказ</p>
                    <AddIcon color={AddIconColor.GRAY}/>
                </Button>

                <Button theme={ButtonTheme.PRIMARY} size={ButtonSize.L}>
                    <p>Оплата</p>
                    <Image src={'./icons/pay.svg'} width="24" height="24" alt='pay'/>
                </Button>
            </div>
        </div>
    );
};