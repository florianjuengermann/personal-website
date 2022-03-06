import React from "react";

interface RoundImgProps {
  src: string;
}

const RoundImg = ({ src }: RoundImgProps) => {
  return (
    <div>
      <img
        src={src}
        className="rounded-[40px] drop-shadow-xl font-semibold"
        alt=""
      />
    </div>
  );
};

export default RoundImg;
