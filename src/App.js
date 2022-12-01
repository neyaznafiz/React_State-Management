import React, { createContext, useState } from "react";
import Parent from "./pages/count/Parent";
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
        <ShortForm/>
      </div>
    </COUNTER_CONTEXT.Provider>
  );
}

export default App;
