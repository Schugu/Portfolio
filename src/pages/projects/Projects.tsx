import SectionCard from "@/components/SectionCard";
import { useProfile } from "@/context/ProfileContext";
import { lazy, Suspense } from "react";
import { useTranslation } from 'react-i18next';
import Skeleton from "./Skeleton";
import SkeletonUniversal from "@/components/SkeletonUniversal.tsx";

const Card = lazy(() => import('./Card'));

const Projects: React.FC = () => {
  const { t } = useTranslation(['global', 'profile', 'projects']);
  const { dataProjects, loading } = useProfile();

  return (
    <SectionCard sectionTitle={t("global:projects.section")}>
      {!loading && !dataProjects && <div>No hay proyectos disponibles</div>}
      {loading && <SkeletonUniversal/>}

      {!loading && dataProjects && dataProjects.approaches &&

        <article className="flex flex-col gap-10">
          {Object.entries(dataProjects.approaches).map(([approach, projects], index) => (

            projects.length > 0 &&
            <div className={`flex flex-col gap-4 pb-12 
              ${Object.keys(dataProjects.approaches).length > 1
                ? index === Object.keys(dataProjects.approaches).length - 1
                  ? "" : "border-b-2 border-[var(--color-primary)]"
                : ""}`}
              key={approach + index}>
              <p className="text-3xl font-bold text-[var(--color-primary)]">{approach}</p>
              <section className="w-full gap-[4vw] grid grid-cols-2 sm:grid-cols-3">
                {projects.map((project) => (
                  <Suspense fallback={<div className="w-full h-72 border-2 border-[var(--color-border)] shadow-[var(--color-border)] bg-[var(--color-colorOpacity)]"></div>}>
                    <Card key={"project" + project.id} project={project} />
                  </Suspense>
                ))}
              </section>
            </div>
          ))}
        </article>
      }
    </SectionCard>
  );
};

export default Projects;
