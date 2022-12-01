import React, { useReducer } from "react";

function Counter() {
  const initialState = 0;
  const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
      return state + 1;
    } else if (action.type === "DECREMENT") {
      return state - 1;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="">
      <div className="flex flex-col gap-y-4 justify-center items-center h-40 w-72 rounded-lg text-2xl shadow-2xl">
        <h1>{state}</h1>

        <div className="space-x-5">
          <button
            onClick={() => dispatch({ type: "INCREMENT" })}
            className="text-lg bg-primary/40 px-2 py-1 rounded-full"
          >
            Increment
          </button>

          <button
            onClick={() => dispatch({ type: "DECREMENT" })}
            className="text-lg bg-red-800/40 px-2 py-1 rounded-full"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
