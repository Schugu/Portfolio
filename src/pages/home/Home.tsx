import SectionCard from "@/components/SectionCard.tsx";
import Tooltip from "@/components/tooltip/Tooltip.tsx";
import { Subtitle, Flag } from "@/components/profile/Subtitle.tsx";
import SocialNetworkIcon from "@/components/SocialNetworkIcon.tsx";
import IconosTechs from "@/components/IconosTechs.tsx";
import { useProfile } from "@/context/ProfileContext.tsx";
import { useTranslation } from 'react-i18next';
import ContImg from "./ContImg.tsx";
import SkeletonUniversal from "@/components/SkeletonUniversal.tsx";

export default function Home() {
  const { t } = useTranslation(['global', 'profile', 'projects']);
  const { dataProfile, loading } = useProfile();

  return (
    <SectionCard sectionTitle={t("global:homePage.section")}>
      {loading && <SkeletonUniversal />}
      {!loading && !dataProfile && <p className="text-3xl text-center" tabIndex={3}>{t("global:infoNotAvailable")}</p>}

      {!loading && dataProfile && (
        <article className="w-full flex flex-col justify-center items-center gap-[4vh]">

          <div className="w-full flex flex-col items-center gap-8">
            <p
              className="text-center text-2xl md:text-5xl text-[var(--color-primary-first)]" tabIndex={3}>
              {dataProfile.fullname}
            </p>

            <section className="w-full flex gap-3 md:gap-5 flex-wrap justify-center items-center text-base md:text-xl">
              {dataProfile.titles?.map((_, index) => (
                <Subtitle string={t(`profile:titles.${index}`)} tabIndex={4} key={index} />
              ))}
              {dataProfile.years &&
                <Subtitle string={t("profile:years")} tabIndex={5} />
              }
              {dataProfile.nationality &&
                <Tooltip text={dataProfile.nationality}>
                  <Flag nationality={dataProfile.nationality?.toLowerCase()} tabIndex={6} />
                </Tooltip>
              }
            </section>
          </div>

          <div className="w-full flex flex-col justify-center items-center
                          md:flex-row md:justify-center md:items-center gap-[4vw]">

            {dataProfile.profilePicture &&
              <div className="h-auto w-auto aspect-square flex justify-center items-center">
                <ContImg shape="circle"
                  src={dataProfile.profilePicture}
                  alt={t("global:homePage.profilePicture")}
                  tabIndex={7}
                />
              </div>
            }

            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-5 md:gap-10">
              {dataProfile.linksSocialNetworks &&
                <section className="flex flex-wrap gap-0.5 md:gap-4 items-center md:items-start">
                  {Object.entries(dataProfile.linksSocialNetworks).map(([network, link], index) => (
                    <Tooltip text={network} key={network + index}>
                      <SocialNetworkIcon socialNetwork={network} link={link} tabIndex={8} />
                    </Tooltip>
                  ))}
                </section>
              }

              {dataProfile.skills &&
                <section className="w-full flex flex-col gap-2 items-center md:items-start">
                  <p className="text-[var(--color-secondary-first)] text-lg md:text-2xl text-center" tabIndex={9}>
                    {t("global:homePage.skills.title")}
                  </p>

                  <article className="w-4/6 md:w-full flex flex-col items-start gap-6">
                    {Object.entries(dataProfile.skills).map(([titleStack, stack], index) => (
                      <div className="flex items-center flex-wrap gap-x-4 gap-y-1" key={titleStack + index}>
                        <p className="italic text-[var(--color-primary-first)] text-base md:text-xl" tabIndex={10}>
                          {t(`global:homePage.skills.${titleStack}`)}:
                        </p>
                        {stack.map((tech, stackindex) => (
                          <Tooltip text={tech} key={titleStack + tech + stackindex}>
                            <IconosTechs tech={tech} tabIndex={10}/>
                          </Tooltip>
                        ))}
                      </div>
                    ))}
                  </article>
                </section>
              }
            </div>
          </div>

          <div className="w-full flex flex-col gap-8 justify-center">
            {dataProfile.aboutMe &&
              <section className="w-full flex flex-col gap-2">
                <p className="text-[var(--color-secondary-first)] text-lg md:text-2xl text-center" tabIndex={11}>{t("global:homePage.aboutMe")}</p>
                {dataProfile.aboutMe?.map((_, pIndex) => (
                  <p className="indent-8 text-base md:text-xl text-balance" key={pIndex} tabIndex={12}>{t(`profile:aboutMe.${pIndex}`)}</p>
                ))}
              </section>
            }

            {dataProfile.hobbies &&
              <section className="w-full flex flex-col gap-2">
                <p className="text-[var(--color-secondary-first)] text-lg md:text-2xl text-center" tabIndex={13}>{t("global:homePage.hobbies")}</p>
                {dataProfile.hobbies?.map((_, pIndex) => (
                  <p className="indent-8 text-base md:text-xl text-balance" key={pIndex} tabIndex={14}>{t(`profile:hobbies.${pIndex}`)}</p>
                ))}
              </section>
            }
          </div>

        </article>
      )}
    </SectionCard>
  );
}
