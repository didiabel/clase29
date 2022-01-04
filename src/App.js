import logo from './logo.svg';
import './App.css';
import Todolist from './components/Todolist';
import Tasks from './components/Todolist/Tasks\'';
import { useState } from 'react';
import { v4 as uuidv4} from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [tareas, setTareas] = useState([])
  console.log(tareas);

  const agregarTareas=(nombre)=>{
    setTareas([{ id: uuidv4(), name: nombre}, ...tareas])
  }
  const eliminarTarea = (id) => {
    setTareas(tareas.filter(tarea => tarea.id !==id))
  }

  return (
  <div className='all p-5 '>
    <h1>To Do List</h1>
    <div className="container p-5 ">
      <div className='d-flex justify-content-center' >
      <Todolist agregarTareas={agregarTareas} />
      </div>
      <div className='listaa'>
      <Tasks tareas={tareas} eliminarTarea={eliminarTarea}/>
      </div>
    </div>
  </div>  
  );
}

export default App;
