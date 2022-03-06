import React from "react";
import ReactTooltip from "react-tooltip";
import { MdInfoOutline } from "react-icons/md";

interface HonorEntryProps {
  title: string;
  icon?: string;
  hoverText?: string;
  children: React.ReactNode;
}

const HonorEntry = ({ title, icon, hoverText, children }: HonorEntryProps) => {
  return (
    <div className="flex text-lg flex-wrap md:flex-nowrap w-full items-center my-6">
      <div className="basis-full md:basis-56 flex justify-center">
        {icon && <img src={icon} className="max-h-24" alt="" />}
      </div>
      <div className="flex-grow px-10 my-10 md:my-0">
        <div className="text-left font-bold text-xl flex items-center">
          {title}{" "}
          <MdInfoOutline
            data-tip={hoverText}
            className="ml-2 mb-1"
            scale={0.5}
          />
        </div>
        <ReactTooltip multiline={true} />
        <div className="text-left">{children}</div>
      </div>
    </div>
  );
};

export default HonorEntry;
