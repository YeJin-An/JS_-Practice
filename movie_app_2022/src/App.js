import React from "react";

function Food({ name }) {
  return <h3>I like {name}</h3>;
}

function App() {
  return (
    <div>
      <h1>JS-Pracive</h1>
      <Food name="Kimchi" fav={true} papapapa={["hello", 1, 2, 3, 4, true]} />
    </div>
  );
}

export default App;
