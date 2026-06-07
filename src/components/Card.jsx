import React from 'react'
import { FaTrash, FaArrowRight } from "react-icons/fa";

const Card = (props) => {
  return (
    <div>
      <div className='bg-gray-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-200 p-4 flex items-center justify-between'>
        <span className='font-medium'>
          {props.task}
        </span>
        <div className='flex gap-2'>
          {props.title !== "Done" && (
            <button
            onClick={() => {
              props.moveTask(props.task, props.index, props.title)
            }}
            className='p-2 rounded hover:bg-blue-100 active:scale-95'
            >
            <FaArrowRight className='text-blue-600' />
            </button>
          )}

          <button
          onClick={() => {
            props.deleteTask(props.index)
            }}
          className='p-2 rounded hover:bg-red-100 active:scale-95'
          >
          <FaTrash className='text-red-600' />
          </button>
        </div>

      </div>
    </div>
  )
}

export default Card