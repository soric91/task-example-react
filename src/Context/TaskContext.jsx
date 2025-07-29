import { createContext, useEffect, useState } from 'react';
import {tasks as data} from '../Data/Task.js'; 


export const TaskContext = createContext();

export function TaskContextProvider(props ) {
  
    const [tasks, setTasks] = useState([]);
  
    useEffect(() => {
        setTasks(data);
      }, []);



  const createTask = (TaskTitle, TaskDescription) => {
    if (!TaskTitle || !TaskDescription) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    const newTask = {
      id: tasks.length,
      title: TaskTitle,
      description: TaskDescription,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };


  const completeTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? {...task, completed: !task.completed} : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };


  return (
    <TaskContext.Provider value={{
      tasks,
      createTask,
      deleteTask,
      completeTask
    }}>
      {props.children}
    </TaskContext.Provider>
  )
}

