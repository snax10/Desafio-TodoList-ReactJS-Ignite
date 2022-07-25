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

  function deleteTask(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  return (
    <>
      <Header addTask={addTask} />
      <Tasks tasks={tasks} deleteTask={deleteTask} />
    </>
  );
}

export default App;
