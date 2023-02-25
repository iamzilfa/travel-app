import React from "react";

const SelectsCard = ({ bg, text, key }) => {
  return (
    <div className="relative" key={key}>
      <img src={bg} alt="/" className="w-full h-full object-cover" />
      <div className="bg-gray-100/30 absolute top-0 w-full h-full">
        <p className="absolute left-4 bottom-4 text-xl text-white font-bold">
          {text}
        </p>
      </div>
    </div>
  );
};

export default SelectsCard;
