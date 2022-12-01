import React, { useContext } from "react";
import { COUNTER_CONTEXT } from "../../App";
import Child from "./Child";

function Parent() {
  const { count } = useContext(COUNTER_CONTEXT);

  return (
    <div className="space-y-5">
      <div className="flex flex-col justify-center items-center h-40 w-72 border-4 border-primary rounded-lg text-2xl font-semibold shadow-2xl">
        <h1>Parent</h1>
        <h1>{count}</h1>
      </div>

      <Child />
    </div>
  );
}

export default Parent;
