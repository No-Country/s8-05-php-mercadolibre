import { FaUserCircle } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiSquares2X2 } from "react-icons/hi2";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

export default function Menu({ menuToggle }: { menuToggle: () => void }) {
  return (
    <div className="absolute top-0 left-0 bg-primary w-10/12 h-full z-[100] p-5 flex flex-col gap-6">
      <HiOutlineMenuAlt2 className="text-3xl" onClick={menuToggle} />
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-2">
          <FaUserCircle className="text-4xl" />
          <div className="flex flex-col text-lg">
            <span>Name</span>
            <span>LastName</span>
          </div>
          <MdKeyboardArrowDown className="text-2xl" />
        </div>
        <IoIosNotifications className="text-2xl" />
      </div>
      <div className="flex flex-col w-full h-full justify-between">
        <ul>
          <li className="flex flex-row gap-4 items-center text-2xl">
            <HiSquares2X2 /> Lorem
          </li>
          <li className="flex flex-row gap-4 items-center text-2xl">
            <HiSquares2X2 /> Lorem
          </li>
          <li className="flex flex-row gap-4 items-center text-2xl">
            <HiSquares2X2 /> Lorem
          </li>
          <li className="flex flex-row gap-4 items-center text-2xl">
            <HiSquares2X2 /> Lorem
          </li>
          <li className="flex flex-row gap-4 items-center text-2xl">
            <HiSquares2X2 /> Lorem
          </li>
          <li className="flex flex-row gap-4 items-center text-2xl">
            <HiSquares2X2 /> Lorem
          </li>
        </ul>
        <button className="w-full bg-black text-white py-3">Button</button>
      </div>
    </div>
  );
}
