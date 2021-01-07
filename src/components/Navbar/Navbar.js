import React from "react";

import { SortList } from "../SortList/index";
import { SearchImage } from "../SearchImage/index";

function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="flex-container font-30">
        <div className="flex-item text-left">
          <SortList />
        </div>
        <div className="flex-item">
          <SearchImage />
        </div>
        <div className="flex-item"></div>
      </div>
    </nav>
  );
}

export default Navbar;
