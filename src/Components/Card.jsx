import React from 'react'

function Card() {

  const data=[
    {image:'https://img.uefa.com/imgml/TP/players/1/2025/324x324/250176450.jpg', name:"lamine yamal", description:"FC barcelona Right winger Player"},
    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKi9LTWTbUmypNJ4XkNs_cZOxmM1lhPsfwyw&s', name:"Pedri", description:"FC barcelona Center Mid player "},
    {image:'https://www.playmakerstats.com/img/jogadores/new/54/45/1035445_pau_cubarsi_20240914123715.png', name:"Cubarsi", description:"FC barcelona Center back player"},
    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-dEWw-kkreHTJCSYG-t2EvZup8r-oDZBRAg&s', name:"Raphina", description:"FC barcelona left winger player"}
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
        </div>
      </div>))}

      

      
      
    </div>
    
    



  )
}

export default Card
