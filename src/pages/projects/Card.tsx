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
      className="overflow-hidden relative w-full h-auto border-2 shadow border-[var(--color-border)] shadow-[var(--color-border)]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={() => { setIsVisible(true) }}
      tabIndex={tabIndex}
    >
      <img
        src={`/projects/${project.id}/frontPage.png`}
        alt="Portada del proyecto"
        className={`w-full h-auto object-cover transition-all duration-[0.3s] ${isVisible ? 'blur-lg transform scale-125' : ''}`}
      />

      <div
        className={`absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-4 p-2
          bg-black text-[var(--color-text-both)]
          transition-all duration-500 ${isVisible ? 'bg-opacity-50 opacity-100' : 'bg-opacity-0 opacity-0'}`}
      >
        <p className="w-full text-center font-bold text-2xl md:text-3xl border-b-2 border-[var(--color-primary)]"
          tabIndex={tabIndex}
        >
          {project.title}
        </p>

        <section className='w-full flex justify-center items-center flex-wrap gap-2'>
          {project.techs.map((tech, index) => (
            <Tooltip text={tech} key={project.id + tech + index}>
              <IconosTechs tech={tech} color='text-CREMA' />
            </Tooltip>
          ))}
        </section>
        <Link
          tabIndex={tabIndex}
          to={`/projects/${project.id}`}
          aria-label={t("global:projects.showMore")}
          className="flex justify-center items-center text-xl p-1 rounded-2xl w-1/2 border-2 shadow transition-colors duration-100 ease-in-out 
          border-[var(--color-primary)] shadow-[var(--color-primary)] hover:bg-[var(--color-colorOpacity)]"
        >
          {t("global:projects.showMore")}
        </Link>
      </div>
    </div>
  );
}
