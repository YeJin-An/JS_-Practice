import { useState } from "react";

function ToDoList() {
  const [ToDo, setToDo] = useState("");
  const [ToDos, setToDos] = useState([]);

  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (ToDo === "") {
      return;
    }

    setToDos((currentArray) => [ToDo, ...currentArray]);
    setToDo("");
  };
  console.log(ToDos);
  return (
    <div>
      <h1>My To Dos {ToDos.length}</h1>
      <form>
        <input
          onChange={onChange}
          value={ToDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button onClick={onSubmit}>Add To Do</button>
      </form>
    </div>
  );
}

export default ToDoList;
