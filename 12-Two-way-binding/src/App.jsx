import React, { useState } from 'react'

const App = () => {

    const [title, settitle] = useState('')

    const Submit = (e)=> {
      e.preventDefault()
      console.log('Form Submited',title);
      settitle('')
    }
  return (
    <div>
      <form onSubmit={(e)=>{
        Submit(e)
      }}>
        <input 
        type="text" 
        placeholder='Enter the name' 
        value={title}
        onChange={(e)=>{
          settitle(e.target.value)
        }}/>
      <button>Click Me</button>
      </form>
    </div>
  )
}

export default App