import React from 'react'

const App = () => {

    const Submit = (e)=> {
      e.preventDefault()
      console.log('Form Submited');
      
    }
  return (
    <div>
      <form onSubmit={(e)=>{
        Submit(e)
      }}>
        <input type="text" placeholder='Enter the name' />
      <button>Click Me</button>
      </form>
    </div>
  )
}

export default App