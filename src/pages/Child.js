import React, { useContext } from "react";
import { COUNTER_CONTEXT } from "../App";


function Child() {
  const { count, setCount } = useContext(COUNTER_CONTEXT);
  return (
    <div className="shadow-2xl">
      <div className="flex flex-col gap-y-4 justify-center items-center h-40 w-72 border-4 border-primary rounded-lg text-2xl">
        <h1>{count}</h1>

        <div className="space-x-5">
          <button
            onClick={() => setCount(count + 1)}
            className="text-lg bg-primary/40 px-2 py-1 rounded-full"
          >
            Increment
          </button>

          <button
            onClick={() => setCount((prvState) => prvState - 1)}
            className="text-lg bg-red-800/40 px-2 py-1 rounded-full"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default Child;
