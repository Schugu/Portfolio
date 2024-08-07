import { useState } from 'react';
import { Link } from 'react-router-dom';
import IconosTechs from "@/components/IconosTechs.tsx";
import Tooltip from "@/components/tooltip/Tooltip.tsx";
import { useTranslation } from 'react-i18next';
import { ProjectType } from "@/types/ProfileContextTypes.ts";

type CardProps = {
  project: ProjectType;
  tabIndex?: number;
};

export default function Card({ project, tabIndex }: CardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation(['global', 'profile', 'projects']);

  const handleMouseEnter = () => {
    setTimeout(() => setIsVisible(true), 100);
  };

  const handleMouseLeave = () => {
    setTimeout(() => setIsVisible(false), 100);
  };

  return (
    <div
      key={project.id}
      className="overflow-hidden relative w-full h-auto border-2 shadow border-[var(--color-border-first)] shadow-[var(--color-border-first)]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={() => { setIsVisible(true) }}
      tabIndex={tabIndex}
    >
      <img
        src={`/projects/${project.id}/frontPage.png`}
        alt={t("global:projects.projectCover")}
        className={`w-full h-auto object-cover transition-all duration-[0.3s] ${isVisible ? 'blur-lg transform scale-125' : ''}`}
      />

      <div
        className={`absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-4 p-2
          bg-black text-[var(--color-text-third)]
          transition-all duration-500 ${isVisible ? 'bg-opacity-50 opacity-100' : 'bg-opacity-0 opacity-0'}`}
      >
        <p className="w-full text-center font-bold text-2xl md:text-3xl border-b-2 border-[var(--color-primary-first)]"
          tabIndex={tabIndex}
        >
          {project.title}
        </p>

        <section className='w-full flex justify-center items-center flex-wrap gap-2' aria-hidden>
          {project.techs.map((tech, index) => (
            <Tooltip text={tech} key={`${project.id}-${tech}-${index}`}>
              <IconosTechs tech={tech} color='text-CREMA' />
            </Tooltip>
          ))}
        </section>
        <Link
          tabIndex={tabIndex}
          to={`/projects/${project.id}`}
          aria-label={t("global:projects.showMore")}
          className="flex justify-center items-center text-base md:text-xl py-0.5 md:p-1 rounded-2xl w-1/2 border-2 shadow hoverAnimation
          border-[var(--color-primary-first)] shadow-[var(--color-primary-first)] hover:bg-[var(--color-colorOpacity)]"
        >
          {t("global:projects.showMore")}
        </Link>
      </div>
    </div>
  );
}
