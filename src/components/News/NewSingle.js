import React from 'react'

function NewSingle({item}) {
  return ( 
   <div className='container'>
    <div className='card'>
      <div className='card-image'>
          <img src={item.urlToImage} alt={item.title}/>
          <span className='card-title'>{item.source.name}</span>
      </div>
      <div className='card-content'>
         {item.title}
      </div>
      <div className='card-ation'>
         <a href={item.url} target="_blank" rel='noreferrer'>Full Article</a>
      </div>
    </div>
 </div>  
  )
}

export default NewSingle