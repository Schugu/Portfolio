import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import SectionCard from "@/components/SectionCard.tsx";
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useProfile } from "@/context/ProfileContext.tsx";

export default function Contact() {
  const { dataProfile, loading } = useProfile();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const formRef = useRef<HTMLFormElement>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const { t } = useTranslation(['global', 'profile', 'projects']);

  const onSubmit = handleSubmit(data => {
    setSubmitting(true);

    if (data && formRef.current) {
      emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, formRef.current, import.meta.env.VITE_PUBLIC_KEY)
        .then((result) => {
          console.log(result.text);
          formRef.current?.reset();
          setSubmitting(false);
          setSubmitSuccess(true);
          setTimeout(() => {
            setSubmitSuccess(false);
          }, 3000);
        })
        .catch((error) => {
          console.log(error.text);
          setSubmitting(false);
        });
    }
  });

  return (
    <SectionCard sectionTitle={t("global:contact.section")}>
      <section className='flex flex-col md:flex-row gap-2 md:gap-10'>
        <form ref={formRef} onSubmit={onSubmit}
          className="w-full md:w-1/2 flex flex-col gap-6 justify-start items-center order-2 md:order-1
          text-[var(--color-text-complementary)]">
          <section className="w-full flex flex-col gap-1">
            <label
              htmlFor="website-admin"
              className="text-xl font-medium"
              tabIndex={3}
            >
              {t("global:contact.fullname")}
            </label>

            <div className={`flex ${errors.user_name ? "border-[var(--color-error-text)]" : "border-[var(--color-form-background-three)]"} border-2 rounded overflow-hidden`}>
              <span className="inline-flex items-center px-4 text-sm 
            text-[var(--color-text)] bg-[var(--color-form-background-two)]
            border-r-2 border-[var(--color-form-background-three)]">
                <svg className="w-4 h-4 text-[var(--color-form-background-three)]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
              </span>
              <input
                {...register('user_name', { required: true, max: 30, pattern: /^[A-Za-záéíóúÁÉÍÓÚ\s]+$/ })}
                type="text"
                name="user_name"
                id="website-admin"
                className="w-full text-base p-2.5 
                bg-[var(--color-form-background-one)] text-[var(--color-text)] placeholder-[var(--color-form-placeholder)]
                outline-none ring-0 border-2 border-transparent focus:border-[var(--color-border)]"
                placeholder="Jon Doe"
                tabIndex={3}
              />
            </div>

            {
              errors.user_name && (
                <p tabIndex={3} className="text-sm text-[var(--color-error-text)]">{t("global:contact.fullnameError")}</p>
              )
            }
          </section>

          <section className="w-full flex flex-col gap-1">
            <label htmlFor="email-address-icon"
              className="text-xl font-medium"
              tabIndex={4}
            >
              {t("global:contact.email")}
            </label>
            <div className={`flex ${errors.user_email ? "border-[var(--color-error-text)]" : "border-[var(--color-form-background-three)]"} border-2 rounded overflow-hidden`}>
              <span className="inline-flex items-center px-4 text-sm 
            text-[var(--color-text)] bg-[var(--color-form-background-two)]
            border-r-2 border-[var(--color-form-background-three)]">
                <svg className="w-4 h-4 text-[var(--color-form-background-three)]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </span>
              <input
                {...register('user_email', { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })}
                type="text"
                name="user_email"
                className="w-full text-base p-2.5 
                bg-[var(--color-form-background-one)] text-[var(--color-text)] placeholder-[var(--color-form-placeholder)]
                outline-none ring-0 border-2 border-transparent focus:border-[var(--color-border)]"
                placeholder="Jon@doe.com"
                tabIndex={4}
              />
            </div>

            {
              errors.user_email && (
                <p tabIndex={4} className="text-sm text-[var(--color-error-text)]">{t("global:contact.emailError")}</p>
              )
            }
          </section>

          <section className="w-full flex flex-col gap-1">
            <label
              htmlFor="message"
              className="text-xl font-medium"
              tabIndex={5}
            >
              {t("global:contact.message")}
            </label>
            <textarea
              {...register('message', { required: true, maxLength: 600 })}
              id="message"
              name="message"
              rows={4}
              placeholder={t("global:contact.messagePlaceholder")}
              className={`w-full h-52 resize-none text-base p-2.5 rounded outline-none ring-0 border-2
              ${errors.message ? "border-[var(--color-error-text)]" : "border-[var(--color-form-background-three)]"}
              bg-[var(--color-form-background-one)] text-[var(--color-text)] placeholder-[var(--color-form-placeholder)]
              focus:border-[var(--color-border)]
              `}
              tabIndex={5}
            />
            {
              errors.message && (
                <p tabIndex={5} className="text-sm text-[var(--color-error-text)]">{t("global:contact.messageError")}</p>
              )
            }
          </section>

          <button
            tabIndex={6}
            type="submit"
            className={`w-full text-[var(--color-form-button-text)] font-semibold rounded-lg text-base px-5 py-2.5
            ${submitSuccess ? 'bg-[var(--color-form-button-sent)]' : 'bg-[var(--color-form-button-background)] hover:bg-[var(--color-form-button-hover)]'}`}
            disabled={submitting}
          >
            {submitting ? t("global:contact.sending") : (submitSuccess ? t("global:contact.sent") : t("global:contact.button"))}
          </button>
        </form>

        <article className='w-full md:w-1/2 flex flex-col items-center gap-2  order-1 md:order-2'>
          <div className='flex flex-col items-center gap-2'>
            <p className='text-center text-2xl text-[var(--color-primary)]' tabIndex={7}>{t("global:contact.titleText")}</p>

            {loading && <p className='text-center text-xl' tabIndex={8}>{t("global:contact.textLoading")}</p>}
            {!loading && !dataProfile && <p className='text-center text-xl' tabIndex={8}>{t("global:infoNotAvailable")}</p>}

            {
              !loading && dataProfile && (
                dataProfile.textContact?.map((_, index) => (
                  <p className='text-center md:text-left text-balance text-xl' key={"paragraph" + index} tabIndex={9}>
                    {t(`profile:textContact.${index}`)}
                  </p>
                )))
            }
          </div>

          <span className="w-36 h-36 icon-[tabler--message-chatbot-filled] text-[var(--color-primary)]" />
        </article>
      </section>
    </SectionCard>
  );
}
