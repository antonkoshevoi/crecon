import { useState } from "react";

import { ChevronIcon } from '../../icons';

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);


  const handleOpen = () => setOpen(!open);

  return (
    <div
      className={`w-full bg-white rounded-2xl border border-[rgb(228,228,231)] cursor-pointer transition-all duration-200
        ${open ? "max-h-[1000px]" : ""}
        px-6 pb-6 pt-2 md:pt-6`}
      onClick={handleOpen}
      aria-hidden="true"
    >
      <div className="flex items-center justify-between lg:gap-6">
          <h6 className="mb-0 text-[28px] font-black text-grey-900">
            {title}
          </h6>

        <button
          type="button"
          className={`w-8 h-8 p-0 rounded-full border-none transition-colors duration-200 flex items-center justify-center bg-inherit cursor-pointer`}
        >
          <ChevronIcon
            className={`w-5 h-5 text-[#1E85FF] transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`whitespace-pre-line overflow-hidden transition-all duration-300 ease-in-out rounded-lg ${
          open
            ? "max-h-[1000px] mt-4 font-normal"
            : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
