import React from 'react'
import Hedar from './hedar'
import CountTask from './CountTask'
import EmployeTakList from './EmployeTakList'

const EmployeDashboard = ({Data}) => {
  return (
    <div className=' text-white bg-[#101010] h-screen w-screen'>
      <Hedar Data={Data}/>
      <CountTask Data={Data}/>
      <EmployeTakList Data={Data}/>
    </div>
  )
}

export default EmployeDashboard
