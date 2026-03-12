import React from 'react'
import Hedar from './hedar'
import CountTask from './CountTask'
import EmployeTakList from './EmployeTakList'

const EmployeDashboard = () => {
  return (
    <div className=' text-white bg-[#101010] h-screen w-screen'>
      <Hedar />
      <CountTask />
      <EmployeTakList />
    </div>
  )
}

export default EmployeDashboard
