import React, { useEffect, useState } from 'react'
import Card from './Card'

const Column = (props) => {

  const [task, setTask] = useState("")


const deleteTask = (clickedIndex)=>{
  const newTasks = props.tasks.filter((task, index) =>{
    return index !== clickedIndex
  })
  props.setTasks(newTasks)
  
}
  return (
    <div>
        <div className='bg-white shadow-lg rounded-xl p-4 min-h-125 w-80'>
          <h1 className='text-xl font-bold text-center mb-4'>{props.title}</h1>
          {
            props.title === "Todo" && (
              <div className='flex gap-2 mb-4'>
                <input className='border rounded px-2 py-1 flex-1' type="text"
                value={task} 
                placeholder='Create a Task' 
                onChange={(e)=>{
                  setTask(e.target.value)                  
                }}
                />
                <button 
                className='bg-blue-500 text-white rounded active:scale-95  p-1'
                onClick={()=>{
                  if(task.trim()==""){
                    return
                  }
                  props.setTasks([...props.tasks, task])
                  setTask("")
                }}
                >
                Create
                </button>                
              </div>
            )
          }
          {
          props.tasks?.map((task, index) => (
            <Card key={index} task={task} index={index} deleteTask={deleteTask} moveTask={props.moveTask} title={props.title}/>
          ))
          }  
        </div>
    </div>
  )
}

export default Column