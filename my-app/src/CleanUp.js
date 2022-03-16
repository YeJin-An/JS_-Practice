import { useState, useEffect } from "react";

function Hello() {
  // useEffect(() => {
  //   console.log("hi :)");
  //   return () => {
  //     console.log("bye :(");
  //   };
  // });
  useEffect(function () {
    console.log("hi :)");
    return function () {
      console.log("bye :(");
    };
  }, []);
  return <h1>Hello I'm 지노</h1>;
}

function CleanUp() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default CleanUp;
