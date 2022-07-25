import styles from "./Task.module.css";
import { TbTrash } from "react-icons/tb";
import { ITask } from "../App";

interface TaskProps {
  task: ITask;
  deleteTask: (taskId: string) => void;
}

export function Task({ task, deleteTask }: TaskProps) {
  function handleDeleteTask() {
    deleteTask(task.id);
  }

  return (
    <div className={styles.task}>
      <button className={styles.check}>
        <div />
      </button>

      <p>{task.title}</p>

      <button className={styles.delete} onClick={handleDeleteTask}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
