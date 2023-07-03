import React,{useState} from 'react'

function ChallegesFAQ({que,ans}) {
const[isopen,Setisopen]=useState(false)

const handleclick=()=>{
  Setisopen(!isopen)
}

  return (
    <div>
      <div className="   bg-white ml-[400px]  rounded-sm p-2 mt-5 w-[800px]  ">
      <div  className="  flex justify-between" onClick={handleclick}>
    <h1 className='ml-10'>{que}</h1>
    {isopen ? <p>➖</p> : <p>➕</p>}
    </div>
    {isopen ? <p className='text-black pl-10'>{ans}</p> : null}
    </div>
    </div>
  )
}

export default ChallegesFAQ