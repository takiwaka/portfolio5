import React, { useState } from "react";
import TaskList from "Components/Parts/TaskList";
import TaskInput from "Components/Parts/TaskInput";
import { Task } from "Types";
import './Style/task.scss'

const initialState: Task[] = [
  {
    id: 2,
    title: "次のTodo",
    done: false,
  },
  {
    id: 1,
    title: "最初のTodo",
    done: true,
  },
];

const App = () => {
  const [tasks, setTasks] = useState(initialState);

  return (
    <div>
      <TaskInput tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  )
}

export default App;
