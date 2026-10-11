import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
const [data, setdata] = useState([])

const getData = async() => {
  const response = await axios.get('https://picsum.photos/v2/list');
  setdata(response.data);
  
}
   
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function (elem,idx) {
          return <h1>Hello {elem.author}{idx+1}</h1> ;
        })}
      </div>
    </div>
  )
}

export default App