import React from "react";

interface CVEntryProps {
  title: string;
  icon?: string;
  location: string;
  time: string;
  children: React.ReactNode;
}

const CVEntry = ({ title, icon, time, children }: CVEntryProps) => {
  return (
    <div className="flex text-lg flex-wrap md:flex-nowrap w-full items-center my-4">
      <div className="basis-full md:basis-24 flex justify-center">
        {icon && <img src={icon} className="max-h-24" alt="" />}
      </div>
      <div className="flex-grow px-10 my-5">
        <div className="text-left font-bold">{title}</div>
        <div className="text-left">{children}</div>
      </div>
      <div className="basis-full md:basis-40">{time}</div>
    </div>
  );
};

export default CVEntry;
