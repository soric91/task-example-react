import { useContext, useState } from 'react';
import { useContext } from 'react';
import { TaskContext } from '../Context/TaskContext';


function TaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title, description);
    setTitle('');
    setDescription('');
  };

  return (
    <div className='p-4 w-80 bg-gray-700 rounded-lg shadow-md mx-auto max-w-md container m-4' >
        <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
            <h1 className='text-2xl font-bold text-white mb-2 text-center'>Crea tu tarea</h1>
            <input className='border p-2 text-white ' type="text" placeholder="Escribe tu tarea" value={title} onChange={(e) => setTitle(e.target.value)}  autoFocus/>
            <textarea className='border p-2 text-white ' placeholder="Escribe la descripción" value={description} onChange={(e) => setDescription(e.target.value)} />
            <button className='border p-2 bg-blue-500 text-white' type="submit">Agregar Tarea</button>
        </form>
    </div>
    
  );
}

export default TaskForm;