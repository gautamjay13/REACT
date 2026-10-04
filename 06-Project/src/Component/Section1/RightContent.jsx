import React from "react";
import "remixicon/fonts/remixicon.css";
import Rightcard from "./Rightcard";

const RightContent = (props) => {
  return (
    <div className="h-full flex overflow-x-auto flex-nowrap gap-10 w-2/3 p-6 ">
      {props.users.map(function(elem){
        return <Rightcard img={elem.img} tag={elem.tag}/>
      })}
      
    </div>
  );
};

export default RightContent;
