import React from "react";
import 'remixicon/fonts/remixicon.css'
import RightContentdown from "./RightContentdown";

const Rightcard = (props) => {
  return (
    <div className="h-full shrink-0 overflow-hidden relative w-80 rounded-4xl">
      <img
        className="h-full w-full object-cover "
        src={props.img}
        alt=""
      />
      <div className="absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between">
        <h2 className="bg-white text-2xl font-bold rounded-full h-10 w-10 flex justify-center items-center ">1</h2>
        <RightContentdown tag={props.tag}/>
      </div>
    </div>
  );
};

export default Rightcard;
