import {useContext} from 'react'
import { TaskContext } from '../Context/TaskContext';

function TaskCard({ task }) {
  const { deleteTask, completeTask } = useContext(TaskContext);

    return (
        <div className='bg-gray-800 p-4 rounded-lg shadow-md'>
            
            <div className='flex justify-between items-center mb-2'>
                <h1 className='text-xl font-bold text-white capitalize '>{task.title}</h1>
            </div>
            <p className='text-gray-400'>{task.description}</p>
            <button onClick={() => completeTask(task.id)} className={`mt-2 p-2 rounded  hover:bg-amber-200 hover:shadow-lg ${task.completed ? 'bg-green-600' : 'bg-orange-600'}`}>
                {task.completed ? 'Completada' : 'Pendiente'}
            </button>
            <button onClick={() => deleteTask(task.id)} className='mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 hover:shadow-lg'>
                Eliminar tarea
            </button>
        </div>
    );
}


export default TaskCard;