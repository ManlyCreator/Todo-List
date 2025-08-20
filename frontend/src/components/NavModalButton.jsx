import React from "react";

function NavModalButton({ id, text }) {
    return (
        <button type="button" id={id} className="w-full h-full flex justify-center items-center bg-purple-500 text-white rounded-lg shadow-md py-2 px-6 my-4 hover:bg-purple-600">
            {text}
        </button>
    )
}

export default NavModalButton