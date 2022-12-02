import React, { createContext, useState } from "react";
import Parent from "./pages/count/Parent";
import Counter from "./pages/Counter";
import LongForm from "./pages/form/LongForm";
import ShortForm from "./pages/form/ShortForm";

export const COUNTER_CONTEXT = createContext();

function App() {
  const [count, setCount] = useState(0);

  const value = {
    count,
    setCount,
  };

  return (
    <COUNTER_CONTEXT.Provider value={value}>
      <div className="flex gap-x-10 justify-center items-center h-screen w-screen">
        {/* <Parent /> */}
        {/* <ShortForm /> */}
        {/* <Counter/> */}
        <LongForm/>
      </div>
    </COUNTER_CONTEXT.Provider>
  );
}

export default App;
