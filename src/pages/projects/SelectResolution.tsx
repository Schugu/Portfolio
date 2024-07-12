import { ReactNode } from "react";
import { useTranslation } from 'react-i18next';

interface SelectResolutionProps {
  children: ReactNode;
  onClick?: () => void;
  device: string;
  resolution: string;
  tabIndex: number;
}

export default function SelectResolution({ children, onClick, device, resolution, tabIndex }: SelectResolutionProps) {
  const { t } = useTranslation(['global']);
  
  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' && onClick) {
      onClick();
    }
  };

  return (
    <section
      className={`flex flex-col items-center justify-end p-2 
        rounded border-2 cursor-pointer select-none
        hoverAnimation
        hover:border-[var(--color-primary-first)] hover:shadow-[var(--color-primary-first)] hover:bg-[var(--color-colorOpacity)] 
        ${device === resolution
          ? 'border-[var(--color-primary-first)] shadow-[var(--color-primary-first)] bg-[var(--color-colorOpacity)]'
          : 'border-[var(--color-colorOpacity)] '}`
      }
      onClick={onClick}
      onKeyDown={handleKeyPress}
      tabIndex={tabIndex}
      aria-label={t(`global:projects.device.${resolution}`)}
      role="button"
    >
      {children}
    </section>
  );
}
