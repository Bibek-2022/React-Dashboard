import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../data/dummy";
const Sidebar = () => {
  const activeMenu = "true";
  return (
    <div className="ml h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto ph-10">
      {activeMenu && (
        <div className="flex justify-between items-center">
          <Link to="/" onClick={() => {}} className="items-center">
            <SiShopware className="text-2xl text-gray-500 gap-e ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900" />
            <span>Shopy</span>
          </Link>
          <TooltipComponent content="Menu" position="BottomCenter">
            <button>
              <MdOutlineCancel />
            </button>
          </TooltipComponent>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
