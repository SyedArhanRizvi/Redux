import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./Features/Counter/counterSlice";
function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  console.log(count);

  const handleIncrement = () => {
    useDispatch(increment);
  };
  const handleDecrement = () => {
    useDispatch(decrement);
  };

  return (
    <div className="hi">
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <h1>Count: {count}</h1>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
