'use client'
import Image from 'next/image';
import { useRef, useState } from 'react';
import style from './Audio.module.scss';
    
interface AudioProps {
    src: string
    duration: string
}
    
export const Audio = ({ src, duration}: AudioProps) => {
    const audioRef = useRef<HTMLAudioElement>(null)
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    // const [duration, setDuration] = useState(0);

    const togglePlay = () => {
        if(audioRef.current) { 
            if(isPlaying) 
                audioRef.current.pause()
            else 
                audioRef.current.play()
    
            
        } }

    const handleTimeUpdate = () => {
        if(audioRef.current) {
            setCurrentTime(audioRef.current.currentTime)
            // setDuration(audioRef.current.duration)
        }
    }

    if(!src) return null;

    return (
        <div className={style.audio}>
            <p>{duration}</p>
            <audio preload="metadata" onPlaying={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)} onTimeUpdate={handleTimeUpdate} ref={audioRef} src={src} className={style.auo}>
            </audio>
            <button className={style.playBtn} onClick={togglePlay}>
                <Image src={isPlaying ? '/icons/pause.svg' : '/icons/play.svg'} width='8' height='10' alt='play/pause'/>
            </button>
            <div className={style.progressBar}></div>
            <button className={style.downloadBtn}>
                <Image src={'/icons/load.svg'} width='13' height='16' alt='downloade'/>
            </button>
        </div>
    );
};