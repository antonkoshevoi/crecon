const Footer = () => {
  return (
    <div className="text-[12px] p-6 text-2sm-ext font-normal text-grey-700">
      <div className="mx-auto w-full px-3">
        <div className="lex-wrap -mx-3 mt-0 flex flex-row">
          <div className="mt-0 flex w-full max-w-full flex-wrap items-center justify-center gap-2 self-stretch px-3 text-center">
            <a className="inline-flex items-center justify-center cursor-pointer text-2sm transition-all duration-200 ease-in-out text-grey-900 hover:text-indigo-700">
              <span>White Paper</span>
            </a>
            <span>•</span>
            <a className="inline-flex items-center justify-center cursor-pointer text-2sm transition-all duration-200 ease-in-out text-grey-900 hover:text-indigo-700">
              <span>Terms of Use</span>
            </a>
          </div>
        </div>
        <div className="-mx-3 mt-2 flex flex-wrap">
          <div className="mt-0 w-full max-w-full px-3 text-center">
            <span>
              Copyright © 2025 SpreadYourCause.com. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
