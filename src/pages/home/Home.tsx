import Navbar from "../../components/navbar/Navbar.tsx";
import { TagOpen, TagClose } from "../../components/TagsSection.tsx";
import { Subtitle, Flag } from "../../components/profile/Subtitle.tsx";
import dataProfile from "../../data/dataProfile.ts";
import SocialNetworkIcon from "../../components/SocialNetworkIcon.tsx";

export default function Home() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center md:gap-10
    bg-LIGHT-BG-P dark:bg-DARK-BG-P dark:text-D-T-P text-L-T-P">

      <Navbar></Navbar>

      <section className="w-full h-full flex justify-center items-center">
        <article className="w-full md:w-11/12 p-2 bg-LIGHT-BG-P-dark dark:bg-DARK-BG-P-dark rounded-md shadow-md shadow-[#2c2c5d]">
          <TagOpen section={"presentación"} />

          <div className="flex w-full">
            <section className="w-full flex flex-col gap-3 py-2 md:py-5 md:pl-[5vw]">
              <section className="
            w-full
            flex flex-col justify-center items-center
            md:flex-row md:justify-start md:items-center gap-[5vw]"
              >
                <article className="w-48 h-48 md:min-w-80 md:h-80 rounded-full overflow-hidden border-2 border-solid border-LIGHT-D-P-dark dark:border-DARK-D-P-light">
                  <img className="w-full h-full object-cover object-center" src="FotoCVSinFondo.png" alt="Foto de perfil" />
                </article>

                <article className="md:w-full flex flex-col gap-5 md:gap-10">
                  <p className="text-center text-lg md:text-4xl text-DARK-D-P-light">{dataProfile.fullname}</p>
                  <div className="w-full flex gap-5 md:gap-10 flex-wrap justify-center items-center text-base md:text-2xl">
                    <Flag flag={dataProfile.nationality} />
                    <Subtitle string={dataProfile.dev} />
                    <Subtitle string={dataProfile.years} />
                  </div>
                  <div className="flex flex-wrap gap-0.5 md:gap-4 justify-center items-center">
                    {
                      Object.entries(dataProfile.linksSocialNetworks).map(([network, link]) => (
                        <SocialNetworkIcon key={network} socialNetwork={network} link={link} />
                      ))
                    }
                  </div>

                  <article className="w-full flex flex-col gap-2 items-center ">
                    <p className="text-DARK-D-P text-base md:text-2xl">Skills</p>
                    <article className="flex flex-col items-start gap-4">
                      <section className="flex flex-wrap gap-x-4 gap-y-1">
                        <p className="text-DARK-D-P-light text-md md:text-xl">Desarrollo Front-end:</p>
                        <span className="w-8 h-8 icon-[ri--html5-fill]"></span>
                        <span className="w-8 h-8 icon-[ri--css3-fill]"></span>
                        <span className="w-8 h-8 icon-[ri--tailwind-css-fill]"></span>
                        <span className="w-8 h-8 icon-[ri--javascript-fill]"></span>
                        <span className="w-8 h-8 icon-[ri--reactjs-fill]"></span>
                        <span className="w-8 h-8 icon-[ri--nextjs-fill]"></span>
                      </section>
                      <section className="flex flex-wrap gap-x-4 gap-y-1">
                        <p className="text-DARK-D-P-light text-md md:text-xl">Base de datos:</p>
                        <span className="w-8 h-8 icon-[simple-icons--mongodb]"></span>
                        <span className="w-8 h-8 icon-[ri--firebase-fill]"></span>
                      </section>
                    </article>
                  </article>


                  {/* <p>👤 Nombre: <span className="text-L-T-S">Leandro Daniel Schugurensky</span></p>
                <p>👨‍💻 Programador: <span className="text-L-T-S">🎓 Trainee</span></p>
                <p>🎂 Edad: <span className="text-L-T-S">23 años</span></p>
                <p>🌍 País: <span className="text-L-T-S">Argentina</span></p>
                <p>📚 Educación: <span className="text-L-T-S">Estudiante autodidacta</span></p>
                <p className="text-balance">🎯 Objetivo: <span className="text-L-T-S">Actualmente, estoy persiguiendo mi pasión por la programación con el objetivo de convertirme en un programador Front-end.</span></p> */}
                </article>
              </section>
            </section>

            <section className="min-h-full w-auto my-auto">
              <p className="hidden md:inline-block text-8xl md:text-9xl font-ubuntu font-normal text-DARK-D-P">;</p>
            </section>
          </div>

          <TagClose />
        </article>
      </section>

    </section>
  )
}
