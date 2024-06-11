import { IoIosCloseCircle } from "react-icons/io";
const Modal = ({ children, closeModal }: any) => {
  return (
    <div className="fixed inset-0 flex items-start justify-end">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-6 rounded-lg z-10">
        {/* Close button */}
        <button onClick={closeModal} className="absolute top-0 right-0 m-4">
          <IoIosCloseCircle size={22} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
