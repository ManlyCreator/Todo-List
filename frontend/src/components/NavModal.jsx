import React from "react";
import NavModalButton from "./NavModalButton";

function NavModal() {
    return (
      <div id="navModal" className="invisible navModal fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900/50">
        <div className="bg-white rounded-lg shadow-lg w-80 px-6">
          <NavModalButton id="completeBtn" text="Completed" />
          <NavModalButton id="pendingBtn" text="Pending" />
          <NavModalButton id="navCloseBtn" text="Close" />
        </div>
      </div>
    );
}

export default NavModal;