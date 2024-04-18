import { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleTaskStatusChange = (taskName, isChecked) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.name === taskName
          ? { ...task, status: isChecked ? "Terminé" : "En cours" }
          : task
      )
    );
  };

  const removeTask = (taskName) => {
    if (window.confirm(`Voulez-vous supprimer la tâche ${taskName} ?`)) {
      const newTasks = tasks.filter((task) => task.name !== taskName);
      setTasks(newTasks);
    }
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, handleTaskStatusChange, removeTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider
