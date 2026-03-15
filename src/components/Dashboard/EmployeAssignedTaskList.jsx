import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const EmployeAssignedTaskList = () => {
  const { userData: authData } = useContext(AuthContext)

  return (
    <div>
      <div className="  h-80 md:h-65 bg-[#211e1e] overflow-y-scroll scrollbar-hide  m-5 mx-10 flex justify-between flex-wrap p-5 gap-1">
        <div className="h-10 rounded items-center px-5 flex justify-between bg-[rgb(219,175,175)] w-full">
          <h1 className='text-2xl w-1/5 flex justify-center items-center text-black'>Name</h1>
          <h2 className='text-2xl w-1/5 flex justify-center items-center text-black'>active</h2>
          <h2 className='text-2xl w-1/5 flex justify-center items-center text-black'>newTask</h2>
          <h2 className='text-2xl w-1/5 flex justify-center items-center text-black'>completed</h2>
          <h2 className='text-2xl w-1/5 flex justify-center items-center text-black'>failed</h2>
        </div>
        <div className="  h-60 md:h-65 bg-[#211e1e] overflow-y-scroll scrollbar-hide   flex justify-between flex-wrap w-full gap-1">
          {authData?.employees?.map((employee, idx) => {
            return <div key={idx} className="h-12 rounded items-center px-5 flex justify-between  border-2 my-0.5 borderw w-full">
              <h1 className='text-2xl w-1/5 flex justify-center items-center text-amber-300'>{employee.firstName}</h1>
              <h2 className='text-2xl w-1/5 flex justify-center items-center text-white'>{employee.taskCounts.active}</h2>
              <h2 className='text-2xl w-1/5 flex justify-center items-center text-white'>{employee.taskCounts.newTask}</h2>
              <h2 className='text-2xl w-1/5 flex justify-center items-center text-white'>{employee.taskCounts.completed}</h2>
              <h2 className='text-2xl w-1/5 flex justify-center items-center text-white'>{employee.taskCounts.failed}</h2>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default EmployeAssignedTaskList
