import { useState, useEffect } from "react";
// effect "우리가 딱 한번만 실행하고 싶은 코드"

function Counter() {
  const [counter, setValue] = useState(0);

  const onClick = () => setValue((prev) => prev + 1);
  console.log("I run all the time");

  const iRunOnlyOnce = () => {
    console.log("I run only once");
  };

  useEffect(iRunOnlyOnce, []);

  useEffect(() => {
    console.log("CALL THE API");
  }, []);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>continue</button>
    </div>
  );
}

export default Counter;
