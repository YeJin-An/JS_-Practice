import { useState, useEffect } from "react";

function Hello() {
  //   useEffect(() => {
  //     console.log("created :)");
  //     return () => console.log("destroyed :(");
  //     // 이것이 clenup function ???
  //   });
  //   return <h1>Hello I'm 지노</h1>;

  function byFn() {
    console.log("bye :(");
  }
  function hiFn() {
    console.log("created :)");
    return byFn;
  }
  useEffect(hiFn, []);
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
