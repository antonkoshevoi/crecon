import { Link } from "react-router-dom";

import { AppRoutes } from "../../../constants/pages";
import { InfoIcon, UserIcon, WorkIcon } from "../../icons";

import logo from "../../../assets/demo-logo.svg";

const Header = () => {
  return (
    <div className="z-1 pt-8 px-4 fixed w-full bg-white">
      <div className="z-1 flex h-16 items-center justify-between rounded-2xl border border-[rgb(228,228,231)] px-6 py-0">
        <div className="flex flex-row items-center gap-12">
          <a href="https://crecon.exe-analytics.com/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="flex items-center justify-end gap-8">
          <a className="hidden lg:flex flex flex-col items-center justify-center gap-1 cursor-pointer transition-all duration-200 ease-in-out group text-grey-900 hover:text-indigo-700 group-hover:scale-125">
            <InfoIcon
              className=" h-4 transition-all duration-200 ease-in-out group-hover:text-indigo-700 group-hover:scale-125"
              color="currentColor"
            />
            <div className="text-[12px] font-medium leading-4 text-grey-500 transition-all group-hover:text-indigo-700 group-hover:scale-125">
              About
            </div>
          </a>
          <Link
            className="hidden lg:flex flex flex-col items-center justify-center gap-1 cursor-pointer transition-all duration-200 ease-in-out group text-grey-900 hover:text-indigo-700 group-hover:scale-125"
            href={AppRoutes.HOW_IT_WORKS}
          >
            <WorkIcon
              className=" h-4 transition-all duration-200 ease-in-out group-hover:text-indigo-700 group-hover:scale-125"
              color="currentColor"
            />
            <div className="text-[12px] font-medium leading-4 text-grey-500 transition-all group-hover:text-indigo-700 group-hover:scale-125">
              How It Works
            </div>
          </Link>
          <a className="flex flex-col items-center justify-center gap-1 cursor-pointer transition-all duration-200 ease-in-out group text-grey-900 hover:text-indigo-700 group-hover:scale-125">
            <UserIcon
              className=" h-4 transition-all duration-200 ease-in-out group-hover:text-indigo-700 group-hover:scale-125"
              color="currentColor"
            />
            <span className="text-[12px] font-medium leading-4 text-grey-500 transition-all group-hover:text-indigo-700 group-hover:scale-125">
              Sign In
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
