import TaskCard from "./CardTask";
import { useContext } from 'react';
import { TaskContext } from '../Context/TaskContext';

function TaskList() {
  const { tasks } = useContext(TaskContext);

    if (tasks.length === 0) {
        return (
            <h1 className="text-4xl text-white text-center font-bold">No hay tareas disponibles</h1>
        )
    }

    return (
        <div className='grid grid-cols-3 gap-3 p-4 container mx-auto'>{tasks.map(task => (<div className='' key={task.id}>
            <TaskCard task={task} />
        </div>))}</div>
    )
}

export default TaskList;