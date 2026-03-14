import React from 'react'
import Hedar from './hedar'
import AddTask from './AddTask'
import EmployeAssignedTaskList from './EmployeAssignedTaskList'

const ManagerDashbord = ({ handleLogout }) => {
    return (
        <div className='bg-[#101010] h-screen w-screen text-white'>
            <Hedar handleLogout={handleLogout} />
            <AddTask />
            <EmployeAssignedTaskList />
        </div>
    )
}

export default ManagerDashbord
