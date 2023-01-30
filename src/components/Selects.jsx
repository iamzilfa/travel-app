import React from "react";
import SelectsCard from "./SelectsCard";
import SelectsData from "./SelectsData";

const Selects = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {SelectsData.map((e, i) => (
        <SelectsCard key={i} bg={e.image} text={e.text} />
      ))}
    </div>
  );
};

export default Selects;
