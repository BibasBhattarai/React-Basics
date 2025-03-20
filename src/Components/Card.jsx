// import React from 'react'

// function Card() {

//   const data=[
//     {name:"diamond and Rust", description:"This song is sang by Joan baez in 1973"},
//     {name:"November rain", description:"This song is sang by Guns and Roses in 1997"},
   

//   ]
//     const handledownload=()=>{alert("you can't download")}

//   return (
    
//       <div className='w-full h-screen bg-zinc-300 justify-center items-center flex flex-col gap-4'>
//         {data.map((items, index)=><div className="w-100 song px-3 py-2 bg-zinc-100 rounded-md">
//           <h3 className='font-semibold text-xl'>{items.name}</h3>
//           <p className='text-xs mt-2'>{items.description}</p>
//           <button onClick={handledownload} className='px-2 py-1 bg-blue-400 text-xs font-semibold text-zinc-800 rounded-md mt-3'> Download</button>
//         </div>)}
        
//       </div>
    
      
//   )
// }

// export default Card


// above example are the example of buidling components



// This below example are the example of the usestate
// import React, { useState } from 'react'

// function Card() {
  
//   const [val ,setval]=useState(false);
  
//   return (
//     <div className='p-5'>
//       <h1>
//      {val===false?"bahar jao":"matjao"}
//       </h1>
//       <button onClick={()=>setval(()=>!val)} className='px-2 py-1 bg-blue-500 rounded-md'> click</button>
     
//     </div>
//   )
// }

// export default Card



// import React, { useState } from 'react'
// import { FaArrowRight } from "react-icons/fa";




// function Card() {

//   const [val,setval]=useState(false)
//   return (
//     <div className='w-full h-screen bg-zinc-800 flex justify-center items-center'>
//     <div className=' relative w-80 h-64 bg-zinc-200 flex rounded-md overflow-hidden '>
//       <img className={`shrink-0 w-full transition-transform duration-700 ease-in-out ${val===false ?'-translate-x-[0%]':'-translate-x-[100%]'} h-full object-cover`} src="https://images.unsplash.com/photo-1741851373816-91017faa8553?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//       <img className={`shrink-0 w-full transition-transform duration-700 ease-in-out  ${val===false ?'-translate-x-[0%]':'-translate-x-[100%]'} h-full object-cover`} src="https://plus.unsplash.com/premium_photo-1712685912274-2483dade540f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D" alt="" />
//       <span onClick={()=>setval(()=>!val)} className='w-10 h-10 bg-zinc-200 absolute bottom-[0%] flex justify-center items-center bg-[#dadada7b] rounded-full left-1/2 -translate-x-[50%] -translate-y-[50%]'>
//       <FaArrowRight />
//       </span>
      


//     </div>
      
//     </div>
//   )
// }

// export default Card






// learning Props section


import React from 'react'

function Card({values,handleclick,index}) {
  const {image,name,profession,friends}=values;
  return (
    <div className='w-52 bg-white rounded-md overflow-hidden'>
      <div className='w-full h-40 bg-sky-200'>
        <img className='w-full h-full object-cover object-[center_top]' src={image} alt="" />
      </div>
      <div className='w-full p-3'>
        <h3 className='text-xl font-semibold'>{name}</h3>
        <h5 className='text-xs'>{profession}</h5>
        <button onClick={()=>handleclick(index)} className='px-3 py-1 text-xs text-white bg-blue-500 font-semibold rounded-md'>{friends===true ? "friends":"Add friends"}</button>
      </div>
    </div>
  
      
    
  )
}

export default Card
