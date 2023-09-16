import { classNames } from '@/utils/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import style from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    PRIMARY = 'primary',
    OUTLINE = 'outline',
    BALANCE = 'balance',
  }
  
export enum ButtonSize {
      M='size_m',
      L='size_l',
  }

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme: ButtonTheme;
  size?: ButtonSize;
}

const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        size,
        ...otherProps
    } = props;

    return (
        <button
            type='button'
            className={classNames(style.button, {}, [className || '', style[theme], size ? style[size]: ''])}

            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;
