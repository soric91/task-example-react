import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';


const App = () => {


 
  return (
  <div className="App">
    <TaskForm />
    <TaskList />
  </div>
  );
}; 

export default App;
