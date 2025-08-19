import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <div className="bg-white rounded-lg shadow-lg w-96">
        <div className="bg-purple-500 rounded-t-lg flex justify-between px-4 py-2">
          <button id="naveToggle" className="text-2xl text-white">&#9776;</button>
          <h1 className="text-white text-lg font-semibold">Todo List</h1>
        </div>

        <ul className="p-4">

        </ul>
      </div>
    </>
  )
}

export default App
