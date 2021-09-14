import React, { useState } from "react";
import { Task } from "Types";

type Props = {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
  tasks: Task[]
}

const TaskInput= ({ setTasks, tasks }:Props) => {
  const [inputTitle, setInputTitle] = useState<string>("")
  const [count, setCount] = useState<number>(tasks.length + 1)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value);
  };

  const handleSubmit = () => {
    setCount(count + 1)

    const newTask: Task = {
      id: count,
      title: inputTitle,
      done: false
    }
  }

  return (
    <div>
      <div className="input-form">
        <div className="inner">
          <input
            type="text"
            className="input"
            value={inputTitle}
            onChange={handleInputChange}
          />
          <button onClick={handleSubmit} className="btn is-primary">追加</button>
        </div>
      </div>
    </div>
  )
}

export default TaskInput;
