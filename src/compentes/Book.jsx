import React, { useState } from 'react'

const Book = () => {
    const[inputbutton,setinputbutton] = useState(true)

   const increase = () =>{
  setinputbutton(!inputbutton)
   }


  return (
  <>
  <button onClick={increase}>
    click me 
  </button>
  {inputbutton? <p>Hello </p> : null}
  </>
  )
}


export default Book