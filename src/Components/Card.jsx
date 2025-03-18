import React from 'react'

function Card() {

  const data=[
    {image:'https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lfGVufDB8fDB8fHww', name:"Headphone", description:"Good quality headphones" , instock:false},
    {image:'https://plus.unsplash.com/premium_photo-1681302427948-2fd0eca629b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wfGVufDB8fDB8fHww', name:"Laptop", description:"High performance Laptop ",instock:true},
    {image:'https://images.unsplash.com/photo-1622434641406-a158123450f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdhdGNofGVufDB8fDB8fHww', name:"Watch", description:"Water Resistance watch", instock:false},
    {image:'https://images.unsplash.com/photo-1528795259021-d8c86e14354c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D', name:"I-phone", description:"I-phone with good quality Camera",instock:true}
  ]


  return (
    <div className='w-full h-screen flex items-center justify-center bg-zinc-200 gap-10'>

      {data.map((elem,index)=>(<div key={index} className='w-52 bg-zinc-100 rounded-md overflow-hidden'>
        <div className='w-full h-32 bg-zinc-300'>
          <img className='w-full h-full object-cover' src={elem.image} alt="" />
        </div>
        <div className='w-full px-3 py-4'>
          <h2 className='font-semibold'>{elem.name}</h2>
          <p className='text-xs mt-3'>{elem.description}</p>
          <button className={`px-4 py-1 ${elem.instock ?"bg-blue-600":"bg-red-700"}  text-xs rounded text-zinc-100 mt-3 w-fit` }>
          {elem.instock ? "Instock":"Out of stock"}
          </button>
          
        </div>
      </div>))}

      

      
      
    </div>
    
    



  )
}

export default Card
