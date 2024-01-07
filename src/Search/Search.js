import React from 'react';
import './Search.css'
function Search ({searchValue,setSearchValue}){
    return(
        <section className='searchContainer'>
            <input placeholder='Buscar tarea' 
                value={searchValue}
                onChange={(event)=>(setSearchValue(event.target.value))}/>
        </section>
    )
}

export {Search}