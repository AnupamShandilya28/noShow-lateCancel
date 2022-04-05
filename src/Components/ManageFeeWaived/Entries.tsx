import React from 'react'
import  Entry  from "./Entry"
import array from './API/data'

const Entries = () => {
  
  return (
    <div>
      {array.map(item=><Entry key={item.id} item={item}/>)}
    </div>
  )
}

export default Entries