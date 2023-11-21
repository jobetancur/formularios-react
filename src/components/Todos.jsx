import Todo from "./Todo"

function Todos({ todos, deleteTodo, updateTodo }) {

  return (
    <div>
        <h2 className="text-center">Todos</h2>
        <ul className="list-group list-unstyled">
            {
                todos.map((todo) => (
                    <li 
                        key={todo.id} 
                    > 
                        <Todo todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} /> 
                    </li>
                ))
            }
            {
                todos.length === 0 &&
                    <li className="list-group-item mb-2">Todo al día</li>
            }
        </ul>
    </div>
  )
}

export default Todos