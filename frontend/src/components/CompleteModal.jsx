import React from "react";

function CompleteModal() {
    return (
      <div id="completeModal" className="invisible completeModal fixed left-0 top-0 w-full h-full bg-gray-900/50 flex justify-center items-center">
        <div id="completeModalDiv" className="completeModalDiv bg-white rounded-lg shadow-lg w-80 p-6">
          <div className="flex justify-center items-center">
            <h2 className="text-lg font-semibold">Completed Tasks</h2>

            <button id="completeModalClose" className="text-gray-500 hover:text-red-500 ml-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0" stroke="currentColor">
                <path strokeLinecap="round" strokeLineJoin="round" strokeWidth="2" d="M6 18 L18 6 M6 6 l12 12" />
              </svg>
            </button>
          </div>

          <hr className="my-3" />
          <ul id="completedTaskList">

          </ul>
        </div>
      </div>
    );
}

export default CompleteModal;