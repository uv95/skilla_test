import { CSSProperties } from "react";

export enum ArrowIconColor {
    GRAY = '#ADBFDF',
    BLUE = '#002CFB'
}
interface ArrowIconProps {
    color: ArrowIconColor
    size: { width: number, height:number}
    styles? : CSSProperties
}
    
export const ArrowIcon = ({ color, size, styles}: ArrowIconProps) => {
    return (
        <svg style={styles} width={size.width} height={size.height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_17502_2580)">
                <path opacity="0.8" d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z" fill={color}/>
            </g>
            <defs>
                <clipPath id="clip0_17502_2580">
                    <rect width="24" height="24" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    );
};