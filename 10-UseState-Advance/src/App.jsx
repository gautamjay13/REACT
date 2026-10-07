import React from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setnum] = useState({user:'Sarthak',age: 20})
   function btnclicked(params) {
    const newNum = {...num} ;
    newNum.user = "Jay Gautam"
    newNum.age = 22
    setnum(newNum)
   }

  return (
    <div>
      <h1>{num.user},{num.age}</h1>
      <button onClick={btnclicked}>Click Me!</button>
    </div>
  )
}

export default App