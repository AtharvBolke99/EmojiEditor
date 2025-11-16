import React from "react";

function BackColor({bgColor, setBgColor}) {
  return (
    <div
      style={{ backgroundColor: bgColor}}
      className="h-11 w-11 m-2 cursor-pointer"
      onClick={() => {
        setBgColor(bgColor);
      }}
    ></div>
  );
}

export default BackColor;
