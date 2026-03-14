import React from 'react'
import Hedar from './hedar'
import CountTask from './CountTask'
import EmployeTakList from '../Task/EmployeTakList'

const EmployeDashboard = ({Data, handleLogout}) => {
  return (
    <div className=' text-white bg-[#101010] h-screen w-screen'>
      <Hedar Data={Data} handleLogout={handleLogout}/>
      <CountTask Data={Data}/>
      <EmployeTakList Data={Data}/>
    </div>
  )
}

export default EmployeDashboard
