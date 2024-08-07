import SectionCard from "@/components/SectionCard.tsx";
import TimeLineItem from "./TimeLineItem.tsx";
import { useProfile } from "@/context/ProfileContext.tsx";
import { useTranslation } from 'react-i18next';
import SkeletonUniversal from "@/components/SkeletonUniversal.tsx";

export default function Experience() {
  const { t } = useTranslation(['global', 'profile', 'projects']);
  const { dataProfile, loading } = useProfile();

  return (
    <SectionCard sectionTitle={t("global:workExperience.section")}>
      {loading && <SkeletonUniversal />}
      {!loading && !dataProfile && <p className="text-3xl text-center" tabIndex={3}>{t("global:infoNotAvailable")}</p>}

      {!loading && dataProfile?.workExperience &&
        <div className="w-full flex flex-col justify-start items-start">
          {
            dataProfile.workExperience.map((work, index) => (
              <TimeLineItem
                key={"work" + index}
                index={index}
                work={work}
                tabIndex={4 + index}
              />
            ))
          }
        </div>
      }
    </SectionCard>
  )
}
