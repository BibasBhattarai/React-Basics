// import React, { useState } from "react"
// // import Card from "./Components/Card";

// function App(){

//  const [banned,setbanned]=useState(false)
//   // const data=["messi", "suarez", "Neymar"]
//   return (
//     <div className="px-5 py-5">
//       {/* <Card /> */}
//       <h1>{banned.toString()}</h1>
//       <button onClick={()=>{setbanned(!banned)}} className="px-2 py-1 bg-blue-700 rounded-full mt-2">change the score</button>
//     </div>
    
//   )
// }

// export default App;




// second example of useState
// import React, { useState } from 'react'

// function App() {

//   const [value,setvalue]=useState(15)


//   return (
//     <div className='p-5'>
//       <h1>{value}</h1>
//       <button onClick={()=>setvalue((prev)=>prev+1)} className='px-2 py-1 bg-blue-500  rounded-full'>click and change</button>
//     </div>
//   )
// }

// export default App



// Third example of useState

// import React, { useState } from 'react'

// function App() {
  
//   const[val, setval]=useState({name:"yamal", isbanned:false})
//   return (
//     <div className='p-6'>
//       <h1>name :{val.name}</h1>
//       <h2>isbanned:{val.isbanned.toString()}</h2>
//       <button onClick={()=>setval({...val,isbanned:!val.isbanned})} className={`px-2 py-1 ${val.isbanned ? "bg-blue-500" :"bg-red-500"} rounded-full`}>Change</button>
//     </div>
//   )
// }

// export default App



// fouth example of usestate 

// import React from 'react'
// import { useState } from 'react'

// function App() {
  
//   const [val,setval]=useState({name:"bibas", age:23})
  
//   return (
  
//     <div className='p-5'>
//       <button onClick={()=>{
//         setval({...val,gender:"male"})
//         console.log(val);
        
        
//         }} 
//         className='px-2 py-1 bg-blue-500'>Add</button>
//     </div>
//   )
// }

// export default App



// fifth example of usestate with array

// import React from 'react'
// import { useState } from 'react'

// function App() {
  
//   const[val,setval]=useState([1,2,3,4,5,6,7,8,9])
//   return (
//     <div  className='p-6'>
//     {val.map(items=><h1>{items}</h1>)}
//     <button onClick={()=>setval(()=>{
//      return val.filter((items,index)=>index!=val.length-1)



//     })} className='px-2 py-1 bg-blue-500 rounded-full'>remove</button>
      
//     </div>
//   )
// }

// export default App



//# sixth example of usestate with arrays

// import React from 'react'
// import { useState } from 'react'

// function App() {
  
//   const [val, setval]=useState([1,2,3,4,5,6])
  
//   return (
//     <div className='p-5'>
//       {val.map(items=> <h1>{items}</h1>)}
//       <button onClick={()=>setval(()=>val.filter(items=>items%2!==0))} className='px-1 py-1 bg-green-500 rounded-md '>click</button>
//     </div>
//   )
// }

// export default App



// # seventh example of usestate with arrays 

// import React from 'react'
// import { useState } from 'react'

// function App() {
//   const [val,setval]=useState([1,2,3,4,5,6,7])

  
  
//   return (
//     <div>
//       {val.map(items=><h1>{items}</h1>)}
//       <button onClick={()=>setval([...val,8])} className='px-2 py-1 bg-blue-500 rounded-md' > click
//       </button>
//     </div>
//   )
// }

// export default App




// #Eight example of usestate
// import React from 'react'
// import { useState } from 'react'

// function App() {
//   const[val,setval]=useState([
//     {name:"bibas",age:23},
//     {name:"yamal", age:17},
//     {name:"pedri", age:21}
//   ])
  
  
//   return (
//     <div>
//       {val.map((items)=>(
//         <div>
//         <h1>{items.name}</h1>
//         <h2>{items.age}</h2>

//         </div>
//       ))}
//       <button onClick={()=>setval(()=>val.map(items=>items.name==="yamal"? ({name:"yamal",age:items.age+1}):items))} className='px-2 py-1 rounded-md bg-blue-200 '> click</button>

//     </div>
//   )
// }

// export default App

// Above example are the example of usestate done in App.jsx 



// Now this example of usestate is done in card.jsx which is import from card.jsx

// import React from 'react'
// import Card from './Components/Card'
// function App() {
//   return (
//     <>
//       <Card/>
//       <Card/>

//     </>
//   )
// }

// export default App



// #LEARNING PASSING DATA VIA PROPS

// # EXAMPLE 1

// import React from 'react'
// import Card from './Components/Card'

// function App() {
//   return (
//     <div>
//       <Card text="know more" color="bg-blue-500" />
//       <Card text="download now" color="bg-red-600" />

//     </div>
//   )
// }

// export default App





// # EXAMPLE 2

import React, { useState } from 'react'
import Card from './Components/Card'

function App() {


  const data =[
    {name:"bibas",profession:"coder", image:"https://images.unsplash.com/photo-1492288991661-058aa541ff43?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvdHJhaXQlMjBtYWxlfGVufDB8fDB8fHww,", friends:false },
    {name:"yamal",profession:"footballer", image:"https://images.unsplash.com/photo-1558487661-9d4f01e2ad64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvdHJhaXQlMjBtYWxlfGVufDB8fDB8fHww",friends:false },
    {name:"pedri",profession:"forestry", image:"https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBvdHJhaXQlMjBtYWxlfGVufDB8fDB8fHww",friends:false },
    {name:"cubarsi",profession:"doctor", image:"https://images.unsplash.com/photo-1441786485319-5e0f0c092803?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHBvdHJhaXQlMjBtYWxlfGVufDB8fDB8fHww",friends:false }

  ];

  const [realdata, setrealdata]=useState(data)
  const handlefriendsbutton=(cardindex)=>{
    setrealdata ((previous)=>{
      return previous.map((items,index)=>{
        if (index===cardindex){
          return{...items,friends: !items.friends}
        }
        return items;
      })
    })
  }
  return (
    
    <>
    <div className='w-full h-screen bg-zinc-200 gap-4 flex justify-center items-center'>

    {realdata.map((items,index)=>(
      <Card key={index} index={index} handleclick={handlefriendsbutton} values={items} />
    ))}
    
    </div>
    

    </>

   
  )
}

export default App
