import { useState } from "react";
import Button from "./Button";

function Counter() {
  const [counter, setValue] = useState(0);

  const onClick = () => setValue((prev) => prev + 1);
  console.log("call an api");

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>continue</button>
    </div>
  );
}

export default Counter;
