import React from 'react'

const CountTask = ({Data}) => {
  return (
      <div className=' flex  md:flex-row flex-col gap-20 px-10'>

        <div className="flex gap-8 md:w-[50%] justify-between ">

          <div className="h-30 rounded-2xl w-[45%] bg-[#5e2ece] flex flex-col items-center justify-center ">
            <div className="flex items-center justify-center flex-col">
              <h1 className='text-3xl mb-2'>{Data?.taskCounts?.newTask || 0}</h1>
              <h3 className='text-2xl'>New Task</h3>
            </div>
          </div>
          <div className="h-30 rounded-2xl w-[45%] bg-[#3aa970] flex flex-col items-center justify-center ">
            <div className="flex items-center justify-center flex-col">
              <h1 className='text-3xl mb-2'>{Data?.taskCounts?.completed || 0}</h1>
              <h3 className='text-2xl'>Complete task</h3>
            </div>
          </div>

        </div>

        <div className="flex gap-8 md:w-[50%] justify-between">

          <div className="h-30 rounded  bg-[#a59c40]  w-[45%] flex flex-col items-center justify-center ">
            <div className="flex items-center justify-center flex-col">
              <h1 className='text-3xl mb-2'>{Data?.taskCounts?.active || 0}</h1>
              <h3 className='text-2xl'>Accept task</h3>
            </div>
          </div>
          <div className="h-30 rounded-2xl w-[45%] bg-[#b13b52] flex flex-col items-center justify-center ">
            <div className="flex items-center justify-center flex-col">
              <h1 className='text-3xl mb-2'>{Data?.taskCounts?.failed || 0}</h1>
              <h3 className='text-2xl'>Failed task</h3>
            </div>
          </div>

        </div>

      </div>
  )
}

export default CountTask
