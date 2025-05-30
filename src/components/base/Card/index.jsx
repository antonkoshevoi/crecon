const Card = ({ title, children }) => {
    return (
        <div
            className={`w-full bg-white rounded-[20px] border border-[rgb(228,228,231)] cursor-pointer transition-all duration-200 px-6 pb-4 pt-2 md:pt-5 h-auto`}
            aria-hidden="true"
        >
            <div className="flex items-center justify-between lg:gap-6">
                <h6 className="mb-0 text-[1.75rem] leading-[2.25rem] tracking-[-0.22px] font-black text-gray-900">
                    {title}
                </h6>
            </div>
            <div className={`whitespace-pre-line overflow-hidden transition-all duration-300 ease-in-out rounded-lg max-h-full mt-0 font-normal`}>
                {children}
            </div>
        </div>
    );
}

export default Card;
