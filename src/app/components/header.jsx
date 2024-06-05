import Link from "next/link";
import MenuItem from "./menuItem";
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import DarkModeSwitch from "./DarkModeSwitch";


export default function Header () {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={FaHome} />
        <MenuItem title="ABOUT" address="/about" Icon={FaInfoCircle} />
      </div>
      <div className="flex items-center space-x-5">
        <DarkModeSwitch />
        <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold bg-blue-300 py-2 px-3 rounded-lg mr-1">
              MOVIES
            </span>
            {/*<span className="text-xl hidden sm:inline">Clone</span>*/}
          </h2>
        </Link>
      </div>
    </div>
  )
}