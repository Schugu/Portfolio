import { useTranslation } from 'react-i18next';
import Tooltip from "@/components/tooltip/Tooltip.tsx";

export default function Footer() {
  const { t } = useTranslation('global');

  return (
    <footer className="w-full min-h-10 p-2 gap-2 flex flex-wrap items-center justify-end  
    bg-[var(--color-background-first)] text-[var(--color-text-first)]">
      <div className='flex gap-2 items-center text-lg justify-center' tabIndex={999999}>
        <p className="text-center">{t("global:footer.template1")}</p>
        <span className="w-6 h-6 text-red-500 icon-[gravity-ui--card-heart]" aria-label={t("global:footer.template2")}/>
        <p className='text-center'>{t("global:footer.template3")}</p>
      </div>
      <Tooltip text='Github'>
        <a href="https://github.com/Schugu" target="_blank" aria-label='Github'
          className="flex justify-center items-center hover:text-[var(--color-primary-first)]">
          <span className="w-6 h-6 icon-[mdi--github]" />
        </a>
      </Tooltip>
      <Tooltip text='Linkedin'>
        <a href="https://www.linkedin.com/in/leandrodanielschugurensky/" target="_blank" aria-label='Linkedin'
          className="flex justify-center items-center hover:text-[var(--color-primary-first)]">
          <span className="w-6 h-6 icon-[mdi--linkedin]" />
        </a>
      </Tooltip>
    </footer>
  )
}
