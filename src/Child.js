import React from "react";
function Child({ onDataFromChild }) {
  const handleClick = (data) => {
    onDataFromChild(data);
  };

  return (
    <div>
      <div>
        <p>this is the child class</p>
        <button onClick={() => handleClick("child data")}>Pass Data to Parent</button>
      </div>
    </div>
  );
}

export default Child;
