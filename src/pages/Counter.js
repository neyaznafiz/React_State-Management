import React from "react";

function Counter() {
  return (
    <div className="">
      <div className="flex flex-col gap-y-4 justify-center items-center h-40 w-72 rounded-lg text-2xl shadow-2xl">
        <h1>0</h1>

        <div className="space-x-5">
          <button className="text-lg bg-primary/40 px-2 py-1 rounded-full">
            Increment
          </button>

          <button className="text-lg bg-red-800/40 px-2 py-1 rounded-full">
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
