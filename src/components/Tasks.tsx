import { TbClipboardText } from "react-icons/tb";
import { ITask } from "../App";
import { Task } from "./Task";
import styles from "./Tasks.module.css";

interface TasksProps {
  tasks: ITask[];
  onDelete: (taskId: string) => void;
  toggleTaskById: (taskId: string) => void;
}

export function Tasks({ tasks, onDelete, toggleTaskById }: TasksProps) {
  const tasksQuantity = tasks.length;
  const tasksCompleted = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{tasksQuantity}</span>
        </div>

        <div>
          <p className={styles.purpleText}>Tarefas concluídas</p>
          <span>
            {tasksCompleted} de {tasksQuantity}
          </span>
        </div>
      </header>

      <div className={styles.list}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            toggleTaskById={toggleTaskById}
          />
        ))}
      </div>

      {tasks.length <= 0 && (
        <section className={styles.empty}>
          <TbClipboardText size={50} />
          <div>
            <p>Você ainda não tem tarefas cadastradas</p>
            <span>Crie tarefas e oraganize seus itens a fazer</span>
          </div>
        </section>
      )}
    </section>
  );
}
