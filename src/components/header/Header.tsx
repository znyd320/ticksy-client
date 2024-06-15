import { Avatar } from "flowbite-react";
import { FaBars, FaTimes } from "react-icons/fa";

interface Headerprops {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({ setOpen, open }: Headerprops) {
	// const [isModalOpen, setIsModalOpen] = useState(false);
	// const openModal = () => {
	//   setIsModalOpen(true);
	// };

	// const closeModal = () => {
	//   setIsModalOpen(false);
	// };
	return (
		<>
			<div className="flex justify-between items-center py-[14.5px] pr-10 px-4 border-b w-full bg-[#F9FAFB]">
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

				<Avatar rounded />
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
