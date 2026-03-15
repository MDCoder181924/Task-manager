import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'

const EmployeTakList = ({Data}) => {
  return (
    <div  className='mx-10 bg-[#211f1f] flex flex-wrap gap-5 pb-10 scrollbar-hide px-5 h-120 overflow-y-scroll scrollbar-hide my-10'>
      {Data?.tasks?.map((elem , idx)=>{
        if(elem.completed){
          return <CompleteTask key={idx} task={elem}/>
        }
        if(elem.failed){
          return <FailedTask key={idx} task={elem}/>
        }
        if(elem.active){
          return <AcceptTask key={idx} task={elem}/>
        }
        if(elem.newTask){
           return <NewTask key={idx} task={elem}/>
        }
      })}
    </div>
  )
}

export default EmployeTakList
