import React from 'react'

const App = () => {

  localStorage.setItem('user', 'John Doe')

  const user = localStorage.getItem('user')
  console.log(user);

  const user1 = {
    username: 'Jay Gautam',
    age: 22,
    city:'Jhansi'
  }

  localStorage.setItem('user1', JSON.stringify(user1))
  

  return (
    <div>App</div>
  )
}

export default App