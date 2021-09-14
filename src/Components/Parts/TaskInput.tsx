import React, { useState } from "react";
import { Task } from "Types";
import styled from 'styled-components';

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

    setTasks([newTask, ...tasks])
    setInputTitle('')

  }

  return (
    <div>
      <InputForm>
        <Inner className="inner">
          <Input
            type="text"
            className="input"
            value={inputTitle}
            onChange={handleInputChange}
          />
          <button onClick={handleSubmit} className="btn is-primary">追加</button>
        </Inner>
      </InputForm>
    </div>
  )
}

export default TaskInput;

const InputForm = styled.div`
margin-bottom: 40px;
background: #f9f3ee;
padding: 40px 0;
border-bottom: 1px solid #d7d2cd;
`
const Inner = styled.div`
display: flex;
position: relative;
max-width: 700px;
margin: 0 auto;
`
const Input = styled.input`
width: 80%;
font-size: 15px;
outline: none;
border: solid 3px #d7d2cd;
padding: 10px;
border-radius: 7px;
margin-right: 10px;
&:focus{
  background: #f9f9f0;
}
`