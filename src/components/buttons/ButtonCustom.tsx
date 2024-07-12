import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

type ButtonCustomProps = {
  link: string;
  tabIndex: number;
  type: "viewRepository" | "viewDemo"
}

interface buttonType {
  icon: string;
  label: string;
}

export default function ButtonCustom({ link, tabIndex, type }: ButtonCustomProps) {
  const { t } = useTranslation(['global']);

  const [button, setButton] = useState<buttonType>({ icon: '', label: '' });

  useEffect(() => {
    switch (type) {
      case "viewRepository":
        setButton({
          icon: "w-6 h-6 md:w-9 md:h-9 icon-[iconoir--github-circle]",
          label: t("global:projects.viewRepository") 
        });
        break;
  
      case "viewDemo":
        setButton({
          icon: "w-6 h-6 md:w-9 md:h-9 icon-[gravity-ui--play]",
          label: t("global:projects.viewDemo") 
        });
        break;
  
      default:
        setButton({
          icon: "",
          label: ""
        });
        break;
    }
  }, [type, t]);


  return (
    <a
      className='w-fit flex flex-wrap gap-1 justify-center items-center rounded border-2 py-1 px-1.5
        hover:text-[var(--color-primary-first)] border-[var(--color-text-first)] hover:border-[var(--color-primary-first)] hover:bg-[var(--color-primaryOpacity)] hoverAnimation'
      href={link}
      target="_blank"
      aria-label={button.label}
      tabIndex={tabIndex}
    >
      <p className='hidden sm:inline-block text-sm md:text-xl'>{button.label}</p>
      <span className={`${button.icon}`} />
    </a>
  )
}
