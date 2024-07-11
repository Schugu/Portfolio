import { ReactNode } from "react";

interface SelectResolutionProps {
  children: ReactNode;
  onClick?: () => void;
  device: string;
  resolution: string;
  tabIndex: number;
}

export default function SelectResolution({ children, onClick, device, resolution, tabIndex }: SelectResolutionProps) {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' && onClick) {
      onClick();
    }
  };

  return (
    <section
      className={`flex flex-col items-center justify-end p-2 
        rounded border-2 cursor-pointer select-none
        transition-colors duration-100 ease-in-out 
        hover:border-[var(--color-primary)] hover:shadow-[var(--color-primary)] hover:bg-[var(--color-colorOpacity)] 
        ${device === resolution
          ? 'border-[var(--color-primary)] shadow-[var(--color-primary)] bg-[var(--color-colorOpacity)]'
          : 'border-[var(--color-colorOpacity)] '}`
      }
      onClick={onClick}
      onKeyDown={handleKeyPress}
      tabIndex={tabIndex}
      aria-label={device}
      role="button"
    >
      {children}
    </section>
  );
}
