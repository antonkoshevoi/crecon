import { Link } from "react-router-dom";

import { AppRoutes } from "../../../constants/pages";
import { InfoIcon, UserIcon, WorkIcon } from "../../icons";

import logo from "../../../assets/demo-logo.svg";

const header = [
  {
    id: "header-1",
    Icon: InfoIcon,
    label: "About",
    link: "https://crecon.exe-analytics.com/"
  },
  {
    id: "header-2",
    Icon: WorkIcon,
    label: "How It Works",
    link: AppRoutes.HOW_IT_WORKS
  },
  {
    id: "header-3",
    Icon: UserIcon,
    label: "Sign In",
    link: "#"
  }
];

const Header = () => {
  return (
    <div className="z-1 pt-8 px-4 fixed w-full bg-white">
      <div className="mt-0 w-full max-w-full px-2">
        <div className="z-1 flex h-16 items-center justify-between rounded-[20px] border border-[rgb(228,228,231)] px-6 py-0">
          <div className="flex flex-row items-center gap-12">
            <a href="https://crecon.exe-analytics.com/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="flex items-center justify-end gap-8">
            {header.map(({id, link, Icon, label}, i) => {
              return (
                <Link
                  key={id}
                  href={link}
                  className={`flex-col items-center justify-center gap-1 cursor-pointer transition-all duration-200 ease-in-out group text-gray-900 hover:text-[#0c40ff] ${[0, 1].includes(i) ? "hidden lg:flex" : "flex"}`}
                >
                  <Icon className={`transition-all duration-200 ease-in-out group-hover:text-[#0c40ff] ${i === 0 ? "w-[17px] h-[17px]" : "w-5 h-5"}`}
                    color="currentColor" 
                  />
                  <div className="text-[12px] font-medium leading-4 -mt-[2px] text-gray-500 transition-all group-hover:text-[#0c40ff]">
                    {label}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
