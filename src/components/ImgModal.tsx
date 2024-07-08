import { useState, useEffect, MouseEvent, ReactNode } from 'react';

// Define the interface for ModalData
interface ModalData {
  imgUrl: string;
  linkToOpen?: string;
}

// Define the interface for the props
interface ImgModalProps {
  children: (openModal: (imgUrl: string, linkToOpen?: string) => void) => ReactNode;
}

const ImgModal: React.FC<ImgModalProps> = ({ children }) => {
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

  return (
    <>
      {children(handleImageClick)}
      {showModal && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
          <div className="relative w-full h-full max-w-[90%] max-h-[90%]">
            <div
              className="absolute top-0 right-0 text-[var(--color-text-both)] text-6xl
              flex flex-col items-center"
            >
              <button onClick={handleCloseModal}>
                &times;
              </button>
              {
                modalData.linkToOpen &&
                <a href={modalData.linkToOpen} target='_blank' rel='noopener noreferrer'>
                  <span className="icon-[ph--eye]" />
                </a>
              }
            </div>
            <div className="flex justify-center items-center h-full">
              <img
                className="max-w-full max-h-full object-contain border-2 border-[var(--color-border)]"
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
