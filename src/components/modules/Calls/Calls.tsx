'use client'

import { CallType, useCallTypeContext } from '@/context/CallTypeContext';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Call } from '../Call/Call';
import style from './Calls.module.scss';
    
interface CallsProps {
    calls: any
}
    
export const Calls = ({calls}: CallsProps) => {
    const { callType} = useCallTypeContext();
    const [filteredCalls, setFilteredCalls] = useState(calls);
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        const filterCalls = (call:any) => {
            if(callType===CallType.INGOING) return call.in_out===1;
            if(callType===CallType.OUTGOING) return call.in_out===0;
            return call;
        }
        setFilteredCalls(calls.filter((call:any) => filterCalls(call)))
    }, [callType, calls])

    const getDay = (index:number) => index+1 <= filteredCalls.length && new Date(filteredCalls[index].date).getDate();
    
    const getYesterdayCallsNum = (index:number) => {
        const isLastYesterdayCall = index>1 && getDay(index) < getDay(index-1);
        const lastYesterdayCallIndex = filteredCalls.findIndex((_:any, i:number) => i===index && isLastYesterdayCall)

        return lastYesterdayCallIndex>0 && filteredCalls.slice(lastYesterdayCallIndex).length;
    }

    return (
        <table className={style.calls}>
            <thead>
                <tr className={style.header}>
                    <th>
                        <Image style={{visibility: isHovered ? 'visible' : 'hidden'}} src={'/icons/checkbox.svg'} width='16' height='16' alt='checkbox'/>
                    </th>
                    <th>Тип</th>
                    <th>Время</th>
                    <th>Сотрудник</th>
                    <th></th>
                    <th>Звонок</th>
                    <th>Источник</th>
                    <th>Оценка</th>
                    <th>Длительность</th>
                </tr>
            </thead>

            <tbody>
                {filteredCalls.map((call:any, index: number) => (
                    <Call key={call.id} setIsHovered={setIsHovered} call={call} index={index} getDay={getDay} yesterdayCallsNum={getYesterdayCallsNum(index)}/>
                ))}
            </tbody>
            
        </table>
    );
};