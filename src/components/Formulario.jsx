import { useState } from "react";
import Swal from 'sweetalert2'

function Formulario({addTodo}) {

    const [todo, setTodo] = useState({
        title: '',
        description: '',
        state: 'pendiente',
        priority: false
    });
    
    //! controla los cambios dentro del formulario.
    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(todo)

        if(todo.title.trim() === '' || todo.description.trim() === ''){
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡Existen campos sin completar!',
                confirmButtonColor: '#434343',
              })    
        }

        addTodo({
            id: Date.now(),
            ...todo,
            state: todo.state === 'completado'
        })

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Tarea agregada exitosamente',
            showConfirmButton: false,
            timer: 2000
          })
    };

    //! controla los cambios del estado para ir modificandolo.
    const handleChange = (e) => {
        // console.log(e.target.value)
        // console.log(e.target.name)

        setTodo({
            ...todo,
            [e.target.name]: 
                e.target.type === 'checkbox' 
                    ? e.target.checked 
                    : e.target.value
        })
    }

  return (
    <form onSubmit={handleSubmit} >
        <input 
            type="text" 
            placeholder="Ingrese Todo" 
            className="form-control mb-2" 
            name="title"
            value={todo.title}
            onChange={handleChange}
        />
        <textarea 
            className="form-control mb-2" 
            placeholder="Ingrese descripción" 
            name="description"
            value={todo.description}
            onChange={handleChange}
        />
        <div className="form-check mb-2">
            <input 
                type="checkbox" 
                name="priority"
                className="form-check-input"
                id="inputCheck"
                checked={todo.priority}
                onChange={handleChange}
            />
            <label htmlFor="inputCheck">Dar prioridad</label>
        </div>
        <select 
            className="form-select mb-2" 
            name="state" value={todo.state} 
            onChange={handleChange}
            >
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
        </select>
        <button 
            type="submit" 
            className="btn btn-primary"
            >
                Agregar Todo
        </button>
        
    </form>
  )
}

export default Formulario