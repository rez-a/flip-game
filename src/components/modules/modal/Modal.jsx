import { createContext, useState } from "react";
import { createPortal } from "react-dom";

export const ModalContext = createContext();
const Modal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleStopPropagation = (e) => e.stopPropagation();

  return createPortal(
    <div
      onClick={() => setIsOpen(false)}
      className={`fixed w-screen h-screen bg-black/30 transition-all duration-300 backdrop-blur-sm top-0 left-0 flex items-center justify-center ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div
        onClick={handleStopPropagation}
        className="w-full max-w-sm bg-white rounded-md p-4"
      >
        <ModalContext.Provider value={{ setIsOpen }}>
          {children}
        </ModalContext.Provider>
      </div>
    </div>,
    document.querySelector("#modal-root")
  );
};

export default Modal;
