import React from "react";
import borabora from "../asstes/borabora.jpg";
import borabora2 from "../asstes/borabora2.jpg";
import keywest from "../asstes/keywest.jpg";
import maldives from "../asstes/maldives.jpg";
import maldives2 from "../asstes/maldives2.jpg";
import maldives3 from "../asstes/maldives3.jpg";
import SelectsCard from "./SelectsCard";

const Selects = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Image Galley */}

      <SelectsCard bg={borabora} text="Bora Bora" />
      <SelectsCard bg={borabora} text="Bora Bora" />
      <SelectsCard bg={borabora} text="Bora Bora" />
      <SelectsCard bg={borabora} text="Bora Bora" />
      <SelectsCard bg={borabora} text="Bora Bora" />
      <SelectsCard bg={borabora} text="Bora Bora" />
    </div>
  );
};

export default Selects;
