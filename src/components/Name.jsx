import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Name = () => {
    
    const [wisherName, setWisherName] = useState('')
    let navigate = useNavigate()
    
    const handleWisher = () =>{
        localStorage.setItem("Wisher", wisherName)
        navigate('/')
    }
    
  return (
    <div className='flex items-center justify-center h-screen gap-5 p-3'>
        {/* <form action=""> */}
        <input type="text" className='border-2 rounded-xl p-2 w-full phone:w-64' placeholder='Please enter your name' onChange={(e)=>{setWisherName(e.target.value)}} />
        <button type='submit' className='border-2 border-sky-500 p-2 px-5 rounded-xl' onClick={handleWisher}>Go</button>
        {/* </form> */}
    </div>
  )
}

export default Name