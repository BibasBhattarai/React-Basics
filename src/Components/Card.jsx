import React from 'react'

function Card() {

  const data=[
    {name:"diamond and Rust", description:"This song is sang by Joan baez in 1973"},
    {name:"November rain", description:"This song is sang by Guns and Roses in 1997"},
   

  ]
    const handledownload=()=>{alert("you can't download")}

  return (
    
      <div className='w-full h-screen bg-zinc-300 justify-center items-center flex flex-col gap-4'>
        {data.map((items, index)=><div className="w-100 song px-3 py-2 bg-zinc-100 rounded-md">
          <h3 className='font-semibold text-xl'>{items.name}</h3>
          <p className='text-xs mt-2'>{items.description}</p>
          <button onClick={handledownload} className='px-2 py-1 bg-blue-400 text-xs font-semibold text-zinc-800 rounded-md mt-3'> Download</button>
        </div>)}
        
      </div>
    
      
  )
}

export default Card

