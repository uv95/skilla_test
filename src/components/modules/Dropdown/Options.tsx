'use client'
import { CallType, useCallTypeContext } from '@/context/CallTypeContext';
import { callTypes } from '@/utils/consts';
import { Dispatch, SetStateAction } from 'react';
import style from './Dropdown.module.scss';
    
interface OptionsProps {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}
    
export const Options = ({ open, setOpen}: OptionsProps) => {
    const {setCallType, callType} = useCallTypeContext()
 
    return (
        <div className={style.options} style={{opacity: open ? 1 : 0}}>
            {callTypes.map(type => (
                <div key={type} className={`${style.option} ${type===callType ? 'fontBlue' : ''}`} onClick={() => {
                    setCallType(type as CallType)
                    setOpen(false) 
                }}>{type}</div>
            ))}
        </div>
    );
};