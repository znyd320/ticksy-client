import { Avatar } from "flowbite-react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header({ setOpen, open }: any) {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };
  return (
    <>
      <div className="flex justify-between items-center py-[20.5px] pr-10 px-4 border-b w-full ">
        <div className="flex items-center gap-10">
          {!open && (
            <img
              src="https://i.ibb.co/fMz0c1s/Vector.png"
              alt="logo"
              className="h-[45px] w-[40px]"
            />
          )}
          <button onClick={() => setOpen(!open)}>
            {!open ? <FaBars /> : <FaTimes />}
          </button>
        </div>

        {/* <Avatar rounded /> */}
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-4 rounded-full ring ">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      </div>

      {/* <div>
      
        {isModalOpen && (
          <Modal closeModal={closeModal}>
         
            <div className="bg-white p-4">
              <h2 className="text-lg font-semibold mb-2">Modal Title</h2>
              <p>Modal Content Goes Here</p>
            </div>
          </Modal>
        )}
      </div> */}
    </>
  );
}

export default Header;
