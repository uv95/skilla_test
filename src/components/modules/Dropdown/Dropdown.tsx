'use client'
import { useCallTypeContext } from '@/context/CallTypeContext';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowIcon, ArrowIconColor } from '../../elements/icons/ArrowIcon';
import style from './Dropdown.module.scss';
import { Options } from './Options';

interface DropdownProps {
   hasOptions?: boolean
   options?: string[]
}
    
export const Dropdown = ({options, hasOptions}: DropdownProps) => {
    const { callType} = useCallTypeContext()

    const [open, setOpen] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    const arrowStyle = {transform: `scaleY(${open ? -1 : 1})`}

    return (
        <div className={style.dropdown}>
            <button onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)}className={style.button} onClick={() => setOpen(!open)}>

                <p className={open ? 'fontDarkBlue' : ''}>{options ? options[0] : callType}</p>

                <ArrowIcon color={isHovered ? ArrowIconColor.BLUE : ArrowIconColor.GRAY} size={{width: 18, height: 21}} styles={arrowStyle}/>

            </button>
     
            {hasOptions && <Options open={open} setOpen={setOpen} />}
        </div>
    );
};