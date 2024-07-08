import { useTranslation } from 'react-i18next';
import Tooltip from "@/components/tooltip/Tooltip.tsx";

export default function Footer() {
  const { t } = useTranslation('global');

  return (
    <footer className="w-full min-h-10 p-2 gap-2 flex flex-wrap items-center justify-end  
    bg-[var(--color-background-dark)] text-[var(--color-text)]">
      <div className='flex gap-2 items-center text-lg justify-center'>
        <p className="text-center">{t("global:footer.template1")}</p>
        <span className="w-6 h-6 text-red-500 icon-[gravity-ui--card-heart]" />
        <p className='text-center'>{t("global:footer.template2")}</p>
      </div>
      <Tooltip text='Github'>
        <a href="https://github.com/Schugu" target="_blank"
          className="flex justify-center items-center hover:text-[var(--color-primary)]">
          <span className="w-6 h-6 icon-[mdi--github]" />
        </a>
      </Tooltip>
      <Tooltip text='Linkedin'>
        <a href="https://www.linkedin.com/in/leandrodanielschugurensky/" target="_blank"
          className="flex justify-center items-center hover:text-[var(--color-primary)]">
          <span className="w-6 h-6 icon-[mdi--linkedin]" />
        </a>
      </Tooltip>
    </footer>
  )
}
