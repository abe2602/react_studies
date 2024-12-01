import { useState } from "react";

function TodoList() {
  const [taskList, setTaskList] = useState([]);

  const [taskName, setTaskName] = useState("");

  function addItem() {
    if (taskName != "") {
      const item = { taskName: taskName };
      setTaskList((oldTodoList) => [...oldTodoList, item]);
      setTaskName("");
    }
  }

  function removeItem(removeIndex) {
    if (removeIndex >= 0) {
      const newList = taskList.filter((_, index) => index != removeIndex);

      setTaskList(newList);
    }
  }

  function addTaskName(event) {
    const taskName = event.target.value;
    setTaskName(taskName);
  }

  return (
    <div>
      <h2>To-Do-List</h2>
      <input type="text" onChange={addTaskName} value={taskName} />
      <button onClick={addItem}>Add</button>
      <ul>
        {taskList.map((item, index) => (
          <li key={index}>
            {item.taskName}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
