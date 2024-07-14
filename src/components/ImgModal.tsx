import { useState, useEffect, MouseEvent, ReactNode } from 'react';
import Tooltip from "@/components/tooltip/Tooltip.tsx";
import { useTranslation } from 'react-i18next';

interface ModalData {
  imgUrl: string;
  linkToOpen?: string;
}

interface ImgModalProps {
  children: (openModal: (imgUrl: string, linkToOpen?: string) => void) => ReactNode;
}

const ImgModal: React.FC<ImgModalProps> = ({ children }) => {
  const { t } = useTranslation(['global']);

  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState<ModalData>({
    imgUrl: '',
    linkToOpen: ''
  });

  const handleImageClick = (imgUrl: string, linkToOpen?: string) => {
    setModalData({
      imgUrl: imgUrl,
      linkToOpen: linkToOpen ?? ''
    });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleCloseModal = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    closeModal();
  };

  const handleOutsideClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      {children(handleImageClick)}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-90"

        >
          <div className="relative w-full h-full max-w-[90%] max-h-[90%]" >
            <div
              className="absolute top-0 right-0 text-[var(--color-text-third)] text-2xl md:text-6xl
              flex flex-col items-center justify-start"
            >
              <Tooltip position='left' text={t("global:modal.close")}>
                <button onClick={handleCloseModal} className='hover:text-[var(--color-primary-first)] hoverAnimation'
                  tabIndex={1} aria-label={t("global:modal.close")}>
                  <span className="icon-[ion--close-circled]" />
                </button>
              </Tooltip>
              {
                modalData.linkToOpen &&
                <Tooltip position='left' text={t("global:modal.link")}>
                  <a href={modalData.linkToOpen} className='hover:text-[var(--color-primary-first)] hoverAnimation'
                    target='_blank' rel='noopener noreferrer' tabIndex={1} aria-label={t("global:modal.link")}>
                    <span className="icon-[iconoir--internet]" />
                  </a>
                </Tooltip>
              }
            </div>
            <div className="flex justify-center items-center h-full" onClick={handleOutsideClick}>
              <img
                className="select-none max-w-full max-h-full object-contain border-2 border-[var(--color-border-first)] rounded"
                src={modalData.imgUrl}
                alt="Imagen Ampliada"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImgModal;
