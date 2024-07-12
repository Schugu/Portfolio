import Flag from "@/components/Flag.tsx";
import { useTranslation } from 'react-i18next';

interface Work {
  title: string;
  company?: string;
  date: string;
  modality: string;
  workplace: string;
  country: string;
  description: string[];
  tasks?: string[];
  infoLink?: string;
}

interface TimelineItemProps {
  index: string | number;
  work: Work;
  tabIndex: number;
}


const TimelineItem = ({ work, index, tabIndex }: TimelineItemProps) => {
  const { t } = useTranslation(['global', 'profile', 'projects']);

  return (
    <section className="ml-7 md:ml-0 relative border-s flex justify-start border-[var(--color-border-first)]"
      key={"work" + index}>

      <div className="mb-24 ml-6 w-full h-full flex">
        <section className="w-full flex flex-col md:flex-row md:justify-start gap-4 md:gap-14">
          <span className="absolute flex items-center justify-center w-6 h-6 -start-3 top-[0.3rem] ring-4 rounded-full 
        bg-[var(--color-primary-second)] ring-[var(--color-primary-third)]">

            <svg className="w-2.5 h-2.5 text-[var(--color-secondary-first)] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <article className="w-full md:w-5/12 flex flex-col gap-2">

            <p className="text-2xl font-bold text-[var(--color-secondary-first)]" tabIndex={tabIndex}>
              {t(`profile:workExperience.${index}.title`)}
            </p>

            <time className="italic text-base font-normal leading-none text-[var(--color-text-first)]" tabIndex={tabIndex}>{t(`profile:workExperience.${index}.date`)}</time>

            {
              work.company &&
              <p className="text-lg font-medium text-[var(--color-text-second)]" tabIndex={tabIndex}>{t(`profile:workExperience.${index}.company`)}</p>
            }

            <div className="flex items-center gap-2 text-[--color-primary-first]">
              <p className="italic" tabIndex={tabIndex}>
                {t(`profile:workExperience.${index}.modality`)} - {t(`profile:workExperience.${index}.workplace`)}.
              </p>

              <Flag country={work.country} width={8} height={8} tabIndex={tabIndex}/>
            </div>
          </article>


          <article className="w-full md:w-7/12 flex flex-col gap-6">
            {
              work.description.map((_, pIndex) => (
                <p key={"work" + index + pIndex} className="max-w-[75ch] text-xl font-medium text-[var(--color-text-second)]" tabIndex={tabIndex}>{t(`profile:workExperience.${index}.description.${pIndex}`)}</p>
              ))
            }
            {
              work.tasks && (
                <div className="flex flex-col gap-1">
                  <p className="text-xl font-semibold text-[var(--color-primary-first)]" tabIndex={tabIndex}>{t("global:workExperience.tasks")}</p>
                  <ol className="w-full list-inside list-disc">
                    {work.tasks.map((_, taskIndex) => (
                      <li key={"work" + index + taskIndex} className="text-[var(--color-primary-first)]" tabIndex={tabIndex}>
                        <p className="max-w-[75ch] inline italic text-lg font-normal text-[var(--color-text-first)]">
                          {t(`profile:workExperience.${index}.tasks.${taskIndex}`)}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              )
            }
            {
              work.infoLink &&
              <a href={work.infoLink} className="w-fit text-lg hoverAnimation
              text-[var(--color-secondary-first)] hover:text-[var(--color-secondary-second)]
              " tabIndex={tabIndex}>
                {t("global:workExperience.moreInfo")}
              </a>
            }
          </article>
        </section>
      </div>

    </section>
  );
};

export default TimelineItem;
