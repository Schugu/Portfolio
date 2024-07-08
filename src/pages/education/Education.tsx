import SectionCard from "@/components/SectionCard.tsx";
import { useProfile } from "@/context/ProfileContext.tsx";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import ImgModal from "@/components/ImgModal.tsx";

export default function Education() {
  const { dataProfile, loading } = useProfile();
  const { t } = useTranslation('global');

  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({
    imgUrl: '',
    linkToOpen: ''
  });

  const handleImageClick = (imgUrl, linkToOpen) => {
    setModalData({
      imgUrl: imgUrl,
      linkToOpen: linkToOpen
    });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <SectionCard sectionTitle={t("global:education.section")}>
      {loading && <p>Cargando...</p>}
      {!loading && !dataProfile && <p>No hay información disponible.</p>}

      {!loading && dataProfile?.certificates &&
        <article className="w-full gap-[4vw] grid grid-cols-2 sm:grid-cols-4"
        >
          {
            dataProfile.certificates.map((certificate, index) => (
              <div key={index}
                onClick={() =>
                  handleImageClick(
                    `/profile/education/${index + 1}.jpg`, 
                    certificate
                  )
                }
                className="w-full">
                <img
                  className='transform  hover:scale-110 transition duration-300
                border-2 border-[var(--color-border-complementary)] rounded overflow-hidden'
                  src={`/profile/education/${index + 1}.jpg`}
                  alt={`Screenshot ${index + 1}`}
                />
              </div>
            ))
          }
          <ImgModal isOpen={showModal} onClose={closeModal} imgUrl={modalData.imgUrl} buttonLink={true} link={modalData.linkToOpen} />

        </article>
      }
    </SectionCard>
  )
}
