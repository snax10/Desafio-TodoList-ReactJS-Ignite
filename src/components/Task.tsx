import styles from "./Task.module.css";
import { TbTrash } from "react-icons/tb";
import { ITask } from "../App";
import { BsFillCheckCircleFill } from "react-icons/bs";

interface TaskProps {
  task: ITask;
  onDelete: (taskId: string) => void;
  toggleTaskById: (taskId: string) => void;
}

export function Task({ task, onDelete, toggleTaskById }: TaskProps) {
  const isCompleted = task.isCompleted;

  return (
    <div className={styles.task}>
      <button className={styles.check} onClick={() => toggleTaskById(task.id)}>
        {isCompleted ? <BsFillCheckCircleFill size={20} /> : <div />}
      </button>

      <p>{task.title}</p>

      <button className={styles.delete} onClick={() => onDelete(task.id)}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
