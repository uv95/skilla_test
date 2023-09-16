'use client'
import { Audio } from '@/components/elements/Audio/Audio';
import { getRecord } from '@/utils/api';
import { avatars, grades, phoneNumbers, sources } from '@/utils/consts';
import { getDuration } from '@/utils/getDuration';
import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Grade, Grades } from '../../elements/Grade/Grade';
import style from './Call.module.scss';
    
interface CallProps {
    call: any
    index:number
    setIsHovered: Dispatch<SetStateAction<boolean>>
    getDay: (index: number) => number | false
    yesterdayCallsNum: number
}
    
export const Call = ({call, index, setIsHovered, getDay, yesterdayCallsNum }: CallProps) => {
    const [isRowHovered, setIsRowHovered] = useState(false)
    const [audio, setAudio] = useState<any>(null);


    useEffect(() => {
        async function getAudio() { 
            const record = await getRecord(call.record) ;
            return setAudio(record)
        }
        call.record && getAudio()
    }, [call.record])

    const setCallNumber = (index: number) => {
        // index>1 && getDay(index) < getDay(index-1)

        const {name, phone, company} = phoneNumbers[index % phoneNumbers.length];
        const firstParagaraphMargin = {marginBottom: '6px'}

        if(name && company) return <>
            <p style={firstParagaraphMargin}>{name}</p>
            <p>{company}</p>
        </>  
        if(name && !company) return <>
            <p style={firstParagaraphMargin}>{name}</p>
            <p>{phone}</p>
        </>  
        if(!name && !company) return <>
            <p>{phone}</p>
        </>  
    }

    const isLastYesterdayCall = index>1 && getDay(index) < getDay(index-1)
    const isFirstTodayCall = index>1 && getDay(index) > getDay(index+1)

    return (
        <>
            {isLastYesterdayCall && <tr className={style.yesterday}><td>вчера<span>{yesterdayCallsNum}</span></td></tr>}
            <tr className={`${style.call} ${isFirstTodayCall ? style.isFirstTodayCall : ''}`} 
                onMouseEnter={() => { 
                    setIsHovered(true)
                    setIsRowHovered(true)
                }} onMouseLeave={() => { 
                    setIsHovered(false)
                    setIsRowHovered(false)
                }}>
                <td>
                    {isRowHovered && <Image src={'/icons/checkbox.svg'} width='16' height='16' alt='checkbox'/>}
                </td>
                <td className={style.callType}>
                    <Image src={call.in_out===1 ? '/icons/ingoing.svg' : '/icons/outgoing.svg'} width='12' height='12' alt='call'/>
                </td>
               

                <td>{new Date(call.date).toLocaleTimeString('ru-RU').slice(0, -3)}</td>

                <td>
                    <Image src={avatars[index % avatars.length]} width='32' height='32' alt='avatar'/>
                </td>
                <td>
                    <div>
                        <Image style={{visibility: !(index % 3) ? 'visible' : 'hidden'}} src={'/icons/web.svg'} width='20' height='20' alt='web'/>
                        {isRowHovered && <Image src={'/icons/phone.svg'} width='16' height='16' alt='phone'/>}
                    </div>
                </td>
                <td>{setCallNumber(index)}</td>

                <td className={style.source}>{sources[index % sources.length]}</td>

                <td>{grades[index % grades.length] && <Grade grade={grades[index % grades.length] as Grades}/>}</td>

                <td>{
                    isRowHovered && 
                call.record ? <Audio src={audio!} duration={getDuration(call.time)}/> 
                        :
                        call.time ? getDuration(call.time) : 
                            ''}
                </td>
            </tr>
        </>
    );
};