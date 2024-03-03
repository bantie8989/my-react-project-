import { useState } from "react";
function ToDoList() {
  const [tasks, setTasks] = useState([
    "eat break fast ",
    "go to gym",
    "take a shower",
    "eat lunch",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }



  function deleteTask(index) {
    const updateTasks = tasks.filter((task, i) => i !== index);
    setTasks(updateTasks);
  }


  function upTask(index){

  }

  function downTask(index){
    
  }




  return (
    <div className="to-do-list-container">
      <h1>To-do-List</h1>
      <div>
        <input
          type="text"
          onChange={handleInputChange}
          value={newTask}
          placeholder="Enter a task"
        />
        <button className="add-button" onClick={addTask()}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete" onClick={() => deleteTask(index)}>
              delete
            </button>
            <button className="upTask" onClick={() => upTask(index)}>
              move up
            </button>
            <button className="downTask" onClick={() => downTask(index)}>
              move down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default ToDoList;
