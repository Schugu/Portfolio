import React, { useEffect } from 'react';

const ImgModal = ({ isOpen, onClose, imgUrl }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const closeModal = (e) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
          <div className="relative w-full h-full max-w-[90%] max-h-[90%]">
            <button
              className="absolute top-0 right-0 text-[var(--color-text-both)] text-6xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="flex justify-center items-center h-full">
              <img
                className="max-w-full max-h-full object-contain border-2 border-[var(--color-border)]"
                src={imgUrl}
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
