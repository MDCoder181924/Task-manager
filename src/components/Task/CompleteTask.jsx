import React from 'react'

const CompleteTask = ({task}) => {
  return (
    <div className='md:w-[23.3%] w-full'>
        <div className="relative  h-80 rounded-2xl  bg-[#3aa970] mt-10">
        <div className="flex rounded-t-2xl bg-[#1e804e] justify-between items-center p-2   h-[15%]">
            <h2 className=''>{task.category}</h2>
            <h2>{task.taskDate}</h2>
        </div>
        <div className="m-3 ">
            <h2 className='text-[2rem]'>{task.taskTitle}</h2>
            <p className='text-[1.2rem]'>{task.taskDescription}</p>
        </div>
        <div className="absolute bottom-0 flex flex-wrap justify-center  gap-3 p-3 w-full">
            <button className="bg-[#40914b] text-white  px-2 py-1 rounded hover:bg-[#1e872c]">
                Complete
            </button>
            
        </div>
      </div>
      
    </div>
  )
}

export default CompleteTask
