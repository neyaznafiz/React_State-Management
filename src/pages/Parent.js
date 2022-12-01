import React, { useContext } from "react";
import { COUNTER_CONTEXT } from "../App";
import Child from "./Child";

function Parent() {
  const { count } = useContext(COUNTER_CONTEXT);

  return (
    <div className=" flex flex-col gap-y-5 justify-center items-center h-screen w-screen shadow-2xl">
      <div className="flex flex-col justify-center items-center h-40 w-72 border-4 border-primary rounded-lg text-2xl font-semibold">
        <h1>Parent</h1>
        <h1>{count}</h1>
      </div>

      <Child />
    </div>
  );
}

export default Parent;
