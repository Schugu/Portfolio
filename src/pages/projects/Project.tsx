import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SectionCard from "@/components/SectionCard.tsx";
import SelectResolution from "./SelectResolution.tsx";
import Techs from "@/components/Techs";
import Tooltip from "@/components/tooltip/Tooltip.tsx";
import { useProfile } from "@/context/ProfileContext.tsx";
import { useTranslation } from 'react-i18next';
import { ProjectType } from '@/types/ProfileContextTypes.ts';

type DeviceType = 'cellphone' | 'tablet' | 'desktop';

type NewProjectType = ProjectType & {
  approach?: string;
}

export default function Project() {
  const { t } = useTranslation(['global', 'profile', 'projects']);
  const { dataProjects, loading } = useProfile();
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<NewProjectType | null>(null);
  const [projectIndex, setProjectIndex] = useState<number>(-1);
  const [device, setDevice] = useState<DeviceType>('desktop');

  useEffect(() => {
    if (dataProjects && dataProjects.approaches && projectId) {
      const allProjects = Object.values(dataProjects.approaches).reduce((acc, projects) => acc.concat(projects), []);
      const foundProject = allProjects.find(p => p.id === parseInt(projectId));

      if (foundProject) {
        const approachEntry = Object.entries(dataProjects.approaches).find(([, projects]) => projects.includes(foundProject));
        const approach = approachEntry?.[0];
        const index = approachEntry ? approachEntry[1].indexOf(foundProject) : -1;

        setProject({ ...foundProject, approach });
        setProjectIndex(index);
      } else {
        setProject(null);
        setProjectIndex(-1);
      }
    } else {
      setProject(null);
      setProjectIndex(-1);
    }
  }, [dataProjects, projectId]);

  if (loading) {
    return (
      <SectionCard sectionTitle={t("global:projects.section")}>
        <p tabIndex={7} className="text-2xl">{t("global:projects.projectLoading")}</p>
      </SectionCard>
    );
  }

  if (!projectId || !dataProjects || !project) {
    return (
      <SectionCard sectionTitle={t("global:projects.section")}>
        <p tabIndex={7} className="text-2xl">{t("global:projects.projectNotFound")}</p>
      </SectionCard>
    );
  }

  return (
    <SectionCard sectionTitle={`${t("global:projects.section")}["${project?.title ?? t("global:projects.projectNotFound")}"]`}>
      <div className="w-full h-full flex flex-col gap-2 p-2">
        <section className="w-full flex flex-wrap justify-center gap-4 p-4 rounded-lg bg-[var(--color-background)]">
          <article className='w-full flex flex-col'>
            <div className="w-full flex justify-between items-center">
              <Tooltip text={t("global:projects.back")} position='right'>
                <Link to='/projects'
                  aria-label={t("global:projects.back")}
                  tabIndex={6}
                  className='flex justify-center items-center border-2 border-transparent py-1 px-1.5 rounded 
                  hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] hover:bg-[var(--color-primaryOpacity)]'
                >
                  <span className="w-7 h-7 md:w-9 md:h-9 icon-[tdesign--enter]" />
                </Link>
              </Tooltip>

              {
                project.livePreviewLink && project.linkGithub
                  ? (<a
                    className='flex flex-wrap gap-1 justify-center items-center rounded border-2 py-1 px-1.5 
 hover:text-[var(--color-primary)] border-[var(--color-text)] hover:border-[var(--color-primary)] hover:bg-[var(--color-primaryOpacity)]'
                    href={project.livePreviewLink}
                    target="_blank"
                    aria-label={t("global:projects.viewProject")}
                    tabIndex={7}
                  >
                    <p className='hidden sm:inline-block text-sm md:text-xl'>{t("global:projects.viewDemo")}</p>
                    <span className="w-6 h-6 md:w-9 md:h-9 icon-[gravity-ui--play]" />
                  </a>)
                  : project.livePreviewLink
                    ? (<a
                      className='flex flex-wrap gap-1 justify-center items-center rounded border-2 py-1 px-1.5 
 hover:text-[var(--color-primary)] border-[var(--color-text)] hover:border-[var(--color-primary)] hover:bg-[var(--color-primaryOpacity)]'
                      href={project.livePreviewLink}
                      target="_blank"
                      aria-label={t("global:projects.viewProject")}
                      tabIndex={7}
                    >
                      <p className='hidden sm:inline-block text-sm md:text-xl'>{t("global:projects.viewDemo")}</p>
                      <span className="w-6 h-6 md:w-9 md:h-9 icon-[gravity-ui--play]" />
                    </a>)
                    : project.linkGithub
                      ? (<a
                        className='flex flex-wrap gap-1 justify-center items-center rounded border-2 py-1 px-1.5
              hover:text-[var(--color-primary)] border-[var(--color-text)] hover:border-[var(--color-primary)] hover:bg-[var(--color-primaryOpacity)]'
                        href={project.linkGithub}
                        target="_blank"
                        aria-label={t("global:projects.viewRepository")}
                        tabIndex={7}
                      >
                        <p className='hidden sm:inline-block text-sm md:text-xl'>{t("global:projects.viewRepository")}</p>
                        <span className="w-6 h-6 md:w-9 md:h-9 icon-[iconoir--github-circle]" />
                      </a>)
                      : ""
              }
            </div>

            <div className='w-full flex flex-col gap-6'>
              <p className="w-full text-center text-xl md:text-3xl border-b-2 border-[var(--color-border)] mb-2" tabIndex={8}>{project.title}</p>
              <p tabIndex={9} className="indent-8 text-lg md:text-xl">{t(`projects:approaches.${project.approach}.${projectIndex}.description`)}</p>

              {project.moreInfo.map((_, pIndex) => (
                <p tabIndex={pIndex + 9} key={pIndex} className='indent-8 text-base md:text-xl'>
                  {t(`projects:approaches.${project.approach}.${projectIndex}.moreInfo.${pIndex}`)}
                </p>
              ))}
            </div>
          </article>

          <article className='w-full flex flex-col items-center gap-4'>
            <p tabIndex={20} className="w-full text-center text-xl md:text-2xl text-[var(--color-primary)]">{t("global:projects.technologies")}:</p>
            <div className="flex gap-2 flex-wrap justify-center">
              {project.techs.map((tech, index) => (
                <Techs key={tech} tech={tech} tabIndex={index + 20} />
              ))}
            </div>
            {
              project.livePreviewLink && project.linkGithub
                ? (<a
                  className='w-fit flex flex-wrap gap-1 justify-center items-center rounded border-2 py-1 px-1.5
        hover:text-[var(--color-primary)] border-[var(--color-text)] hover:border-[var(--color-primary)] hover:bg-[var(--color-primaryOpacity)]'
                  href={project.linkGithub}
                  target="_blank"
                  aria-label={t("global:projects.viewRepository")}
                  tabIndex={7}
                >
                  <p className='hidden sm:inline-block text-sm md:text-xl'>{t("global:projects.viewRepository")}</p>
                  <span className="w-6 h-6 md:w-9 md:h-9 icon-[iconoir--github-circle]" />
                </a>)
                : ""
            }
          </article>
        </section>

        {(project.cantScreenshots.cellphone > 0 || project.cantScreenshots.tablet > 0 || project.cantScreenshots.desktop > 0) && (
          <section className='w-full flex flex-col gap-4 items-center'>
            <p tabIndex={100} className='text-xl md:text-2xl'>{t("global:projects.screenshots")}:</p>
            <article className='flex justify-center flex-wrap gap-6'>
              {project.cantScreenshots.desktop > 0 &&
                <SelectResolution onClick={() => setDevice('desktop')} device={device} resolution="desktop" tabIndex={101}>
                  <span className="w-16 h-10 icon-[ion--ios-desktop]" />
                  <p>{t("global:projects.device.desktop")}</p>
                </SelectResolution>
              }

              {project.cantScreenshots.tablet > 0 &&
                <SelectResolution onClick={() => setDevice('tablet')} device={device} resolution="tablet" tabIndex={102}>
                  <span className="w-9 h-9 icon-[ion--tablet-portrait-sharp]" />
                  <p>{t("global:projects.device.tablet")}</p>
                </SelectResolution>
              }

              {project.cantScreenshots.cellphone > 0 &&
                <SelectResolution onClick={() => setDevice('cellphone')} device={device} resolution="cellphone" tabIndex={103}>
                  <span className="w-9 h-9 icon-[ion--phone-portrait-sharp]" />
                  <p>{t("global:projects.device.cellphone")}</p>
                </SelectResolution>
              }
            </article>

            <article className='w-full flex flex-wrap justify-center items-center'>
              {[...Array(project.cantScreenshots[device])].map((_, index) => (
                <div key={index} tabIndex={index + 104} className={`p-1 ${device === 'cellphone' ? 'w-full sm:w-1/4' : ''} ${device === 'tablet' ? 'w-full sm:w-1/3' : ''} ${device === 'desktop' ? 'w-full sm:w-1/2' : ''}`}>
                  <img className='w-full h-auto border-2 border-[var(--color-border)]' src={`/projects/${project.id}/screenshots/${device}/${index + 1}.png`} alt={`Screenshot ${index + 1}`} />
                </div>
              ))}
            </article>
          </section>
        )}
      </div>
    </SectionCard >
  );
}
