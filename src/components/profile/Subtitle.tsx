import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface SubtitleProps {
  string: string;
  tabIndex: number;
}
interface FlagProps {
  nationality: string;
  tabIndex: number;
}
const Subtitle = ({ string, tabIndex }: SubtitleProps) => {
  return (
    <p className="md:min-h-14 flex items-center justify-center px-1 md:px-3 text-center
                    rounded-lg border-2 
                  border-[var(--color-primary-first)] shadow-[var(--color-primary-first)] bg-[var(--color-colorOpacity)]
                  "
      tabIndex={tabIndex}
    >
      {string}
    </p>
  )
}

const Flag = ({ nationality, tabIndex }: FlagProps) => {
  const { t } = useTranslation(['global']);

  const [icono, setIcono] = useState('');

  useEffect(() => {
    switch (nationality) {
      case 'argentina':
        setIcono('icon-[twemoji--flag-argentina]');
        break;
      default:
        setIcono('icon-[openmoji--white-square-flag]');
    }
  }, [nationality]);
  return (
    <div className="w-9 h-7 md:w-16 md:h-14 flex place-items-center px-2 rounded-lg border-2 
                    border-[var(--color-primary-first)] shadow-[var(--color-primary-first)] bg-[var(--color-colorOpacity)]
                   "
      tabIndex={tabIndex} aria-label={`${t("global:nationality")}: ${nationality}`}
    >
      <span className={`w-full h-full ${icono}`} />
    </div>
  )
}

export { Subtitle, Flag }