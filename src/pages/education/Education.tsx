import SectionCard from "@/components/SectionCard.tsx";
import { useProfile } from "@/context/ProfileContext.tsx";
import { useTranslation } from 'react-i18next';
import ImgModal from "@/components/ImgModal.tsx";
import SkeletonUniversal from "@/components/SkeletonUniversal.tsx";

export default function Education() {
  const { dataProfile, loading } = useProfile();
  const { t } = useTranslation('global');

  return (
    <SectionCard sectionTitle={t("global:education.section")}>
      {loading && <SkeletonUniversal />}
      {!loading && !dataProfile && <p className="text-3xl text-center" tabIndex={3}>{t("global:infoNotAvailable")}</p>}

      {!loading && dataProfile?.certificates && (

        <ImgModal>
          {handleImageClick => (
            <article className="w-full gap-[4vw] grid grid-cols-2 sm:grid-cols-4">
              {dataProfile.certificates?.map((certificate, index) => (
                <div key={index} 
                  onClick={() =>
                    handleImageClick(
                      `/profile/education/${index + 1}.jpg`,
                      certificate
                    )
                  }
                  className="w-full">
                  <img
                    className='transform hover:scale-110 transition duration-300 cursor-pointer
                    border-2 border-[var(--color-border-second)] rounded overflow-hidden'
                    src={`/profile/education/${index + 1}.jpg`}
                    alt={t("global:projects.screenshot") + (index + 1)} tabIndex={4} 
                  />
                </div>
              ))}
            </article>
          )}
        </ImgModal>
      )}
    </SectionCard>
  );
}
