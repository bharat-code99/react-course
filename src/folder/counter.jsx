import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const createCounter = (func) => {
    const incrementer = () => {
      func((prev) => prev + 1);
    };
    return incrementer;
  };

  return (
    <div className="flex flex-col items-center gap-10 pt-20">
      <button
        className="px-3 py-2 rounded-md bg-blue-500 text-white font-medium"
        onClick={createCounter(setCount)}
      >
        Increment
      </button>

      <button
        className="px-3 py-2 rounded-md bg-blue-500 text-white font-medium"
        onClick={createCounter(setCount2)}
      >
        Increment
      </button>

      <p className="text-3xl font-medium text-gray-800">{count}</p>
      <p className="text-3xl font-medium text-gray-800">{count2}</p>
    </div>
  );
}
