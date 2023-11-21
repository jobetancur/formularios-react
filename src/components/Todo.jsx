

function Todo({todo, deleteTodo, updateTodo}) {

    const {id, title, description, state, priority} = todo

  return (
    <li className="list-group-item mb-2">
        <div className="d-flex justify-content-between align-items-start">
            <div>
                <h5 
                    className={`${state && 'text-decoration-line-through'}`} 
                >
                    {title}
                </h5>
                <p className={`${state && 'text-decoration-line-through'}`}>
                    {description}
                </p>
                <div className="d-flex gap-3">
                    <button
                        className="btn btn-sm btn-danger"
                        // Se pasa el id dentro con función de flecha para que la función no se ejecute automaticamente.
                        onClick={() => deleteTodo(id)}
                    >
                        Eliminar
                    </button>
                    <button
                        className="btn btn-sm btn-warning"
                        onClick={() => updateTodo(id)}
                    >
                        Actualizar
                    </button>
                </div>
            </div>
            <span className="badge text-bg-primary">
                {priority && 'Prioridad'}
            </span>
        </div>
    </li>
  )
}

export default Todo