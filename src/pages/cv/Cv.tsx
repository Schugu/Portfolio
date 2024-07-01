import SectionCard from "@/components/SectionCard.tsx";
import { useTranslation } from 'react-i18next';
import { useProfile } from "@/context/ProfileContext.tsx";

export default function Cv() {
  const { dataProfile, loading } = useProfile();
  const { t } = useTranslation(['global', 'profile', 'projects']);

  return (
    <SectionCard sectionTitle={t("global:cv.section")}>
      {loading && <p>Cargando...</p>}
      {!loading && !dataProfile && <p>No hay información disponible.</p>}

      {!loading && dataProfile?.linksSocialNetworks?.CV &&
        <article className="w-full h-full flex flex-col gap-2 p-2">
          <div className="pdf-container" style={{ width: '100%', height: '100vh' }}>
            <embed src={t("profile:linksSocialNetworks.CV")} width="100%" height="100%" type="application/pdf" />
          </div>
        </article>
      }
    </SectionCard>
  );
}
