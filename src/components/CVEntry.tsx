import React from "react";

interface CVEntryProps {
  title: string;
  subtitle?: string;
  icon?: string;
  location: string;
  time: string;
  link?: string;
  children: React.ReactNode;
}

const CVEntry = ({
  title,
  subtitle,
  icon,
  time,
  link,
  children,
}: CVEntryProps) => {
  return (
    <div className="flex text-lg flex-wrap md:flex-nowrap w-full items-center my-4">
      <div className="basis-full md:basis-32 md:shrink-0 flex justify-center">
        {icon && <img src={icon} className="max-h-24" alt="" />}
      </div>
      <div className="basis-full md:basis-40 my-5 md:order-3">{time}</div>
      <div className="flex-grow sm:px-10 mb-10 md:mb-0">
        <div className="text-left font-bold text-xl">
          {link && <a href={link}>{title}</a>}
          {!link && title}
        </div>
        <div className="text-left text-sm text-neutral-400 flex">
          {subtitle}
        </div>
        <div className="text-left">
          <p>{children}</p>
        </div>
      </div>
    </div>
  );
};

export default CVEntry;
