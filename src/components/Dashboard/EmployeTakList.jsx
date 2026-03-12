import React from 'react'

const EmployeTakList = () => {
  return (
    <div  className='mx-10 bg-[#211f1f] flex flex-wrap gap-5 scrollbar-hide px-5 h-120 overflow-y-scroll scrollbar-hide my-10'>
      <div className="h-60 rounded-2xl w-[23%] bg-[#404c82] mt-10">
        <div className="flex rounded-t-2xl bg-[#2d3b83] justify-between items-center p-2   h-[15%]">
            <h2 className=''>High</h2>
            <h2>20 feb 2026</h2>
        </div>
        <div className="m-3 ">
            <h2 className='text-[2rem]'>this is fast task</h2>
            <p className='text-[1.2rem]'>This is a description of the fast task.</p>
        </div>
      </div>
      
    </div>
  )
}

export default EmployeTakList
