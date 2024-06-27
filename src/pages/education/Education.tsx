import SectionCard from "../../components/SectionCard.tsx";
import { useProfile } from "../../context/ProfileContext.tsx";
import { useTranslation } from 'react-i18next';

export default function Education() {
  const { dataProfile } = useProfile();
  const { t } = useTranslation('global');

  return (
    <SectionCard sectionTitle={t("global:education.section")}>
      <article className="w-full gap-[4vw] grid grid-cols-2 sm:grid-cols-4">
        {
          dataProfile?.certificates?.map((certificate, index) => (
            <a href={certificate} target="_blank"
              className="w-full">
              <img
                className='transform  hover:scale-110 transition duration-300
                border-2 border-AMARILLO-light dark:border-AZUL rounded overflow-hidden'
                src={`/profile/education/${index + 1}.jpg`}
                alt={`Screenshot ${index + 1}`}
              />
            </a>
          ))
        }
      </article>
    </SectionCard>
  )
}
