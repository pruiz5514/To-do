import React from 'react';
import { Header } from './Header/Header';
import { Search } from './Search/Search';
import { Counter } from './Counter/Counter';
import { List } from './List/List';
import { Items } from './Items/Items';
import { AddButton } from './AddButton/AddButton';




const tasks = [
  {text: 'Parqueo de la aeronave', completed: true},
  {text: 'Tanqueo de la aeronave', completed: false},
  {text: 'Desabordaje', completed: true},
  {text: 'Ingreso de imagen y presentacion', completed: false},
  {text: 'Salida de imagen y presentacion', completed: false},
  {text: 'Abordaje fisico', completed: false}, 
]

function App() {
  const localStorageTasks = localStorage.getItem('task_v1');

  let parsedTask;

  if(!localStorageTasks){
    localStorage.setItem('task_v1',JSON.stringify([]));
    parsedTask=[];
  }
  else{
    parsedTask = JSON.parse(localStorageTasks)
  }

  const [toDo, setToDo] = React.useState(parsedTask)
  const[searchValue, setSearchValue] = React.useState('')

  const completedTasks = toDo.filter(element=>element.completed).length
  const totalTasks = toDo.length

  const searchToDo = toDo.filter(element=>
    element.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));

  const saveTasks = (newTasks) =>{ 
    localStorage.setItem('task_v1',JSON.stringify(newTasks))
    setToDo(newTasks);
  }

  const completeTasks = (text) =>{
    const newTasks=[...toDo];
    const taskIndex = newTasks.findIndex((element)=>element.text==text);
    newTasks[taskIndex].completed=true;
    saveTasks(newTasks)
  }

  const deleteTask = (text) =>{
    const newTasks= [...toDo];
    const taskIndex = newTasks.findIndex((element)=>element.text==text)
    newTasks.splice(taskIndex,1);
    saveTasks(newTasks)
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
