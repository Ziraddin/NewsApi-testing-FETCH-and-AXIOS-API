import React, { useEffect, useState } from 'react';
import './News.css'
import NewSingle from './NewSingle';
import axios from "axios"
import Error from './Error';

function News({type, query}) {
 
 const [items, setItems] = useState([]);  
 const [error, setError] = useState(); 
 const url = "https://newsapi.org/v2/"+type+"?"+query+"&apiKey=3bcc0945b3294bcdbf2e0f2585f86e88";

 useEffect(()=>{
/* Get Data Using 'fetch' API
   fetch(url)
   .then((res)=>{
    return res.json()
   }).then((data)=>{
     setItems(data.articles)
   }).catch((err)=>{ console.log(err)}) */

   axios.get(url)
   .then((res)=>{
  
      setItems(res.data.articles)
   })
   .catch((err)=>{
    console.log(err)
    setError(true) 
  })
 })

  return (
    <div>
        <ol>
        {error ? <Error /> :
           items.slice(0,4).map((item)=>(
              <NewSingle key={item.url} item={item}/>
            ))
         }
        </ol>
    </div>
  )
}

export default News