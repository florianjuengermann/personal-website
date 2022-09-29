import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

interface ProjectProps {
  title: string;
  id?: string;
  subtitle?: React.ReactNode;
  icon: string;
  iconClass?: string;
  teaser: React.ReactNode;
  children?: React.ReactNode;
}

const Project = ({
  title,
  id,
  subtitle,
  icon,
  iconClass,
  teaser,
  children,
}: ProjectProps) => {
  const isVid = icon.endsWith(".mp4");
  return (
    <div
      className="project flex text-lg w-full flex-wrap md:flex-nowrap my-6 relative items-center"
      id={id}
    >
      {/* with background: p-8 rounded-[40px] overflow-hidden */}
      <div className="w-full md:w-44 shrink-0 flex justify-center">
        {!isVid && (
          <img
            src={icon}
            className={"max-h-[300px] rounded-[20px] " + iconClass}
            alt=""
          />
        )}
        {isVid && (
          <video
            className={"max-h-[300px] rounded-[20px] " + iconClass}
            src={icon}
            autoPlay
            loop
            muted
          />
        )}
      </div>
      <div className="flex-grow md:px-10 mt-10 md:mt-0">
        <div className="text-left font-bold text-xl flex items-center">
          {title}
        </div>
        <div className="text-left text-sm text-neutral-400 flex items-center">
          {subtitle}
        </div>
        <div className="text-left">{teaser}</div>
      </div>
      {children && (
        <MdKeyboardArrowDown
          className="absolute bottom-0 w-full cursor-pointer"
          size={40}
          onClick={() => alert("clicked")}
        />
      )}
    </div>
  );
};

export default Project;
