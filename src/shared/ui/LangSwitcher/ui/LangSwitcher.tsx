import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, VariantButton } from 'shared/ui/Button/Button';
import cls from './LangSwitcher.module.scss';

type LangSwitcherProps = {
  className?: string;
};

export const LangSwitcher: React.FC<LangSwitcherProps> = ({ className }) => {
    const { t, i18n } = useTranslation();
    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className])}
            variant={VariantButton.CLEAR}
            onClick={toggle}
        >
            {t('Язык')}
        </Button>
    );
};
