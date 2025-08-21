import React from "react";
import { useState } from "react";

function Modal({ addCallback, closeCallback }) {
    const [task, setTask] = useState("")

    const addTask = (e) => {
        e.preventDefault();
        if (task)
            addCallback({id: Date.now(), text: task, completed: false});
    }

    return (
      <div id="modal" className="modal fixed left-0 top-0 w-full h-full flex items-center justify-center bg-gray-900/50">
        <form onSubmit={addTask} className="rounded-lg shadow-lg w-80 p-6 bg-white">
            <label htmlFor="newTask" className="text-lg font-semibold mb-4">Add New Task</label>
            <input 
            type="text" 
            id="newTask" 
            name="newTask" 
            value={task}
            onChange={e => setTask(e.target.value)}
            className="border border-gray-300 rounded-full w-full mb-4 py-2 px-4"
            />
            <div className="flex gap-6">
                <button 
                type="submit"
                className="bg-purple-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-purple-600">
                    Add
                </button>
                <button onClick={closeCallback} className="text-gray-400 hover:text-gray-500">Close</button>
            </div>
        </form>
      </div>
    )
}

export default Modal;