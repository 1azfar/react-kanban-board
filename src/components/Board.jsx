import React, { useEffect, useState } from 'react'
import Column from './Column'

const Board = () => {

  const savedBoard = localStorage.getItem("kanban-board")

  const parsedBoard = savedBoard
  ? JSON.parse(savedBoard)
  : null

  const [todoTask, setTodoTask] = useState(
     parsedBoard
    ? parsedBoard.todoTask
    :['Learn React', 'Build Portfolio', 'Create Weather App'])
  const [progressTasks, setProgressTasks] = useState(
     parsedBoard
    ? parsedBoard.progressTasks
    :[])
  const [doneTasks, setDoneTasks] = useState(
     parsedBoard
    ? parsedBoard.doneTasks
    :[])
  
  useEffect(()=>{
     localStorage.setItem(
    "kanban-board",
    JSON.stringify({
      todoTask,
      progressTasks,
      doneTasks
    })
  )    
  },[todoTask, progressTasks, doneTasks])



  const moveTask = (task, index, column)=>{
        if(column === "Todo"){
    const newTodoTask = todoTask.filter((currentTask, currentIndex)=>{
      return currentIndex !== index
    })
    setTodoTask(newTodoTask)
    setProgressTasks([...progressTasks, task])
    }
        if(column === "in-Progress"){
    const newProgressTasks = progressTasks.filter((currentTask, currentIndex) => {
    return currentIndex !== index
    })
    setProgressTasks(newProgressTasks)
    setDoneTasks([...doneTasks, task]) 
       }   
  }
  return (
    <div>
         <div className='bg-slate-100 mt-5 min-h-screen px-6 py-4'> {/*board */}
            <div className='text-2xl font-semibold'></div>
            <div className='flex gap-6 justify-center'>
                <Column title = "Todo" tasks={todoTask} setTasks={setTodoTask} moveTask={moveTask}/>
                <Column title = "in-Progress" tasks={progressTasks} setTasks={setProgressTasks} moveTask={moveTask}/>
                <Column title = "Done" tasks={doneTasks} setTasks={setDoneTasks}/>
            </div>
        </div>
    </div>
  )
}

export default Board