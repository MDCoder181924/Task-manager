import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const EmployeAssignedTaskList = () => {
  const { userData: authData } = useContext(AuthContext)

  return (
    <div>
      <div className="  h-80 md:h-65 bg-[#211e1e] overflow-y-scroll scrollbar-hide  m-5 mx-10 flex justify-between flex-wrap p-5 gap-1">
        <div className="h-10 rounded items-center px-5 flex justify-between bg-[rgb(160,12,12)] w-full">
          <h1 className='text-2xl w-1/5 flex justify-center items-center text-emerald-400'>Name</h1>
          <h2 className='text-2xl w-1/5 flex justify-center items-center text-emerald-400'>active</h2>
          <h2 className='text-2xl w-1/5 flex justify-center items-center text-emerald-400'>newTask</h2>
          <h2 className='text-2xl w-1/5 flex justify-center items-center text-emerald-400'>completed</h2>
          <h2 className='text-2xl w-1/5 flex justify-center items-center text-emerald-400'>failed</h2>
        </div>
        <div className="  h-60 md:h-65 bg-[#211e1e] overflow-y-scroll scrollbar-hide   flex justify-between flex-wrap w-full gap-1">
          {authData?.employees?.map((employee, idx) => {
            return <div key={idx} className="h-12 rounded items-center px-5 flex justify-between bg-[rgb(240,42,42)] w-full">
              <h1 className='text-2xl w-1/5 flex justify-center items-center text-mauve-950'>{employee.firstName}</h1>
              <h2 className='text-2xl w-1/5 flex justify-center items-center text-purple-400'>{employee.taskCounts.active}</h2>
              <h2 className='text-2xl w-1/5 flex justify-center items-center text-shadow-taupe-700'>{employee.taskCounts.newTask}</h2>
              <h2 className='text-2xl w-1/5 flex justify-center items-center text-yellow-900'>{employee.taskCounts.completed}</h2>
              <h2 className='text-2xl w-1/5 flex justify-center items-center text-yellow-300'>{employee.taskCounts.failed}</h2>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default EmployeAssignedTaskList
