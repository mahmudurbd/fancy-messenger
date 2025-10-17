import React from "react";

const FancyMessenger = () => {
  return (
    <div
      className=" messenger-area min-h-screen flex items-center justify-center p-6
         bg-gradient-to-br from-gray-100 to-gray-200"
    >
      <div className="messenger-content w-[80%] h-auto min-h-[85vh] shadow-2xl rounded-2xl flex overflow-hidden">
        <div className="messenger-content-left w-[25%] bg-white p-2">left</div>
        <div className="messenger-content-right w-[75%] bg-gray-100 p-2">
          right
        </div>
      </div>
    </div>
  );
};

export default FancyMessenger;
