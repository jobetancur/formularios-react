import { useRef, useState } from "react"

function NoControlado() {

    const [error, setError] = useState("")
    const form = useRef(null)

    const handleSubmit = (event) => {
        event.preventDefault();
        setError(""); // Limpia el estado
        
        const data = new FormData(form.current)
        // Capturar los datos
        const { title, description, state } = Object.fromEntries([
            ...data.entries()
        ])
        console.log(title, description, state)

        // Validar los datos
        if(!title.trim() || !description.trim()) {
            return setError("Llena todos campo")
        }

        // Enviar información
    }

  return (
    <form onSubmit={handleSubmit} ref={form}>
        <input 
            type="text" 
            placeholder="Ingrese Todo" 
            className="form-control mb-2" 
            name="title"
            defaultValue="todo 1"
        />
        <textarea 
            className="form-control mb-2" 
            placeholder="Ingrese descripción" 
            name="description"
            defaultValue="descripción 1"
        />
        <select className="form-select mb-2" name="state">
            <option value="pendiente">Pendiente</option>
            <option value="completado">Completado</option>
        </select>
        <button 
            type="submit" 
            className="btn btn-primary"
            >
                Procesar
        </button>
        {
            error !== "" && error
        }
    </form>
  )
}

export default NoControlado