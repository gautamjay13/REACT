import React from "react";

const App = () => {
  function BtnClicked(params) {
    console.log("hello the btn is clicked");
  }

  return (
    <div>
      <button onClick={BtnClicked}>Click me</button>
    </div>
  );
};

export default App;
