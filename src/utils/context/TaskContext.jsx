import { createContext, useState } from "react";
export const TaskContext = createContext()

export default function TaskProvider({children}) {
    const [ tasks, setTasks] = useState([])
    function addNewTask(task) {
        setTasks([...tasks, task])
    }
    return (
        <TaskContext.Provider value = {{ tasks, addNewTask }}>
            {children}
        </TaskContext.Provider>
      )
}