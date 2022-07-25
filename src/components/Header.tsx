import Logo from "../assets/Logo.svg";
import styles from "./Header.module.css";

import { AiOutlinePlusCircle } from "react-icons/ai";
import { ChangeEvent, FormEvent, useState } from "react";

interface IHeaderProps {
  addTask: (taskTitle: string) => void;
}

export function Header({ addTask }: IHeaderProps) {
  const [taskTitle, setTaskTitle] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    addTask(taskTitle);
    setTaskTitle("");
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTaskTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logo Image" />

      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input
          placeholder="Adicione uma nova tarefa"
          onChange={onChangeTitle}
          value={taskTitle}
        />
        <button>
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
