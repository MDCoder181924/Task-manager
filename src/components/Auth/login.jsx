import React from 'react'

const Login = () => {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const submitForm = (e) => {
        e.preventDefault()
        console.log(email, password);
        setEmail('')
        setPassword('')
    }


    return (
        <div className='bg-black flex h-screen w-screen justify-center items-center flex-col'>
            <div className=' text-white  border-amber-50 border-2 h-100 w-130 flex  items-center flex-col rounded-lg'>
                <div className="h-15 pt-7 text-3xl  w-full flex justify-center items-center">
                    <h2>Login</h2>
                </div>
                <form onSubmit={ (e)=>{
                    submitForm(e)
                }}  
                action="" className='flex justify-between flex-col items-center h-full w-full mt-2'>
                    <div className="h-full w-full flex flex-col justify-center items-center gap-4">
                        <input 
                        value={email}
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                        required 
                        type="email"
                        placeholder='Enter email id'
                        className='p-5 border-2 rounded-md w-[70%] border-[#554545] bg-[#251e1ec2]' 
                        name="" id="" />

                        <input
                        value={password}
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }}
                        required
                        type="password"
                        placeholder='Enter password'
                        className='p-5 border-2 rounded-md w-[70%] border-[#554545] bg-[#251e1ec2]'
                        name="" id="" />
                    </div>
                    <button type="submit" className='rounded-2xl p-2 px-7 text-white br text-2xl mb-5 bg-[#251e1ec2]'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login
