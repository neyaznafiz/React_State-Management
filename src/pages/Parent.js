import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div className=" flex flex-col gap-y-5 justify-center items-center h-screen w-screen">
      <div className="flex flex-col justify-center items-center h-40 w-72 border-4 border-primary rounded-lg text-2xl font-semibold">
        <h1>Parent</h1>
        <h1>{count}</h1>
          </div>
          
          <Child count={count} setCount={setCount} />
    </div>
  );
}

export default Parent;
