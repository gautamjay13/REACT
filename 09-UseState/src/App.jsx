import React, { useState } from 'react'

const App = () => {

    const [num, setnum] = useState(2)

    function increase(params) {
        setnum(num+1)
    }
    function decrease(params) {
        setnum(num-1)
    }
    function Jump(params) {
        setnum(num+5)
    }
    function divide(params) {
        setnum(num/2)
    }

  return (
    <div>
        <h1>{num}</h1>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={Jump}>Jump By 5</button>
        <button onClick={divide}>divide By 2</button>
        </div>
  )
}

export default App