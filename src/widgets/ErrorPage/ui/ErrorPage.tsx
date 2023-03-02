import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkVariant } from 'shared/ui/AppLink/AppLink';
import { Button, VariantButton } from 'shared/ui/Button/Button';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
  className?: string;
}

export const ErrorPage: React.FC<ErrorPageProps> = ({ className }: ErrorPageProps) => {
  const {t} = useTranslation();

  const reloadPage = () => {
    location.reload();
  }

  return (
    <div className={classNames(cls.ErrorPage, {}, [className])}>
        <p>{t('Произошла непредвиденная ошибка')}</p>
        <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
    </div>
  );
}
  
