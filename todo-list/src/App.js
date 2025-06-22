import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Button, Icon } from 'semantic-ui-react';
import Container from './components/Container';
import Header from './components/Header';
import InputTask from './components/InputTask';
import { useEffect, useState } from 'react';
import TaskContent from './components/TaskContent';

function App() {
  
  let initialTasks = JSON.parse(localStorage.getItem('tasks'));
  
  if (!initialTasks) {
    initialTasks = [];
  }

  const [tasks, setTasks] = useState(initialTasks);

  useEffect(() => {
    if (initialTasks) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
      localStorage.setItem('tasks', JSON.stringify([]));
    }
  }, [initialTasks, tasks]);
    
  const createTask = (task) => {
    setTasks([...tasks, task]);
    
  };
  console.log(tasks);
  const deleteTask = (id) => {
    debugger;
    console.log('Eliminando tarea desde APP JS: '+id);
    const currentTask = tasks.filter((task) => task.idTask !== id)
    console.log(currentTask);
    setTasks(currentTask);
    
  }

  return (
    <Container>
      <Header />
      <InputTask createTask={createTask}></InputTask>
      <TaskContent tasks={tasks} deleteTask={deleteTask}/>
    </Container>
  );
}

export default App;
