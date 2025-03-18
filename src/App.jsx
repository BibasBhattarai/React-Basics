import React, { useState } from "react"
// import Card from "./Components/Card";

function App(){

 const [banned,setbanned]=useState(false)
  // const data=["messi", "suarez", "Neymar"]
  return (
    <div className="px-5 py-5">
      {/* <Card /> */}
      <h1>{banned.toString()}</h1>
      <button onClick={()=>{setbanned(!banned)}} className="px-2 py-1 bg-blue-700 rounded-full mt-2">change the score</button>
    </div>
    
  )
}

export default App;
