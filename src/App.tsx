import { useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([
    { id: "1", title: "Fazer o curso de React", isCompleted: false },
    { id: "2", title: "Fazer o curso de TypeScript", isCompleted: false },
    { id: "3", title: "Fazer o curso de NodeJS", isCompleted: true },
  ]);

  function addTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }

  function deleteTaskById(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function toggleTaskById(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <>
      <Header addTask={addTask} />
      <Tasks
        tasks={tasks}
        onDelete={deleteTaskById}
        toggleTaskById={toggleTaskById}
      />
    </>
  );
}

export default App;
