import React from "react";
import { MdInfoOutline } from "react-icons/md";

interface HonorEntryProps {
  title: string;
  icon?: string;
  iconClass?: string;
  hoverText?: string;
  children: React.ReactNode;
}

const HonorEntry = ({
  title,
  icon,
  hoverText,
  iconClass,
  children,
}: HonorEntryProps) => {
  return (
    <div className="flex text-lg flex-wrap md:flex-nowrap w-full items-center my-6">
      <div className="w-full md:w-56 flex justify-center">
        {icon && (
          <img
            src={icon}
            className={"max-w-[300px] max-h-40 md:w-full " + iconClass}
            alt=""
          />
        )}
      </div>
      <div className="flex-grow sm:px-10 my-10 md:my-0">
        <div className="text-left font-bold text-xl flex items-center">
          {title}{" "}
          <MdInfoOutline
            data-tip={hoverText}
            className="ml-2 mb-1"
            scale={0.5}
          />
        </div>
        <div className="text-left">{children}</div>
      </div>
    </div>
  );
};

export default HonorEntry;
