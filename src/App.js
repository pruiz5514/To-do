import React from 'react';
import './App.css';
import { Header } from './Header';
import { Search } from './Search';
import { Counter } from './Counter';
import { List } from './List';
import { Items } from './Items';
import { AddButton } from './AddButton';



const tasks = [
  {text: 'Parqueo de la aeronave', completed: true},
  {text: 'Tanque de la aeronave', completed: false},
  {text: 'Desabordaje', completed: true},
  {text: 'Ingreso de imagen y presentacion', completed: false},
  {text: 'Salida de imagen y presentacion', completed: false},
  {text: 'Abordaje fisico', completed: false},
  
]

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Search/>
      <Counter/>

      <List>
        {tasks.map(task=>(
          <Items
            key={task.text}
            text={task.text}
          />
        ))}
      </List>

      <AddButton/>
        
    
    </React.Fragment>
  );
}

export default App;
