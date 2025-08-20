import { useState } from 'react'
import './App.css'
import Modal from './components/Modal'

// TODO: Add the key property
// TODO: Task styling

/*
Styling attribution: https://medium.com/@haquedot/building-a-to-do-list-application-with-tailwind-css-and-javascript-5d4ba5dac726 
*/

function App() {
  const [tasks, setTasks] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const updateTasks = (task) => {
    setTasks([...tasks, task]);
    closeModal();
  }

  const openModal = () => {
    if (!isModalOpen) setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <>
      <div className="bg-white rounded-lg shadow-lg w-96">
        <div className="bg-purple-500 rounded-t-lg flex justify-between px-4 py-2">
          <button id="naveToggle" className="text-2xl text-white">&#9776;</button>
          <h1 className="text-white text-lg font-semibold">Todo List</h1>
        </div>

        <ul className="p-4">
          {tasks.map(task => <li>{task.text}</li>)}
        </ul>

        <div className="flex justify-center">
          <button 
          onClick={openModal}
          className="bg-purple-500 flex items-center rounded-full shadow-md text-white font-semibold py-2 px-6 mb-4 hover:bg-purple-600">
          + New Task
          </button>
        </div>
      </div>

      {isModalOpen && <Modal addCallback={updateTasks} closeCallback={closeModal}/>}
    </>
  )
}

export default App
