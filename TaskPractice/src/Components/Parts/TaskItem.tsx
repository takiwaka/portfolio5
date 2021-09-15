import React from "react";
import { Task } from "Types";

type Props = {
  //型宣言
  task: Task; // Types.tsxからTaskの型を参照する
  handleDone: (task: Task) => void;
  handleDelete: (task: Task) => void;
};

const TaskItem = ({ task, handleDone, handleDelete }: Props) => {
  return (
    <li className={task.done ? "done" : ""}>
      <label>
        <input
          type="checkbox"
          className="checkbox-input"
          onClick={() => handleDone(task)}
          defaultChecked={task.done}
        />
        <span className="checkbox-label">{task.title}</span>
      </label>
      <button onClick={() => handleDelete(task)} className="btn is-delete">
        削除
      </button>
    </li>
  );
};

export default TaskItem;


