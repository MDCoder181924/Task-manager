import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AddTask = () => {
  const { userData, setUserData } = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = React.useState('')
  const [taskDescription, setTaskDescription] = React.useState('')
  const [taskDate, setTaskDate] = React.useState('')
  const [category, setCategory] = React.useState('')
  const [assignTo, setAssignTo] = React.useState('')

  const handakeSubmit = (e) => {
    e.preventDefault()

    const employees = userData?.employees || JSON.parse(localStorage.getItem('employees')) || []
    let matchedEmployee = false

    const updatedEmployees = employees.map((elem) => {
      if (elem.firstName === assignTo) {
        matchedEmployee = true
        return {
          ...elem,
          tasks: [
            ...elem.tasks,
            { taskTitle, taskDescription, taskDate, category, active: false, newTask: true, completed: false, failed: false }
          ],
          taskCounts: {
            ...elem.taskCounts,
            newTask: elem.taskCounts.newTask + 1
          }
        }
      }

      return elem
    })

    if (!matchedEmployee) {
      alert('Employee not found')
      return
    }

    localStorage.setItem('employees', JSON.stringify(updatedEmployees))
    setUserData((prev) => ({ ...prev, employees: updatedEmployees }))

    setTaskTitle('')
    setTaskDescription('')
    setTaskDate('')
    setCategory('')
    setAssignTo('')
  }

  return (
    <div>
      <form action="" onSubmit={(e) => handakeSubmit(e)}>
        <div className=" h-150 md:h-85 bg-[#211e1e] mx-10 flex justify-between flex-wrap md:flex-nowrap">
          <div className="w-full md:w-1/2  p-4 pl-10 flex flex-col gap-3">
            <div className="">
              <p className='text-[1.2rem] mb-1.2'>Task Title</p>
              <input
              required
                value={taskTitle}
                onChange={(e) =>
                  setTaskTitle(e.target.value)
                }
                type="text"
                className='border-amber-50 border-2 p-1.5 border-be-rose-50 rounded md:w-[80%] w-[90%]  text-amber-50' placeholder='Make a UI design '
              />
            </div>
            <div className="">
              <p className='text-[1.2rem] mb-1.2'>Date</p>
              <input
              required
                value={taskDate}
                onChange={(e) =>
                  setTaskDate(e.target.value)
                }
                type="date" className='border-amber-50  border-2 p-1.5 border-be-rose-50 rounded md:w-[80%] w-[90%] text-amber-50' />
            </div>
            <div className="">
              <p className='text-[1.2rem] mb-1.2'>Assign To</p>
              <input
              required
                value={assignTo}
                onChange={(e) =>
                  setAssignTo(e.target.value)
                }
                type="text" className='border-amber-50 border-2 p-1.5 border-be-rose-50 rounded md:w-[80%] w-[90%] text-amber-50' placeholder='Employee Name' />
            </div>
            <div className="">
              <p className='text-[1.2rem] mb-1.2'>Category</p>
              <input
              required
                value={category}
                onChange={(e) =>
                  setCategory(e.target.value)
                }
                type="text" className='border-amber-50 border-2 p-1.5 border-be-rose-50 rounded md:w-[80%] w-[90%] text-amber-50' placeholder='design , dev etc.' />
            </div>
          </div>
          <div className="md:w-1/2 w-full p-4 mx-5">
            <div className="h-[80%] w-full">
              <p className='text-[1.2rem] mb-1.2'>Description</p>
              <textarea
              required
                value={taskDescription}
                onChange={(e) =>
                  setTaskDescription(e.target.value)
                }
                className='h-[80%] md:w-[80%] w-[90%] flex p-5 border-amber-50 border-2' name="description" id="" placeholder=''></textarea>
            </div>
            <div className=" w-[80%] flex justify-center mt-3 mb-5">
              <button type="submit" className='bg-blue-500 text-white p-2 rounded'>Create Task</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddTask
