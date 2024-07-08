import { useTranslation } from 'react-i18next';

type ViewRepositoryProps = {
  link: string;
  tabIndex: number;
}

export default function ViewRepository({ link, tabIndex }: ViewRepositoryProps) {
  const { t } = useTranslation(['global', 'profile', 'projects']);

  return (
    <a
      className='w-fit flex flex-wrap gap-1 justify-center items-center rounded border-2 py-1 px-1.5
        hover:text-[var(--color-primary)] border-[var(--color-text)] hover:border-[var(--color-primary)] hover:bg-[var(--color-primaryOpacity)]'
      href={link}
      target="_blank"
      aria-label={t("global:projects.viewRepository")}
      tabIndex={tabIndex}
    >
      <p className='hidden sm:inline-block text-sm md:text-xl'>{t("global:projects.viewRepository")}</p>
      <span className="w-6 h-6 md:w-9 md:h-9 icon-[iconoir--github-circle]" />
    </a>
  )
}
