import React from 'react'

const CompleteTask = () => {
  return (
    <div>
        <div className="relative  h-80 rounded-2xl  bg-[#404c82] mt-10">
        <div className="flex rounded-t-2xl bg-[#2d3b83] justify-between items-center p-2   h-[15%]">
            <h2 className=''>High</h2>
            <h2>20 feb 2026</h2>
        </div>
        <div className="m-3 ">
            <h2 className='text-[2rem]'>this is fast task</h2>
            <p className='text-[1.2rem]'>This is a description of the fast task.</p>
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
