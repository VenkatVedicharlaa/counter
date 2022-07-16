import react, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const inc = () => {
    if (count > 4) {
      alert("You are reached out of 5");
    } else {
      setCount(count + 1);
    }
  };

  const dec = () => {
    if (count < -4) {
      alert("You are reached - out of 5");
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <h1>counter</h1>
      <button onClick={inc}>+</button> {count}
      <button onClick={dec}>-</button>
    </div>
  );
};
export default App;
