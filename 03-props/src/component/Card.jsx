import React from 'react'

const Card = (props) => {
  return (
      <div className="parent">
        <div className="card">
          <img src="https://i.pinimg.com/736x/76/01/f5/7601f57a17473be024d6638225cd2d90.jpg" alt="" />
          <h1>{props.user}</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <button>View Profile</button>
          
        </div>
      </div>
    )
}

export default Card
