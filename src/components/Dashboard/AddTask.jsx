import React from 'react'

const AddTask = () => {
    return (
        <div>
            <form action="">
                <div className="   h-120 md:h-85 bg-[#211e1e] mx-10 flex justify-between flex-wrap">
                    <div className=" md:w-1/2 p-4 pl-10 flex flex-col gap-3">
                        <div className="">
                            <p className='text-[1.2rem] mb-1.2'>Task Title</p>
                            <input type="text" className='border-amber-50 border-2 p-1.5 border-be-rose-50 rounded w-[70%] text-amber-50' placeholder='Make a UI design ' />
                        </div>
                        <div className="">
                            <p className='text-[1.2rem] mb-1.2'>Date</p>
                            <input type="date" className='border-amber-50  border-2 p-1.5 border-be-rose-50 rounded w-[70%] text-amber-50' />
                        </div>
                        <div className="">
                            <p className='text-[1.2rem] mb-1.2'>Assign To</p>
                            <input type="text" className='border-amber-50 border-2 p-1.5 border-be-rose-50 rounded w-[70%] text-amber-50' placeholder='Employee Name' />
                        </div>
                        <div className="">
                            <p className='text-[1.2rem] mb-1.2'>Category</p>
                            <input type="text" className='border-amber-50 border-2 p-1.5 border-be-rose-50 rounded w-[70%] text-amber-50' placeholder='design , dev etc.' />
                        </div>
                    </div>
                    <div className="w-1/2 p-4">
                        <div className="h-[80%]">
                            <p className='text-[1.2rem] mb-1.2'>Description</p>
                            <textarea className='h-[80%] w-[80%] flex p-5 border-amber-50 border-2' name="description" id="" placeholder=''></textarea>
                        </div>
                        <div className=" w-[80%] flex justify-center mt-3">
                            <button type="submit" className='bg-blue-500 text-white p-2 rounded'>Create Task</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddTask
