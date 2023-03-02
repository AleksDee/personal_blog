import React from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkVariant } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }: NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink
                variant={AppLinkVariant.SECONDARY}
                className={cls.mainLink}
                to="/"
            >
                Главная
            </AppLink>
            <AppLink variant={AppLinkVariant.SECONDARY} to="/about">
                О сайте
            </AppLink>
        </div>
    </div>
);
