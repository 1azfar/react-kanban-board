import React from 'react'

const Navbar = () => {
  return (
    // main div
    <div className='bg-white shadow h-16 flex px-8 justify-between items-center'>
         <div>      {/*left div  */}
            <h1 className='text-blue-500 text-3xl font-bold'>Kanban Board</h1>
        </div>
        <div>       {/*center div  */}
          <ul className='flex gap-20 font-semibold cursor-pointer text-gray-700'>
              <li>Boards</li>
              <li>items</li>
              <li>People</li>
              <li>Reports</li>
            </ul>
        </div>      {/*right div  */}
        <div>
          <button className='bg-green-500 flex items-center justify-center  text-white h-8 w-20 rounded-xl active:scale-95'>Create</button>
        </div>
    </div>
  )
}

export default Navbar