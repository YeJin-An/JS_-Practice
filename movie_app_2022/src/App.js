import React from "react";

function Food({ name }) {
  return <h3>I like {name}</h3>;
}

function App() {
  return (
    <div>
      <h1>JS-Pracive</h1>
      <Food name="Kimchi" />
      <Food name="ramen" />
      <Food name="samgiopsal" />
      <Food name="chukumi" />
    </div>
  );
}

export default App;
