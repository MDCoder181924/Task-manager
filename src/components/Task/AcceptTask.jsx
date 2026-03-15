import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const EmployeTaskBox = ({task}) => {

const { userData, setUserData } = useContext(AuthContext)

  const onDelet = (e) => {
    e.preventDefault()

    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))

    if (!loggedInUser?.email || !userData?.employees) {
      return
    }

    const updatedEmployees = userData.employees.map((employee) => {
      if (employee.email !== loggedInUser.email) {
        return employee
      }

      return {
        ...employee,
        tasks: employee.tasks.map((employeeTask) => {
          if (employeeTask !== task) {
            return employeeTask
          }

          return {
            ...employeeTask,
            failed: true,
            active: false
          }
        }),
        taskCounts: {
          ...employee.taskCounts,
          active: Math.max(employee.taskCounts.active - 1, 0),
          failed: employee.taskCounts.failed + 1
        }
      }
    })

    localStorage.setItem('employees', JSON.stringify(updatedEmployees))
    setUserData((prev) => ({ ...prev, employees: updatedEmployees }))
  }


  
const onCorrect = (e) => {
    e.preventDefault()

    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))

    if (!loggedInUser?.email || !userData?.employees) {
      return
    }

    const updatedEmployees = userData.employees.map((employee) => {
      if (employee.email !== loggedInUser.email) {
        return employee
      }

      return {
        ...employee,
        tasks: employee.tasks.map((employeeTask) => {
          if (employeeTask !== task) {
            return employeeTask
          }

          return {
            ...employeeTask,
            completed: true,
            active: false
          }
        }),
        taskCounts: {
          ...employee.taskCounts,
          active: Math.max(employee.taskCounts.active - 1, 0),
          completed: employee.taskCounts.completed + 1
        }
      }
    })

    localStorage.setItem('employees', JSON.stringify(updatedEmployees))
    setUserData((prev) => ({ ...prev, employees: updatedEmployees }))
  }
    
  return (
    <div className='md:w-[23.3%] w-full'>
        <div className="relative  h-80 rounded-2xl  bg-[#404c82] mt-10">
        <div className="flex rounded-t-2xl bg-[#2d3b83] justify-between items-center p-2   h-[15%]">
            <h2 className=''>{task.category}</h2>
            <h2>{task.taskDate}</h2>
        </div>
        <div className="m-3 ">
            <h2 className='text-[2rem]'>{task.taskTitle}</h2>
            <p className='text-[1.2rem]'>{task.taskDescription}</p>
        </div>
        <div  className="absolute bottom-0 flex flex-wrap justify-between gap-3 p-3 w-full">
            <button onClick={(e)=>{onCorrect(e)}} className="bg-[#40914b] text-white  px-2 py-1 rounded hover:bg-[#1e872c]">
                Mark as Complete
            </button>
            <button onClick={(e)=>{onDelet(e)}} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                Mark as Failed
            </button>
        </div>
      </div>
      
    </div>
  )
}

export default EmployeTaskBox
