import React from 'react'

const RightContentdown = (props) => {
  return (
    <div>
        <div>
          <p className="text-xl leading-normal text-white mb-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
            ab enim ut dolorem ipsa libero fugit excepturi eum molestiae quos!
          </p>
          <div className="flex justify-between">
            <button className="bg-blue-500 text-white font-semibold px-7 py-3 rounded-full text-lg">{props.tag}</button>
            <button className="bg-blue-500 text-white font-semibold px-4 py-3 rounded-full text-lg">
              <i classname="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
    </div>
  )
}

export default RightContentdown