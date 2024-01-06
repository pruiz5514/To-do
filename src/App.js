import React from 'react';
import './App.css';
import { Header } from './Header';
import { Search } from './Search';
import { Counter } from './Counter';
import { List } from './List';
import { Items } from './Items';
import { AddButton } from './AddButton';



// const tasks = [
//   {text: 'Parqueo de la aeronave', completed: true},
//   {text: 'Tanqueo de la aeronave', completed: false},
//   {text: 'Desabordaje', completed: true},
//   {text: 'Ingreso de imagen y presentacion', completed: false},
//   {text: 'Salida de imagen y presentacion', completed: false},
//   {text: 'Abordaje fisico', completed: false}, 
// ]

function App() {
  const [toDo, setToDo] = React.useState(tasks)
  const[searchValue, setSearchValue] = React.useState('')

  const completedTasks = toDo.filter(element=>element.completed).length
  const totalTasks = toDo.length

  const searchToDo = toDo.filter(element=>
    element.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))

  const completeTasks = (text) =>{
    const newTasks=[...toDo];
    const taskIndex = newTasks.findIndex((element)=>element.text==text);
    newTasks[taskIndex].completed=true;
    setToDo(newTasks)
  }

  const deleteTask = (text) =>{
    const newTasks= [...toDo];
    const taskIndex = newTasks.findIndex((element)=>element.text==text)
    newTasks.splice(taskIndex,1);
    setToDo(newTasks)
  }

  return (
    <React.Fragment>
      <Header/>
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <Counter
        completed={completedTasks}
        total={totalTasks} 
      />

      <List>
        {searchToDo.map(task=>(
          <Items
            key={task.text}
            text={task.text}
            completed={task.completed}
            onComplete ={()=>completeTasks(task.text)} 
            onDelete={()=>deleteTask(task.text)}        
          />
        ))}
      </List>

      <AddButton/>
        
    
    </React.Fragment>
  );
}

export default App;
