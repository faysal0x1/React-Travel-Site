import React from "react";
// import react icons
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";
const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      {/* Left Grid */}
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>Luxury Included Vacations for two people</h2>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ab obcaecati esse suscipit quasi nam,
            inventore quia explicabo molestiae vitae cupiditate nesciunt culpa ex earum corrupti a. Dolorem veritatis
            dolorum nulla et libero commodi dolor sit, quo repellendus aspernatur deleniti obcaecati ipsa eaque veniam
            excepturi fugiat, perspiciatis corrupti. Totam at expedita unde modi ipsum. Ab minus ut cupiditate unde
            placeat, atque quasi libero exercitationem doloremque ipsa aliquam suscipit pariatur consequuntur error
            rerum, vero eius facere corporis! Harum quidem, aliquam corrupti ab hic fuga impedit deleniti beatae, sed
            voluptates repellendus dignissimos commodi vitae ipsam eum autem quo? Debitis eveniet reiciendis quisquam.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className="uppercase  py-2">Leading Service</h3>
              <p className="uppercase py-1">All-inclusive company for 20 years in-a-row</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className="uppercase py-2">Leading Service</h3>
              <p className="uppercase py-1">All-inclusive company for 20 years in-a-row</p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      {/* Right Grid */}
      <div>
        <div className="border text-center">
          <p className="pt-2">GET AN ADDITIONAL 10% OFF</p>
          <p className="py-4">12 HOURS LEFT</p>
          <p className="bg-gray-800 text-gray-200 py-2">BOOK NOW AND SAVE</p>
        </div>
        <form action="" className="w-full">
          <div className="flex flex-col my-2">
            <label htmlFor="">Destination</label>
            <select className="border rounded-md p-2" name="" id="">
              <option value="">Dhaka</option>
              <option value="">Shylet</option>
              <option value="">Bandarban</option>
              <option value="">Cox's Bazar</option>
            </select>
          </div>
          <div className="flex flex-col my-4">
            <label htmlFor="">Check In</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="">Check Out</label>
            <input className="border rounded-md p-2" type="date" />
          </div>

          <button className="w-full my-4">Rates & Availability</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
