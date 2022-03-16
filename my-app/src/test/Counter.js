import { useState, useEffect } from "react";
// effect "우리가 딱 한번만 실행하고 싶은 코드"

function Counter() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((prev) => prev + 1);
  // console.log("I run all the time");

  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  // 0
  useEffect(() => {
    console.log("I run only once");
  }, []);

  // 1
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("I run when 'keyword' changs", keyword);
    }
  }, [keyword]);

  // 1
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  // 언제 코드가 실행될지 경정하는 방법을 배웠다!!

  // 2
  useEffect(() => {
    console.log("I run when keyword & counter change");
  }, [counter, keyword]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>continue</button>
    </div>
  );
}

export default Counter;
