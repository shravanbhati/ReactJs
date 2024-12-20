import { useState } from 'react'

function App() {
 const[color,setColor]=useState("olive")
  return (
    <>
     <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
            <div className='flex flex-wrap justify-center m-1 gap-3 shadow-lg bg-white rounded-3xl px-3 py-2 select-none'>
              <button onClick={()=> setColor("Red")} className='outline-none px-4 py-1 rounded-full text-white shadow-xl bg-red-600'>Red</button>
              <button onClick={()=> setColor("Green")}  className='outline-none px-4 py-1 rounded-full text-white shadow-xl bg-green-600'>Green</button>
              <button onClick={()=> setColor("Purple")}  className='outline-none px-4 py-1 rounded-full text-white shadow-xl bg-purple-600'>Purple</button>
            </div>
        </div>
     </div>
    </>
  )
}

export default App
