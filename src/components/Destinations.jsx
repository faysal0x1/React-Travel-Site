import React from "react";
// import Image
// import Image from "next/image";

import borabora from "../asstes/borabora.jpg";
import borabora2 from "../asstes/borabora2.jpg";
import keywest from "../asstes/keywest.jpg";
import maldives from "../asstes/maldives.jpg";
import maldives2 from "../asstes/maldives2.jpg";
import maldives3 from "../asstes/maldives3.jpg";

const Destinations = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
      <h1>All-Inclusive Resor ts</h1>
      <p className="py-4">On the Cariebeans Best Beaches</p>

      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <img className="w-full object-cover h-full col-span-2 md:col-span-3 row-span-2" src={borabora} alt="" />
        <img className="w-full object-cover h-full" src={borabora2} alt="" />
        <img className="w-full object-cover h-full" src={maldives} alt="" />
        <img className="w-full object-cover h-full" src={maldives2} alt="" />
        <img className="w-full object-cover h-full" src={keywest} alt="" />
      </div>
    </div>
  );
};

export default Destinations;
