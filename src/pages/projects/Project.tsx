import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SectionCard from "@/components/SectionCard.tsx";
import SelectResolution from "./SelectResolution.tsx";
import Techs from "@/components/Techs";
import Tooltip from "@/components/tooltip/Tooltip.tsx";
import { useProfile } from "@/context/ProfileContext.tsx";
import { useTranslation } from 'react-i18next';
import { ProjectType } from '@/types/ProfileContextTypes.ts';
import ButtonCustom from "@/components/buttons/ButtonCustom.tsx";
import ImgModal from "@/components/ImgModal.tsx"
import SkeletonUniversal from "@/components/SkeletonUniversal.tsx";

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
        <SkeletonUniversal />
      </SectionCard>
    );
  }

  if (!projectId || !dataProjects || !project) {
    return (
      <SectionCard sectionTitle={t("global:projects.section")}>
        <p tabIndex={3} className="text-3xl text-center">{t("global:projects.projectNotFound")}</p>
      </SectionCard>
    );
  }

  return (
    <SectionCard sectionTitle={`${t("global:projects.section")}["${project?.title ?? t("global:projects.projectNotFound")}"]`}>
      <div className="w-full h-full flex flex-col gap-2 p-2">
        <section className="w-full flex flex-wrap justify-center gap-4 p-4 rounded-lg bg-[var(--color-background-third)]">
          <article className='w-full flex flex-col'>
            <div className="w-full flex justify-between items-center">
              <Tooltip text={t("global:projects.back")} position='right'>
                <Link to='/projects'
                  aria-label={t("global:projects.back")}
                  tabIndex={3}
                  className='flex justify-center items-center border-2 border-transparent py-1 px-1.5 rounded 
                  hover:text-[var(--color-primary-first)] hover:border-[var(--color-primary-first)] hover:bg-[var(--color-primaryOpacity)]'
                >
                  <span className="w-7 h-7 md:w-9 md:h-9 icon-[tdesign--enter]" />
                </Link>
              </Tooltip>

              {
                project.livePreviewLink ? (
                  <ButtonCustom type='viewDemo'  link={project.livePreviewLink} tabIndex={4} />
                ) : project.linkGithub ? (
                  <ButtonCustom type='viewRepository' link={project.linkGithub} tabIndex={4} />
                ) : null
              }
            </div>

            <div className='w-full flex flex-col gap-6'>
              <p className="w-full text-center text-xl md:text-3xl border-b-2 border-[var(--color-border-first)] mb-2" tabIndex={5}>{project.title}</p>
              <p tabIndex={6} className="indent-8 text-lg md:text-xl">{t(`projects:approaches.${project.approach}.${projectIndex}.description`)}</p>

              {project.moreInfo.map((_, pIndex) => (
                <p tabIndex={7} key={pIndex} className='indent-8 text-base md:text-xl'>
                  {t(`projects:approaches.${project.approach}.${projectIndex}.moreInfo.${pIndex}`)}
                </p>
              ))}
            </div>
          </article>

          <article className='w-full flex flex-col items-center gap-4'>
            <p tabIndex={8} className="w-full text-center text-xl md:text-2xl text-[var(--color-primary-first)]">{t("global:projects.technologies")}:</p>
            <div className="flex gap-2 flex-wrap justify-center">
              {project.techs.map((tech) => (
                <Techs key={tech} tech={tech} tabIndex={9} />
              ))}
            </div>
            {
              project.livePreviewLink && project.linkGithub &&
              (<ButtonCustom type='viewRepository' link={project.linkGithub} tabIndex={10} />)
            }
          </article>
        </section>

        {(project.cantScreenshots.cellphone > 0 || project.cantScreenshots.tablet > 0 || project.cantScreenshots.desktop > 0) && (
          <section className='w-full flex flex-col gap-4 items-center'>
            <p tabIndex={11} className='text-xl md:text-2xl'>{t("global:projects.screenshots")}:</p>
            <article className='flex justify-center flex-wrap gap-6'>
              {project.cantScreenshots.desktop > 0 &&
                <SelectResolution onClick={() => setDevice('desktop')} device={device} resolution="desktop" tabIndex={12}>
                  <span className="w-16 h-10 icon-[ion--ios-desktop]" />
                  <p>{t("global:projects.device.desktop")}</p>
                </SelectResolution>
              }

              {project.cantScreenshots.tablet > 0 &&
                <SelectResolution onClick={() => setDevice('tablet')} device={device} resolution="tablet" tabIndex={12}>
                  <span className="w-9 h-9 icon-[ion--tablet-portrait-sharp]" />
                  <p>{t("global:projects.device.tablet")}</p>
                </SelectResolution>
              }

              {project.cantScreenshots.cellphone > 0 &&
                <SelectResolution onClick={() => setDevice('cellphone')} device={device} resolution="cellphone" tabIndex={12}>
                  <span className="w-9 h-9 icon-[ion--phone-portrait-sharp]" />
                  <p>{t("global:projects.device.cellphone")}</p>
                </SelectResolution>
              }
            </article>


            <ImgModal>
              {handleImageClick => (
                <div className="w-full flex flex-wrap justify-center items-center">
                  {[...Array(project.cantScreenshots[device] || 0)].map((_, index) => (
                    <div
                      key={index}
                      onClick={() =>
                        handleImageClick(
                          `/projects/${project.id}/screenshots/${device}/${index + 1}.png`
                        )
                      }
                      className={`p-1
                        ${device === 'cellphone' ? 'w-1/4' : ''} 
                        ${device === 'tablet' ? 'w-1/4' : ''} 
                        ${device === 'desktop' ? 'w-1/3' : ''}
                      `}
                    >
                      <img
                        className="w-full h-auto border-2 border-[var(--color-border-first)] cursor-pointer"
                        src={`/projects/${project.id}/screenshots/${device}/${index + 1}.png`}
                        alt={t("global:projects.screenshot") + (index + 1)}
                        tabIndex={13}
                      />
                    </div>
                  ))}
                </div>
              )}
            </ImgModal>



          </section>
        )}
      </div>
    </SectionCard >
  );
}
