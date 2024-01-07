import './Counter.css'

function Counter({completed, total}){
    return(
        <h1 className='taskCounter'>Se han completado <span> {completed} </span> de <span> {total} </span> tareas. </h1>
    )
}

export {Counter}