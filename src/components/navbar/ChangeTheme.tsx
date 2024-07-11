import React from 'react';
import { useTheme } from '@/context/ThemeContext.tsx';
import Cookies from 'js-cookie';
import { useTranslation } from "react-i18next";

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme | ((prevTheme: Theme) => Theme)) => void;
}

export default function ChangeTheme({ tabIndex }: { tabIndex: number }) {
  const { t } = useTranslation(['global']);
  const { theme, setTheme } = useTheme() as ThemeContextType;

  const handleChangeTheme = () => {
    setTheme((prevTheme: Theme) => {
      const newTheme: Theme = prevTheme === 'light' ? 'dark' : 'light';
      const htmlElement = document.querySelector('html');
      if (htmlElement) {
        htmlElement.classList.toggle('dark', newTheme === 'dark');
      }
      Cookies.set('theme', newTheme, { expires: 365 });
      return newTheme;
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLSpanElement>) => {
    if (event.key === 'Enter') {
      handleChangeTheme();
    }
  };

  return (
    <div
      aria-label={`${t("global:navbar.changeTheme-aria-label")}: ${theme}`}
      onClick={handleChangeTheme}
      onKeyDown={handleKeyDown}
      className="cursor-pointer select-none flex justify-center items-center"
      tabIndex={tabIndex}
    >
      <span
        aria-hidden='true'
        className={`w-6 h-6 md:w-7 md:h-7 hover:text-[var(--color-primary)]
          ${theme === 'light'
            ? 'icon-[tdesign--mode-light]'
            : 'icon-[tdesign--mode-dark] '}
        `}
      ></span>
    </div>
  );
}
