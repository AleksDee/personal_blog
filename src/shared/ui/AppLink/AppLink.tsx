import React, { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  children: React.ReactNode;
  variant?: AppLinkVariant;
  className?: string;
}

const AppLink: FC<AppLinkProps> = ({
    to,
    className,
    children,
    variant = AppLinkVariant.PRIMARY,
    ...otherProps
}) => (
    <Link
        to={to}
        className={classNames(cls.AppLink, {}, [className, cls[variant]])}
        {...otherProps}
    >
        {children}
    </Link>
);

export default AppLink;
