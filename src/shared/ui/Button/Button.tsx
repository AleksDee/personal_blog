import React, { ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum VariantButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantButton;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    className,
    children,
    variant,
    ...otherProps
}) => (
    <button
        className={classNames(cls.Button, {}, [className, cls[variant]])}
        {...otherProps}
    >
        {children}
    </button>
);
